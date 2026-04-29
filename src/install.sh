#!/usr/bin/env bash

CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

HYPRARCH2_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"

set -Eeuo pipefail
trap 'status=$?; echo -e "${RED};; Error at line ${LINENO}: ${BASH_COMMAND} exited with status ${status}${RC}" >&2' ERR

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

	VERSION_NAME="$HYPRARCH2_DIR/.version/latest"

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
			exit
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

				if [ ! -d "$HOME/.cache" ]; then
					mkdir -p "$HOME/.cache"
				fi

				cd "$HOME/.cache" || exit

				if [ -d "paru" ]; then
					rm -rf ./paru
				fi

				if ! git clone --depth=1 https://aur.archlinux.org/paru.git; then
					echo -e "${RED};; paru clone failed, exiting...${RC}"
					exit 1
				fi

				cd paru || exit 1
				makepkg -si --noconfirm || exit 1
				cd "$HOME" || exit 1
				break
				;;
			[Nn]*)
				echo ";; Installation canceled..."
				exit
				;;
			*)
				echo ";; Please answer yes or no."
				;;
			esac
		done
	fi
}

# Install all hyprarch2's external depends
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

src_copy() {
	echo -e "${CYAN};; Copying assets/ ...${RC}"
	backup_existing "$HOME/assets"
	cp -r "$HYPRARCH2_DIR/assets" "$HOME/assets"
	echo ";; DONE."

	echo -e "${CYAN};; Copying dotfiles/ ...${RC}"
	backup_existing "$HOME/dotfiles"
	cp -r "$HYPRARCH2_DIR/dotfiles" "$HOME/dotfiles"
	echo ";; DONE."

	echo -e "${CYAN};; Copying src/ ...${RC}"
	backup_existing "$HOME/src"
	cp -r "$HYPRARCH2_DIR/src" "$HOME/src"
	echo ";; DONE."

	echo -e "${CYAN};; Copying .version/ ...${RC}"
	backup_existing "$HOME/.version"
	cp -r "$HYPRARCH2_DIR/.version" "$HOME/.version"
	echo ";; DONE."

	echo -e "${CYAN};; Copying issue file ...${RC}"

	if [ -f "/etc/issue" ]; then
		sudo cp -r "/etc/issue" "/etc/issue_backup"
	fi

	sleep 1.5
	sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/issue"
	sudo chown root:root /etc/issue
	sudo chmod 644 /etc/issue
	echo ";; DONE."

	echo -e "${CYAN};; Copying .bashrc ... ${RC}"
	backup_existing "$HOME/.bashrc"
	cp -r "$HYPRARCH2_DIR/.bashrc" "$HOME/.bashrc"
	echo ";; DONE."
}

# Wallpapers are important
get_wallpaper() {
	echo -e "${YELLOW}For wallpapers to work on hyprarch2, you need to put your walls in ~/wallpaper.${RC}"
	echo -e "${YELLOW}You can add your own walls to that folder later${RC}"

	while true; do
		read -r -p ";; Install wallpapers now? (Yy/Nn):" yn

		case $yn in
		[Yy]*)
			echo ";; Starting Installation..."
			backup_existing "$HOME/wallpaper"
			git clone --depth=1 https://github.com/g5ostXa/wallpaper.git "$HOME/wallpaper"
			break
			;;
		[Nn]*)
			echo ";; Installation canceled..."
			return
			;;
		*)
			echo ";; Please ainswer yes or no."
			;;
		esac
	done
}

backup_existing() {
	local path="$1"
	if [[ -e "$path" || -L "$path" ]]; then
		local backup="${path}.backup.$(date +%Y%m%d-%H%M%S)"
		echo ";; Backing up $path -> $backup"
		mv -- "$path" "$backup"
	fi

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

			mkdir -p "$HOME/.config"
			local dotfiles="$HOME/dotfiles"

			link_one "$dotfiles/gtk/.Xresources" "$HOME/.Xresources"
			link_one "$dotfiles/ghostty" "$HOME/.config/ghostty"
			link_one "$dotfiles/btop" "$HOME/.config/btop"
			link_one "$dotfiles/dunst" "$HOME/.config/dunst"
			link_one "$dotfiles/gtk" "$HOME/.config/gtk"
			link_one "$dotfiles/hypr" "$HOME/.config/hypr"
			link_one "$dotfiles/nvim" "$HOME/.config/nvim"
			link_one "$dotfiles/rofi" "$HOME/.config/rofi"
			link_one "$dotfiles/starship.toml" "$HOME/.config/starship.toml"
			link_one "$dotfiles/swappy" "$HOME/.config/swappy"
			link_one "$dotfiles/vim" "$HOME/.config/vim"
			link_one "$dotfiles/wal" "$HOME/.config/wal"
			link_one "$dotfiles/waybar" "$HOME/.config/waybar"
			link_one "$dotfiles/wlogout" "$HOME/.config/wlogout"
			link_one "$dotfiles/fastfetch" "$HOME/.config/fastfetch"
			link_one "$dotfiles/fish" "$HOME/.config/fish"
			link_one "$dotfiles/pacseek" "$HOME/.config/pacseek"
			link_one "$dotfiles/waypaper" "$HOME/.config/waypaper"
			link_one "$dotfiles/uwsm" "$HOME/.config/uwsm"

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

	if ! bash "$HYPRARCH2_DIR/src/Scripts/pacman.sh"; then
		echo -e "${YELLOW};; Warning: failed to run pacman.sh${RC}"
	fi

	check_paru
	check_depends
	src_copy
	get_wallpaper
	create_symlinks
}

# Script entry
install_greeter

# Check if essential files were copied
echo -e "${YELLOW};; Verifying if all essential files are copied...${RC}"

# Check .bashrc exists
if [ -f "$HOME/.bashrc" ]; then
	echo -e "${CYAN};; ~/.bashrc initialization successful!${RC}"
else
	echo -e "${RED};; Failed to initialize ~/.bashrc...${RC}"
fi

# Check .version directory exists
if [ -d "$HOME/.version/" ]; then
	echo -e "${CYAN};; Found ~/.version/ directory!${RC}"
else
	echo -e "${RED};; ~/.version/ not found...${RC}"
fi

# Check src directory exists
if [ -d "$HOME/src" ]; then
	echo -e "${CYAN};; Found ~/src/ directory!${RC}"
else
	echo -e "${RED};; ~/src/ not found...${RC}"
fi

# Check if dotfiles exist
if [ -d "$HOME/dotfiles" ]; then
	echo -e "${CYAN};; Found ~/dotfiles/ directory!${RC}"
else
	echo -e "${RED};; ~/dotfiles/ not found...${RC}"
fi

# End of script message
echo -e "${CYAN}"
echo ";; hyprarch2 dotfiles are now installed!"
echo ""
echo ";; You now may launch hyprland or reboot..."
echo -e "${RC}"
