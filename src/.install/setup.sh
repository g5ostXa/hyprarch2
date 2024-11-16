#!/bin/bash

# -----------------------------------------------------
# setup.sh
# -----------------------------------------------------

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Define variables
PACMAN_PACKAGES="$HOME/Downloads/hyprarch2/src/packages/pacman_packages.txt"
WALLPAPER_REPO="https://github.com/g5ostXa/wallpaper.git"
WALLPAPER_DIR="$HOME/wallpaper"
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		echo -e "${RED};; figlet is not installed...${RC}"
		exit 1
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo -e "${RED};; gum is not installed...${RC}"
		exit 1
	fi

}

is_installed_git() {
	if ! command -v git >/dev/null 2>&1; then
		echo -e "${RED};; git is not installed...${RC}"
		exit 1
	fi

}

install_aur_helper() {
	clear && echo -e "${CYAN}"
	figlet -f smslant "AUR"
	echo -e "${RC}" && echo ""
	is_installed_gum
	echo -e "${YELLOW};; Which aur helper do you want to install?:${RC}" && echo ""
	AUR_HELPER=$(gum choose "yay" "paru" "aura" "CANCEL")

	if [ -n "$AUR_HELPER" ]; then
		if [[ ! "$AUR_HELPER" == "CANCEL" ]]; then
			is_installed_git
			cd && git clone https://aur.archlinux.org/"$AUR_HELPER"-bin
			cd "$AUR_HELPER"-bin && makepkg -si && cd
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
		typos-lsp-bin \
		vim-language-server \
		vscodium-bin \
		waypaper \
		wlogout

	if [ -d "$HOME/$AUR_HELPER-bin" ]; then
		rm -rf "$HOME/$AUR_HELPER-bin"
	fi

}

# Start run / Display script banner / Install pacman packages
clear
is_installed_figlet
echo -e "${CYAN}"
figlet -f smslant "setup.sh"
echo -e "${RC}" && echo ""
sudo pacman -Syu && sudo pacman -S --needed - <"$PACMAN_PACKAGES"

install_wallpaper() {
	if [ -d "$WALLPAPER_DIR" ]; then
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		rm -rf "$WALLPAPER_DIR"
		cd && git clone "$WALLPAPER_REPO"
		echo -e "${GREEN}Wallpaper repository installed !${RC}"
		sleep 2
	else
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		cd && git clone "$WALLPAPER_REPO"
		echo -e "${GREEN}Wallpaper repository installed !${RC}"
		sleep 2
	fi

}

copy_files() {
	if [ -f "$HOME/.bashrc" ]; then
		rm -rf "$HOME/.bashrc"
	fi

	if [ ! -d "$HYPRARCH2_DIR" ]; then
		echo -e "${RED}$HYPRARCH2_DIR directory does not exist, exiting...${RC}"
		exit 1
	else
		cp -r "$HYPRARCH2_DIR"/* "$HOME/"
		sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"
		sudo chown -R root: /etc/issue
	fi

	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW}$HOME/.bashrc exits...${RC}"
	else
		echo ""
		echo -e "${YELLOW}Copying .bashrc to home folder...${RC}"
		echo ""
		cp -r "$HYPRARCH2_DIR/.bashrc" "$HOME/"
	fi

	if [ -d "$HOME/.version/" ]; then
		echo -e "${YELLOW}$HOME/.version/ exists...${RC}"
	else
		echo ""
		echo -e "${YELLOW}Copying .version/ to home folder...${RC}"
		echo ""
		cp -r "$HYPRARCH2_DIR/.version/" "$HOME/"
	fi

	if [ -d "$HOME/.github/" ]; then
		echo -e "${YELLOW}$HOME/.github/ exists...${RC}"
	else
		echo ""
		echo -e "${YELLOW}Copying .github/ to home folder...${RC}"
		echo ""
		cp -r "$HYPRARCH2_DIR/.github/" "$HOME/"
	fi

	sleep 2

}

create_symlinks() {
	ln -s ~/dotfiles/gtk/.Xresources ~/
	ln -s ~/dotfiles/alacritty/ ~/.config/
	ln -s ~/dotfiles/dunst/ ~/.config/
	ln -s ~/dotfiles/gtk/gtk-3.0/ ~/.config/
	ln -s ~/dotfiles/gtk/gtk-4.0/ ~/.config/
	ln -s ~/dotfiles/hypr/ ~/.config/
	ln -s ~/dotfiles/nvim/ ~/.config/
	ln -s ~/dotfiles/rofi/ ~/.config/
	ln -s ~/dotfiles/starship/ ~/.config/
	ln -s ~/dotfiles/swappy/ ~/.config/
	ln -s ~/dotfiles/vim/ ~/.config/
	ln -s ~/dotfiles/wal ~/.config/
	ln -s ~/dotfiles/waybar/ ~/.config/
	ln -s ~/dotfiles/wlogout/ ~/.config/
	ln -s ~/dotfiles/fastfetch/ ~/.config/
	ln -s ~/dotfiles/fish/ ~/.config/
	ln -s ~/dotfiles/pacseek/ ~/.config/
	ln -s ~/dotfiles/waypaper/ ~/.config/

}

install_aur_helper
install_wallpaper
copy_files
create_symlinks
