#!/bin/bash

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Define variables
pacman_packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"
aur_helper="paru-bin"
wallpaper="https://github.com/g5ostXa/wallpaper.git"
wallpaper_dir="$HOME/wallpaper"
pacman_config="$HOME/Downloads/hyprarch2/src/Scripts/pacman.sh"

# Display script banner
echo -e "${CYAN}==========================${RC}"
echo -e "${CYAN}---> RUNNING SETUP.SH <---${RC}"
echo -e "${CYAN}==========================${RC}"
sleep 3

# Configure pacman
source "$pacman_config"

install_packages() {
	sudo pacman -Syu && sudo pacman -S --needed - <"$pacman_packages"
	cd "$HOME"
	git clone https://aur.archlinux.org/"$aur_helper.git"
	cd "$HOME/$aur_helper/" && makepkg -si

	if [ $? -eq 0 ]; then
		echo -e "${GREEN}Successfully built $aur_helper!${RC}"
		echo -e "${CYAN}Installing some important packages from the AUR...${RC}"
		sleep 1.5
	else
		echo -e "${RED}Failed to build $aur_helper, Exiting script...${RC}"
		exit 1
	fi

	cd "$HOME"
	paru -S --needed --noconfirm bibata-cursor-theme dracula-gtk-theme dracula-icons-theme pacseek-bin protonvpn-cli-community trizen typos-lsp-bin vim-language-server vscodium-bin waypaper wlogout

}

remove_existing_local_paths() {
	local paths=(
		"$HOME/.config/fish/"
		"$HOME/.bashrc"
		"$HOME/dotfiles/"
	)

	for path in "${paths[@]}"; do
		if [ -e "$path" ]; then
			rm -rf "$path"
			echo -e "${YELLOW}Removed $path${RC}"
		else
			echo -e "Path $path ${RED}not found, skipping...${RC}"
		fi
	done

}

install_wallpaper() {
	if [ -d "$wallpaper_dir" ]; then
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		rm -rf "$wallpaper_dir"
		cd "$HOME" && git clone "$wallpaper"
	else
		echo -e "${YELLOW}Installing wallpapers...${RC}"
		sleep 1
		cd "$HOME" && git clone "$wallpaper"
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
	cp -r "$HOME/Downloads/hyprarch2/"* "$HOME/"
	sudo cp -r "$HOME/Downloads/hyprarch2/dotfiles/login/issue" "/etc/"
	sudo chown -R root: /etc/issue

	# Temporary fix for issue (#30)
	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW}$HOME/.bashrc exits...${RC}"
	else
		echo -e "${YELLOW}Copying .bashrc to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.bashrc" "$HOME/"
	fi

	# Temporary fix for issue (#30)
	if [ -d "$HOME/.version/" ]; then
		echo -e "${YELLOW}$HOME/.version/ exists...${RC}"
	else
		echo -e "${YELLOW}Copying .version/ to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.version/" "$HOME/"
	fi

	# Temporary fix for issue (#30)
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
remove_existing_local_paths
install_wallpaper
copy_files
create_symlinks
