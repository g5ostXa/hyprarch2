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
PACSCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

if [[ -f "$PACSCRIPT_DIR/src/Scripts/pacman.sh" ]]; then
	HYPRARCH2_SOURCE="$PACSCRIPT_DIR"
elif [[ -f "$PACSCRIPT_DIR/../src/Scripts/pacman.sh" ]]; then
	HYPRARCH2_SOURCE="$(cd "$PACSCRIPT_DIR/.." && pwd -P)"
else
	HYPRARCH2_SOURCE="$PACSCRIPT_DIR"
fi

HYPRARCH2_TARGET="${HYPRARCH2_TARGET:-$HOME}"

export HYPRARCH2_SOURCE
export HYPRARCH2_TARGET

start_install() {
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

				if [ ! -d "$HYPRARCH2_TARGET/.cache" ]; then
					mkdir -p "$HYPRARCH2_TARGET/.cache"
				fi

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
		"wlogout-git"
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
		#"firefox-nightly-bin"
		"ccache"
		"jq"
		"pacman-contrib"
		"fzf"
		"ttf-0xproto-nerd"
		"grim"
		"bubblewrap"
		"btop"
		"gum"
		"figlet"
	)
	while true; do
		read -r -p ";; Install all required packages now? (y/n): " yn
		case $yn in
		[Yy]*)
			echo -e "${CYAN}>> Installing dependencies...${RC}"
			echo -e "${CYAN}>> Note: firefox-nightly won't be installed by default, please install your browser after the installation has finished.${RC}"
			sleep 3
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

create_symlinks() {
	while true; do
		read -r -p ";; Do you want to symlink my dotfiles to your ~/.config/ folder? (Yy/Nn): " yn
		case $yn in
		[Yy]*)
			echo ";; Creating symlinks ..."

			if [ ! -d "$HOME/.config" ]; then
				mkdir -p "$HOME/.config"
			fi

			ln -s ~/dotfiles/gtk/.Xresources ~/
			ln -s ~/dotfiles/gtk/gtk-3.0 ~/.config/gtk-3.0
			ln -s ~/dotfiles/gtk/gtk-4.0 ~/.config/gtk-4.0
			ln -s ~/dotfiles/gtk/.gtkrc-2.0 ~/
			ln -s ~/dotfiles/ghostty ~/.config
			ln -s ~/dotfiles/btop ~/.config
			ln -s ~/dotfiles/dunst ~/.config
			ln -s ~/dotfiles/hypr ~/.config
			ln -s ~/dotfiles/nvim ~/.config
			ln -s ~/dotfiles/rofi ~/.config
			ln -s ~/dotfiles/starship/starship.toml ~/.config
			ln -s ~/dotfiles/swappy ~/.config
			ln -s ~/dotfiles/vim ~/.config
			ln -s ~/dotfiles/wal ~/.config
			ln -s ~/dotfiles/waybar ~/.config
			ln -s ~/dotfiles/wlogout ~/.config
			ln -s ~/dotfiles/fastfetch ~/.config
			ln -s ~/dotfiles/fish ~/.config
			ln -s ~/dotfiles/pacseek ~/.config
			ln -s ~/dotfiles/waypaper ~/.config
			ln -s ~/dotfiles/uwsm ~/.config
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

# This is an optional extra for a better looking prompt header.
# Visit https://github.com/g5ostXa/cvndyfetch for more info.
get_cvndyfetch() {
	local cvndy_src="https://github.com/g5ostXa/cvndyfetch.git"
	local cvndy_cache="$HYPRARCH2_TARGET/.cache/cvndyfetch"
	local cvndy_bin="$HYPRARCH2_TARGET/src/cvndyfetch"
	local cvndy_build_bin="$cvndy_cache/cvndyfetch"
	local -a build_flags=(
		"-ldflags"
		"-X main.mainTitle=hyprarch2 -X main.latestVersion=.version/latest"
	)

	while true; do
		read -r -p ";; Install cvndyfetch for an elegant prompt header? (Optional) (Yy/Nn): " yn
		case $yn in
		[Yy]*)
			if ! command -v "go" >/dev/null 2>&1; then
				echo -e "${YELLOW};; Go is required to build cvndyfetch.${RC}"
				if ! sudo pacman -S --needed --noconfirm go; then
					echo -e "${YELLOW};; Could not install Go, skipping cvndyfetch.${RC}"
					return
				fi
			fi

			echo -e "${YELLOW};; Cloning latest cvndyfetch ...${RC}"
			rm -rf "$cvndy_cache"
			mkdir -p "$(dirname "$cvndy_cache")" "$(dirname "$cvndy_bin")"

			if ! git clone --depth=1 "$cvndy_src" "$cvndy_cache"; then
				echo -e "${YELLOW};; Could not clone cvndyfetch, skipping optional prompt header.${RC}"
				return
			fi

			echo -e "${CYAN};; Building cvndyfetch ...${RC}"
			if (cd "$cvndy_cache" && go build "${build_flags[@]}" -o "$cvndy_build_bin" .); then
				backup_existing "$cvndy_bin"
				install -Dm755 "$cvndy_build_bin" "$cvndy_bin"
				echo -e "${CYAN};; cvndyfetch installed to $cvndy_bin.${RC}"
			else
				echo -e "${YELLOW};; Could not build cvndyfetch, keeping the existing prompt header if one is already installed.${RC}"
			fi
			break
			;;
		[Nn]*)
			echo ";; Skipping cvndyfetch."
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
	get_cvndyfetch
}

# Script entry point
start_install

echo -e "${CYAN}"
echo ";; hyprarch2 dotfiles are now installed!"
echo ""
echo ";; You now may launch hyprland or reboot..."
echo -e "${RC}"
