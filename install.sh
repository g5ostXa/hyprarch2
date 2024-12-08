#!/bin/bash

# -----------------------------------------------------------------------------
# install.sh
# -----------------------------------------------------------------------------
# This script installs the hyprarch2 environment by performing the following:
# 1. Displays a greeting using figlet (if installed).
# 2. Checks whether the user wants to proceed with installation.
# 3. Installs required packages from both official repositories and the AUR.
# 4. Installs wallpapers and copies dotfiles into place.
# 5. Creates symlinks for configuration files.
# 6. Cleans up temporary files and directories.
# -----------------------------------------------------------------------------

# ---------------------
# Color Variables
# ---------------------
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# ---------------------
# Configuration Variables
# ---------------------
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
VERSION_NAME="$HYPRARCH2_DIR/.version/latest"
PACMAN_CONFIG="$HYPRARCH2_DIR/src/Scripts/pacman.sh"
PACMAN_PACKAGES="$HYPRARCH2_DIR/src/packages/pacman_packages.txt"
WALLPAPER_REPO="https://github.com/g5ostXa/wallpaper.git"
WALLPAPER_DIR="$HOME/wallpaper"
CLEANUP_SCRIPT="$HOME/src/Scripts/cleanup.sh"

# ---------------------
# Helper Functions
# ---------------------

# Display an ASCII greeting using figlet if installed, else fallback
show_greeting() {
	clear
	echo -e "${CYAN}"
	if command -v figlet >/dev/null 2>&1; then
		figlet -f smslant "Installer"
	else
		cat <<"EOF"
 ___           _        _ _
|_ _|_ __  ___| |_ __ _| | | ___ _ __
 | || '_ \/ __| __/ _` | | |/ _ \ '__|
 | || | | \__ \ || (_| | | |  __/ |
|___|_| |_|___/\__\__,_|_|_|\___|_|
EOF
	fi
	echo "Welcome to hyprarch2"
	cat "$VERSION_NAME"
	echo -e "${RC}\n"
}

# If installing via ssh, use basic bash prompt
# Otherwise, use gum
confirm_installation() {
	if [ -n "$SSH_CONNECTION" ]; then
		while true; do
			read -r -p "Do you want to start the installation now? (Y/N): " yn
			case $yn in
			[Yy]*)
				echo "Starting installation..."
				sleep 2
				break
				;;
			[Nn]*)
				echo "Installation canceled."
				exit
				;;
			*) echo "Please answer yes or no." ;;
			esac
		done
	else
		# Use gum if available, otherwise fallback to basic prompt
		if command -v gum >/dev/null 2>&1; then
			if gum confirm "Do you want to start the installation now?"; then
				echo "Starting installation..."
				sleep 2
			else
				echo "Installation canceled."
				exit
			fi
		else
			while true; do
				read -r -p "Do you want to start the installation now? (Y/N): " yn
				case $yn in
				[Yy]*)
					echo "Starting installation..."
					sleep 2
					break
					;;
				[Nn]*)
					echo "Installation canceled."
					exit
					;;
				*) echo "Please answer yes or no." ;;
				esac
			done
		fi
	fi
}

# Check if all needed packages are installed
require_command() {
	local cmd=$1
	local msg=$2
	if ! command -v "$cmd" >/dev/null 2>&1; then
		echo -e "${RED};; $msg${RC}"
		exit 1
	fi
}

# Prompt user to install AUR helper and packages
install_aur_packages() {
	clear
	echo -e "${CYAN}"
	figlet -f smslant "AUR"
	echo -e "${RC}\n"

	echo -e "${YELLOW}Which AUR helper do you want to install?${RC}\n"
	local AUR_HELPER
	AUR_HELPER=$(gum choose "paru" "yay" "CANCEL")

	if [[ -z "$AUR_HELPER" || "$AUR_HELPER" == "CANCEL" ]]; then
		echo -e "${RED}Operation canceled...${RC}"
		exit 0
	fi

	require_command git "git is not installed..."

	# Install chosen AUR helper
	cd || exit
	git clone "https://aur.archlinux.org/${AUR_HELPER}-bin"
	cd "${AUR_HELPER}-bin" || exit
	makepkg -si --noconfirm
	cd || exit

	# Install packages from AUR
	"$AUR_HELPER" -S --needed --noconfirm \
		bibata-cursor-theme \
		dracula-icons-theme \
		pacseek-bin \
		tokyonight-gtk-theme-git \
		trizen \
		typos-lsp-bin \
		unimatrix-git \
		uwsm \
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
	echo -e "${YELLOW};; Installing wallpapers...${RC}"
	sleep 1
	[ -d "$WALLPAPER_DIR" ] && rm -rf "$WALLPAPER_DIR"
	cd || exit
	git clone "$WALLPAPER_REPO"
	echo -e "${CYAN};; Successfully installed wallpapers!${RC}"
	sleep 2
}

# Dotfiles setup
copy_files() {
	# Backup existing .bashrc
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

	# Ensure .bashrc is present
	if [ ! -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
		cp "$HYPRARCH2_DIR/.bashrc" "$HOME/"
	fi

	# Ensure .version/ exists
	[ ! -d "$HOME/.version/" ] && cp -r "$HYPRARCH2_DIR/.version/" "$HOME/"

	# Ensure .github/ exists
	[ ! -d "$HOME/.github/" ] && cp -r "$HYPRARCH2_DIR/.github/" "$HOME/"

	# Ensure .gitignore exists
	[ ! -f "$HOME/.gitignore" ] && cp "$HYPRARCH2_DIR/.gitignore" "$HOME/"

	sleep 2
}

# Create symlinks from ~/dotfiles to ~/.config
create_symlinks() {
	link_if_exists() {
		local source=$1
		local target=$2
		if [ -e "$source" ]; then
			ln -s "$source" "$target"
		fi
	}

	# Link dotfiles to where they belong
	link_if_exists "$HOME/dotfiles/gtk/.Xresources" "$HOME/.Xresources"
	link_if_exists "$HOME/dotfiles/alacritty" "$HOME/.config/alacritty"
	link_if_exists "$HOME/dotfiles/dunst" "$HOME/.config/dunst"
	link_if_exists "$HOME/dotfiles/gtk/gtk-3.0" "$HOME/.config/gtk-3.0"
	link_if_exists "$HOME/dotfiles/gtk/gtk-4.0" "$HOME/.config/gtk-4.0"
	link_if_exists "$HOME/dotfiles/hypr" "$HOME/.config/hypr"
	link_if_exists "$HOME/dotfiles/nvim" "$HOME/.config/nvim"
	link_if_exists "$HOME/dotfiles/rofi" "$HOME/.config/rofi"
	link_if_exists "$HOME/dotfiles/starship/starship.toml" "$HOME/.config/starship.toml"
	link_if_exists "$HOME/dotfiles/swappy" "$HOME/.config/swappy"
	link_if_exists "$HOME/dotfiles/vim" "$HOME/.config/vim"
	link_if_exists "$HOME/dotfiles/wal" "$HOME/.config/wal"
	link_if_exists "$HOME/dotfiles/waybar" "$HOME/.config/waybar"
	link_if_exists "$HOME/dotfiles/wlogout" "$HOME/.config/wlogout"
	link_if_exists "$HOME/dotfiles/fastfetch" "$HOME/.config/fastfetch"
	link_if_exists "$HOME/dotfiles/fish" "$HOME/.config/fish"
	link_if_exists "$HOME/dotfiles/pacseek" "$HOME/.config/pacseek"
	link_if_exists "$HOME/dotfiles/waypaper" "$HOME/.config/waypaper"
	link_if_exists "$HOME/dotfiles/uwsm" "$HOME/.config/uwsm"
}

# ---------------------
# Installation START
# ---------------------
show_greeting
confirm_installation
require_command figlet "figlet is not installed..."
require_command gum "gum is not installed..."

# Configure pacman
echo -e "${CYAN}"
figlet -f smslant "pacman.sh"
echo -e "${RC}\n"
source "$PACMAN_CONFIG"

# Install main packages
gum spin --spinner points --title "Preparing to install main packages..." -- sleep 5
sudo pacman -Syu && sudo pacman -S --needed - <"$PACMAN_PACKAGES"
sleep 2
set -e

# Install AUR packages
install_aur_packages

# Install wallpapers
install_wallpaper

# Copy dotfiles and related data
copy_files

# Create symlinks for config files
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

# Reload bashrc
source ~/.bashrc

# ---------------------
# Installation END
# ---------------------
echo -e "${CYAN}"
figlet -f smslant "hyprarch2"
echo ""
echo ";; Installation status: COMPLETE"
echo ""
echo -e "${RC}"
