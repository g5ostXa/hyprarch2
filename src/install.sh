#!/usr/bin/env bash

CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'
set -Eeuo pipefail

err_report() {
	local status="$1"
	local line="$2"
	local command="$3"
	echo -e "${RED};; Error at line ${line}: ${command} exited with status ${status}${RC}" >&2

}

trap 'err_report "$?" "$LINENO" "$BASH_COMMAND"' ERR
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

if [[ -f "$SCRIPT_DIR/src/Scripts/pacman.sh" ]]; then
	HYPRARCH2_SOURCE="$SCRIPT_DIR"
elif [[ -f "$SCRIPT_DIR/../src/Scripts/pacman.sh" ]]; then
	HYPRARCH2_SOURCE="$(cd "$SCRIPT_DIR/.." && pwd -P)"
else
	HYPRARCH2_SOURCE="$SCRIPT_DIR"
fi

HYPRARCH2_TARGET="${HYPRARCH2_TARGET:-$HOME}"

export HYPRARCH2_SOURCE
export HYPRARCH2_TARGET

install_greeter() {
	clear
	echo -e "${CYAN}"
	cat <<"EOF"
 ___           _        _ _
|_ _|_ __  ___| |_ __ _| | | ___ _ __
 | || '_ \/ __| __/ _` | | |/ _ \ '__|
 | || | | \__ \ || (_| | | |  __/ |
|___|_| |_|___/\__\__,_|_|_|\___|_|

EOF
	echo "Welcome to hyprarch2"

	VERSION_NAME="$HYPRARCH2_SOURCE/.version/latest"

	if [[ -f "$VERSION_NAME" ]]; then
		cat "$VERSION_NAME"
		echo -e "${RC}" && echo ""
	else
		echo ";; Version file not found: $VERSION_NAME"
		echo ""
	fi

	while true; do
		read -r -p ";; DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn):" yn
		case $yn in
		[Yy]*)
			echo ";; Starting Installation..."
			func_main
			break
			;;
		[Nn]*)
			echo ";; Installation canceled..."
			exit 0
			;;
		*)
			echo ";; Please answer yes or no."
			;;
		esac
	done
}

check_paru() {
	if ! command -v "paru" >/dev/null 2>&1; then
		echo -e "${YELLOW};; Paru: Required but not found...${RC}"

		while true; do
			read -r -p ";; Install paru and all hyprarch2 dependencies now? (Yy/Nn):" yn
			case $yn in
			[Yy]*)
				echo ";; Installing paru..."
				mkdir -p "$HYPRARCH2_TARGET/.cache"
				cd "$HYPRARCH2_TARGET/.cache" || exit 1

				if [[ -d "paru" ]]; then
					rm -rf ./paru
				fi

				if ! git clone --depth=1 https://aur.archlinux.org/paru.git; then
					echo -e "${RED};; paru clone failed, exiting...${RC}"
					exit 1
				fi
				cd paru || exit 1

				makepkg -si --noconfirm || exit 1
				cd "$HYPRARCH2_TARGET" || exit 1
				break
				;;
			[Nn]*)
				echo ";; Installation canceled..."
				exit 0
				;;
			*)
				echo ";; Please answer yes or no."
				;;
			esac
		done
	fi
}

check_depends() {
	local -a h2depends=(
		"hyprland"
		"hyprpolkitagent"
		"uwsm"
		"ghostty"
		"aquamarine"
		"waybar"
		"rofi"
		"dunst"
		"libnotify"
		"cliphist"
		"wlogout"
		"xdg-desktop-portal-hyprland"
		"xdg-desktop-portal-gtk"
		"qt5-wayland"
		"waypaper-git"
		"hyprpicker"
		"hyprlock"
		"hyprcursor"
		"hypridle"
		"hyprgraphics"
		"hyprlang"
		"hyprls-git"
		"hyprwayland-scanner"
		"otf-font-awesome"
		"woff2-font-awesome"
		"ttf-fira-sans"
		"ttf-fira-code"
		"ttf-firacode-nerd"
		"gnu-free-fonts"
		"brightnessctl"
		"neovim"
		"nautilus"
		"fastfetch"
		"pavucontrol"
		"pipewire"
		"pipewire-pulse"
		"pipewire-alsa"
		"pipewire-jack"
		"wireplumber"
		"bibata-cursor-theme"
		"dracula-icons-theme"
		"tokyonight-gtk-theme-git"
		"python-pywal16"
		"gtk3"
		"gtk4"
		"awww"
		"fish"
		"starship"
		"python-pip"
		"eza"
		"swappy"
		"firefox-nightly-bin"
		"vscodium-bin"
		"ccache"
		"jq"
		"pacman-contrib"
		"fzf"
		"ttf-0xproto-nerd"
		"grim"
		"bubblewrap"
		"gum"
		"figlet"
	)
	while true; do
		read -r -p ";; Install all required packages now? (y/n): " yn
		case $yn in
		[Yy]*)
			echo ">> Installing dependencies..."
			paru -S --needed "${h2depends[@]}" || exit 1
			break
			;;
		[Nn]*)
			echo ">> Installation canceled."
			exit 0
			;;
		*)
			echo ">> Please answer yes or no."
			;;
		esac
	done

}

backup_existing() {
	local path="$1"
	local backup

	if [[ -e "$path" || -L "$path" ]]; then
		backup="${path}.backup.$(date +%Y%m%d-%H%M%S)"
		echo ";; Backing up $path -> $backup"
		mv -- "$path" "$backup"
	fi

}

src_copy() {
	mkdir -p "$HYPRARCH2_TARGET"
	echo -e "${CYAN};; Copying assets/ ...${RC}"

	backup_existing "$HYPRARCH2_TARGET/assets"
	cp -a "$HYPRARCH2_SOURCE/assets" "$HYPRARCH2_TARGET/assets"
	echo ";; DONE."
	echo -e "${CYAN};; Copying dotfiles/ ...${RC}"

	backup_existing "$HYPRARCH2_TARGET/dotfiles"
	cp -a "$HYPRARCH2_SOURCE/dotfiles" "$HYPRARCH2_TARGET/dotfiles"
	echo ";; DONE."
	echo -e "${CYAN};; Copying src/ ...${RC}"

	backup_existing "$HYPRARCH2_TARGET/src"
	cp -a "$HYPRARCH2_SOURCE/src" "$HYPRARCH2_TARGET/src"
	echo ";; DONE."
	echo -e "${CYAN};; Copying .version/ ...${RC}"

	backup_existing "$HYPRARCH2_TARGET/.version"
	cp -a "$HYPRARCH2_SOURCE/.version" "$HYPRARCH2_TARGET/.version"
	echo ";; DONE."
	echo -e "${CYAN};; Copying issue file ...${RC}"

	if [[ -f "/etc/issue" ]]; then
		sudo cp -a "/etc/issue" "/etc/issue_backup"
	fi
	sleep 1.5

	sudo cp -a "$HYPRARCH2_SOURCE/dotfiles/login/issue" "/etc/issue"
	sudo chown root:root "/etc/issue"
	sudo chmod 644 "/etc/issue"
	echo ";; DONE."

	echo -e "${CYAN};; Copying .bashrc ... ${RC}"
	backup_existing "$HYPRARCH2_TARGET/.bashrc"
	cp -a "$HYPRARCH2_SOURCE/.bashrc" "$HYPRARCH2_TARGET/.bashrc"
	echo ";; DONE."
}

get_wallpaper() {
	echo -e "${YELLOW}For wallpapers to work on hyprarch2, you need to put your walls in ~/wallpaper.${RC}"
	echo -e "${YELLOW}You can add your own walls to that folder later.${RC}"

	while true; do
		read -r -p ";; Install wallpapers now? (Yy/Nn):" yn
		case $yn in
		[Yy]*)
			echo ";; Starting Installation..."
			backup_existing "$HYPRARCH2_TARGET/wallpaper"
			git clone --depth=1 https://github.com/g5ostXa/wallpaper.git "$HYPRARCH2_TARGET/wallpaper"
			break
			;;
		[Nn]*)
			echo ";; Installation canceled..."
			return
			;;
		*)
			echo ";; Please answer yes or no."
			;;
		esac
	done
}

link_one() {
	local src="$1"
	local dest="$2"

	if [[ ! -e "$src" && ! -L "$src" ]]; then
		echo -e "${YELLOW};; Missing source, skipping: $src${RC}"
		return 0
	fi

	backup_existing "$dest"
	ln -s -- "$src" "$dest"

}
create_symlinks() {
	while true; do
		read -r -p ";; Do you want to symlink my dotfiles to your ~/.config/ folder? (Yy/Nn): " yn
		case $yn in
		[Yy]*)
			echo ";; Creating symlinks ..."
			mkdir -p "$HYPRARCH2_TARGET/.config"

			local dotfiles="$HYPRARCH2_TARGET/dotfiles"

			link_one "$dotfiles/gtk/.Xresources" "$HYPRARCH2_TARGET/.Xresources"
			link_one "$dotfiles/ghostty" "$HYPRARCH2_TARGET/.config/ghostty"
			link_one "$dotfiles/btop" "$HYPRARCH2_TARGET/.config/btop"
			link_one "$dotfiles/dunst" "$HYPRARCH2_TARGET/.config/dunst"
			link_one "$dotfiles/gtk" "$HYPRARCH2_TARGET/.config/gtk"
			link_one "$dotfiles/hypr" "$HYPRARCH2_TARGET/.config/hypr"
			link_one "$dotfiles/nvim" "$HYPRARCH2_TARGET/.config/nvim"
			link_one "$dotfiles/rofi" "$HYPRARCH2_TARGET/.config/rofi"
			link_one "$dotfiles/starship.toml" "$HYPRARCH2_TARGET/.config/starship.toml"
			link_one "$dotfiles/swappy" "$HYPRARCH2_TARGET/.config/swappy"
			link_one "$dotfiles/vim" "$HYPRARCH2_TARGET/.config/vim"
			link_one "$dotfiles/wal" "$HYPRARCH2_TARGET/.config/wal"
			link_one "$dotfiles/waybar" "$HYPRARCH2_TARGET/.config/waybar"
			link_one "$dotfiles/wlogout" "$HYPRARCH2_TARGET/.config/wlogout"
			link_one "$dotfiles/fastfetch" "$HYPRARCH2_TARGET/.config/fastfetch"
			link_one "$dotfiles/fish" "$HYPRARCH2_TARGET/.config/fish"
			link_one "$dotfiles/pacseek" "$HYPRARCH2_TARGET/.config/pacseek"
			link_one "$dotfiles/waypaper" "$HYPRARCH2_TARGET/.config/waypaper"
			link_one "$dotfiles/uwsm" "$HYPRARCH2_TARGET/.config/uwsm"
			echo ";; DONE."
			break
			;;
		[Nn]*)
			echo ";; Symlinks not created, please add your configs manually before launching Hyprland..."
			return
			;;
		*)
			echo ";; Please answer yes or no."
			;;
		esac
	done

}

func_main() {
	sudo -v

	if ! bash "$HYPRARCH2_SOURCE/src/Scripts/pacman.sh"; then
		echo -e "${YELLOW};; Warning: failed to run pacman.sh${RC}"
	fi

	check_paru
	check_depends
	src_copy
	get_wallpaper
	create_symlinks
}

verify_install() {
	echo -e "${YELLOW};; Verifying if all essential files are copied...${RC}"
	if [[ -f "$HYPRARCH2_TARGET/.bashrc" ]]; then
		echo -e "${CYAN};; ~/.bashrc initialization successful!${RC}"
	else
		echo -e "${RED};; Failed to initialize ~/.bashrc...${RC}"
	fi
	if [[ -d "$HYPRARCH2_TARGET/.version" ]]; then
		echo -e "${CYAN};; Found ~/.version/ directory!${RC}"
	else
		echo -e "${RED};; ~/.version/ not found...${RC}"
	fi
	if [[ -d "$HYPRARCH2_TARGET/src" ]]; then
		echo -e "${CYAN};; Found ~/src/ directory!${RC}"
	else
		echo -e "${RED};; ~/src/ not found...${RC}"
	fi
	if [[ -d "$HYPRARCH2_TARGET/dotfiles" ]]; then
		echo -e "${CYAN};; Found ~/dotfiles/ directory!${RC}"
	else
		echo -e "${RED};; ~/dotfiles/ not found...${RC}"
	fi
}

install_greeter
verify_install

echo -e "${CYAN}"
echo ";; hyprarch2 dotfiles are now installed!"
echo ""
echo ";; You now may launch hyprland or reboot..."
echo -e "${RC}"
