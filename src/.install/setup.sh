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
PACMAN_PACKAGES="$HOME/Downloads/hyprarch2/src/.install/pacman_packages.txt"
AUR_HELPER="paru-bin"
WALLPAPER_REPO="https://github.com/g5ostXa/wallpaper.git"
WALLPAPER_DIR="$HOME/wallpaper"
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

# Script banner
echo -e "${CYAN}==========================${RC}"
echo -e "${CYAN}---> RUNNING SETUP.SH <---${RC}"
echo -e "${CYAN}==========================${RC}"
sleep 3

install_packages() {
	sudo pacman -Syu && sudo pacman -S --needed - <"$PACMAN_PACKAGES"
	cd "$HOME"
	git clone https://aur.archlinux.org/"$AUR_HELPER.git"
	cd "$HOME/$AUR_HELPER/" && makepkg -si

	if [ $? -eq 0 ]; then
		echo -e "${GREEN}Successfully built $AUR_HELPER!${RC}"
		echo -e "${CYAN}Installing some important packages from the AUR...${RC}"
		sleep 1.5
		cd "$HOME"
	else
		echo -e "${RED}Failed to build $AUR_HELPER, Exiting script...${RC}"
		exit 1
	fi

	paru -S --needed --noconfirm bibata-cursor-theme dracula-gtk-theme dracula-icons-theme pacseek-bin protonvpn-cli-community trizen typos-lsp-bin vim-language-server vscodium-bin waypaper wlogout

}

install_wallpaper() {
	if [ -d "$WALLPAPER_DIR" ]; then
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		rm -rf "$WALLPAPER_DIR"
		cd "$HOME" && git clone "$WALLPAPER_REPO"
	else
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		cd "$HOME" && git clone "$WALLPAPER_REPO"
	fi

	if [ $? -eq 0 ]; then
		echo -e "${GREEN}Installed wallpaper !${RC}"
		sleep 2
	else
		echo "${RED}Failed to install wallpaper...${RC}"
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
		cp -r "$HOME/Downloads/hyprarch2/"* "$HOME/"
		sudo cp -r "$HOME/Downloads/hyprarch2/dotfiles/login/issue" "/etc/"
		sudo chown -R root: /etc/issue
	fi

	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW}$HOME/.bashrc exits...${RC}"
	else
		echo -e "${YELLOW}Copying .bashrc to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.bashrc" "$HOME/"
	fi

	if [ -d "$HOME/.version/" ]; then
		echo -e "${YELLOW}$HOME/.version/ exists...${RC}"
	else
		echo -e "${YELLOW}Copying .version/ to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.version/" "$HOME/"
	fi

	if [ -f "$HOME/.gitignore" ]; then
		echo -e "${YELLOW}$HOME/.gitignore exists...${RC}"
	else
		echo -e "${YELLOW}Copying .gitignore to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.gitignore" "$HOME/"
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

install_packages
install_wallpaper
copy_files
create_symlinks
