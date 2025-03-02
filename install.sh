#!/bin/bash

# ---------------------------------
# install.sh
# ---------------------------------

# Quick overview:
# - Install required packages from both official repositories and the AUR.
# - Install wallpapers and copy dotfiles into place.
# - Create symlinks for dotfiles and make them point to -/.config/
# - Clean up

# Color Variables
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Configuration Variables
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
VERSION_NAME="$HYPRARCH2_DIR/.version/latest"
PACMAN_CONFIG="$HYPRARCH2_DIR/src/Scripts/pacman.sh"
PACMAN_PACKAGES="$HYPRARCH2_DIR/src/packages/pacman_packages.txt"
WALLPAPER_REPO="https://github.com/g5ostXa/wallpaper.git"
WALLPAPER_DIR="$HOME/wallpaper"
CLEANUP_SCRIPT="$HOME/src/Scripts/cleanup.sh"

# Installation greeter
if command -v figlet >/dev/null 2>&1; then
	clear
	echo -e "${CYAN}"
	figlet -f smslant "Installer"
	echo "Welcome to hyprarch2"
	cat "$VERSION_NAME"
	echo -e "${RC}" && echo ""
else
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
	cat "$VERSION_NAME"
	echo -e "${RC}" && echo ""
fi

# If installing via ssh, use a basic bash prompt instead
# Basic bash prompt if installing via ssh
if [ -n "$SSH_CONNECTION" ]; then
	while true; do
		read -r -p "DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn):" yn
		case $yn in
		[Yy]*)
			echo ";; Starting Installation..."
			sleep 2
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
else
	# Gum prompt if not using ssh
	if gum confirm "DO YOU WANT TO START THE INSTALLATION NOW?"; then
		echo ";; Starting Installation..."
		sleep 2
	elif [ $? -eq 130 ]; then
		echo ";; Installation canceled..."
		exit 130
	else
		echo ";; Installation canceled..."
		exit
	fi
fi

# Check if all needed packages are installed
required_dependencies() {
	local PACKAGE="$1"
	local CHECK_FAILED="$2"
	if ! command -v "$PACKAGE" >/dev/null 2>&1; then
		echo -e "${RED};; $CHECK_FAILED${RC}"
		exit 1
	fi

}

# Prompt user to install AUR helper and packages
install_aur_packages() {
	clear && echo -e "${CYAN}"
	figlet -f smslant "AUR"
	echo -e "${RC}\n"

	echo -e "${YELLOW};; Which aur helper do you want to install ?${RC}\n"
	AUR_HELPER=$(gum choose "paru" "yay" "CANCEL")

	if [ -n "$AUR_HELPER" ]; then
		if [[ ! "$AUR_HELPER" == "CANCEL" ]]; then
			required_dependencies git ";; git is not installed..."
			cd || exit
			git clone "https://aur.archlinux.org/${AUR_HELPER}-bin"
			cd "${AUR_HELPER}-bin" || exit
			makepkg -si
			cd || exit
		else
			echo -e "${RED};; Operation canceled... :(${RC}"
			exit 0
		fi
	else
		exit 1
	fi

	"$AUR_HELPER" -S --needed --noconfirm \
		bibata-cursor-theme \
		dracula-icons-theme \
		pacseek-bin \
		tokyonight-gtk-theme-git \
		trizen \
		unimatrix-git \
		vim-language-server \
		vscodium-bin \
		waypaper \
		wlogout

	# Remove AUR helper build directory if it exists
	if [ -d "$HOME/${AUR_HELPER}-bin" ]; then
		echo -e "${CYAN};; Removing ${AUR_HELPER}-bin...${RC}"
		rm -rf "$HOME/${AUR_HELPER}-bin"
		sleep 2
	else
		echo -e "${RED};; ${AUR_HELPER}-bin does not exist...${RC}"
		sleep 2
	fi

}

# Install wallpapers from my GitHub
install_wallpaper() {
	echo -e "${YELLOW};; Installing wallpapers...${RC}" && sleep 1
	if [ -d "$WALLPAPER_DIR" ]; then
		rm -rf "$WALLPAPER_DIR"
	fi
	cd || exit
	git clone "$WALLPAPER_REPO"
	echo -e "${CYAN};; Successfully installed wallpapers!${RC}" && sleep 2

}

# Copy files and build structure
main_setup() {
	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Creating a backup of ~/.bashrc...${RC}"
		cp "$HOME/.bashrc" "$HOME/.bashrc.bak"
		echo -e "${YELLOW};; Created ~/.bashrc.bak!${RC}"
		sleep 2
		rm -f "$HOME/.bashrc"
	fi

	# Ensure hyprarch2 directory exists
	if [ ! -d "$HYPRARCH2_DIR" ]; then
		echo -e "${RED};; $HYPRARCH2_DIR does not exist, exiting...${RC}"
		exit 1
	fi

	# Copy all hyprarch2 files to home directory
	cp -r "$HYPRARCH2_DIR"/* "$HOME/"

	# Copy issue file to /etc
	sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"
	sudo chown root:root /etc/issue

	# Check .bashrc exists
	if [ ! -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
		cp "$HYPRARCH2_DIR/.bashrc" "$HOME/"
	fi

	# Check .version/ exists
	if [ ! -d "$HOME/.version/" ]; then
		cp -r "$HYPRARCH2_DIR/.version/" "$HOME/"
	fi

	# Check .github/ exists
	if [ ! -d "$HOME/.github/" ]; then
		cp -r "$HYPRARCH2_DIR/.github/" "$HOME/"
	fi

	# Check .gitignore exists
	if [ ! -f "$HOME/.gitignore" ]; then
		cp "$HYPRARCH2_DIR/.gitignore" "$HOME/"
	fi

	sleep 2

}

# Link dots to ~/.config/
create_symlinks() {
	link_if_exists() {
		local SOURCE_DOTS="$1"
		local TARGET_DOTS="$2"
		if [ -e "$SOURCE_DOTS" ]; then
			ln -s "$SOURCE_DOTS" "$TARGET_DOTS"
		fi

	}

	link_if_exists ~/dotfiles/gtk/.Xresources ~/.Xresources
	link_if_exists ~/dotfiles/alacritty ~/.config/alacritty
	link_if_exists ~/dotfiles/dunst ~/.config/dunst
	link_if_exists ~/dotfiles/gtk/gtk-3.0 ~/.config/gtk-3.0
	link_if_exists ~/dotfiles/gtk/gtk-4.0 ~/.config/gtk-4.0
	link_if_exists ~/dotfiles/hypr ~/.config/hypr
	link_if_exists ~/dotfiles/nvim ~/.config/nvim
	link_if_exists ~/dotfiles/rofi ~/.config/rofi
	link_if_exists ~/dotfiles/starship/starship.toml ~/.config/starship.toml
	link_if_exists ~/dotfiles/swappy ~/.config/swappy
	link_if_exists ~/dotfiles/vim ~/.config/vim
	link_if_exists ~/dotfiles/wal ~/.config/wal
	link_if_exists ~/dotfiles/waybar ~/.config/waybar
	link_if_exists ~/dotfiles/wlogout ~/.config/wlogout
	link_if_exists ~/dotfiles/fastfetch ~/.config/fastfetch
	link_if_exists ~/dotfiles/fish ~/.config/fish
	link_if_exists ~/dotfiles/pacseek ~/.config/pacseek
	link_if_exists ~/dotfiles/waypaper ~/.config/waypaper
	link_if_exists ~/dotfiles/uwsm ~/.config/uwsm

}

# ----------------------------------------------------------------
# Installation START
# ----------------------------------------------------------------
required_dependencies figlet ";; figlet is not installed..."
required_dependencies gum ";; gum is not installed..."

# Configure pacman
echo -e "${CYAN}"
figlet -f smslant "pacman.sh"
echo -e "${RC}\n"
source "$PACMAN_CONFIG"

# Install main packages
gum spin --spinner points --title "Preparing to install main packages..." -- sleep 5
sudo pacman -Syu && sudo pacman -S --needed - <"$PACMAN_PACKAGES"
sleep 2 && set -e

# Call function (AUR)
install_aur_packages

# Call function (Walls)
install_wallpaper

# Call function (Setup)
main_setup

# Call function (Sym)
create_symlinks

# Cleanup
if [ -d "$HYPRARCH2_DIR" ]; then
	echo -e "${YELLOW};; Removing $HYPRARCH2_DIR...${RC}"
	rm -rf "$HYPRARCH2_DIR"
else
	echo -e "${RED};; $HYPRARCH2_DIR does not exist, skipping...${RC}"
fi

# Run cleanup script if available
if [ -f "$CLEANUP_SCRIPT" ]; then
	echo -e "${YELLOW};; Executing cleanup script...${RC}"
	source "$CLEANUP_SCRIPT"
else
	echo -e "${RED};; Cleanup script $CLEANUP_SCRIPT not found, skipping...${RC}"
fi

# Run trash-empty
echo -e "${YELLOW};; Emptying the trash...${RC}"
if command -v trash-empty &>/dev/null; then
	trash-empty
else
	echo -e "${RED};; trash-empty command not found, skipping...${RC}"
fi

# -----------------------------------------------------------------------------
# Installation END
# -----------------------------------------------------------------------------
echo -e "${CYAN}"
figlet -f smslant "hyprarch2"
echo ""
echo ";; Installation status: COMPLETE"
echo ""
echo -e "${RC}"
