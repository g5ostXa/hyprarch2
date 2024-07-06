#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[0;37m'
RC='\033[0m'

dotfiles_dir="$HOME/dotfiles/"
packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"
aur_helper="paru-bin"

install_packages() {
sudo pacman -Syu && sudo pacman -S --needed - < "$packages"
cd "$HOME"; git clone https://aur.archlinux.org/$aur_helper.git 
cd "$HOME/$aur_helper/" && makepkg -si

if [ $? -eq 0 ]; then
    echo -e "${GREEN}$aur_helper successfully built! Moving on...${RC}"
else
    echo -e "${RED}$aur_helper failed to build... Exiting script!${RC}"
    exit 1
fi

paru -S bibata-cursor-theme dracula-gtk-theme trizen wlogout

}

dotfiles_dir() {
    if [ -d "$dotfiles_dir" ]; then
        echo -e "${RED}$dotfiles_dir already exists, aborting!${RC}"
        exit 1
    else
        echo -e "${CYAN}Creating $dotfiles_dir...${RC}"
        sleep 2
        mkdir -p "$dotfiles_dir"
        echo -e "${GREEN}$dotfiles_dir created!${RC}"
        sleep 2
    fi

}

setup_config() {
    local paths=(
        "$HOME/.config/fish/"
        "$HOME/.bashrc"
        "$HOME/.icons"
    )

    for path in "${paths[@]}"; do
        if [ -e "$path" ]; then
            rm -rf "$path"
            echo -e "${YELLOW}Removed $path${RC}"
        else
            echo -e "${RED}Path $path does not exist${RC}"
        fi
    done

}

copy_files() {
    cp -r "$HOME/Downloads/hyprarch2/.bashrc" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/dotfiles/"* "$dotfiles_dir/"
    cp -r "$HOME/Downloads/hyprarch2/wallpaper/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/src/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/docs/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/.icons/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/sysctl/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/install.sh" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/README.md" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/packages/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/RELEASES/" "$HOME/"

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
    ln -s ~/dotfiles/starship/starship.toml ~/.config/
    ln -s ~/dotfiles/swappy/ ~/.config/
    ln -s ~/dotfiles/vim/ ~/.config/
    ln -s ~/dotfiles/wal ~/.config/
    ln -s ~/dotfiles/waybar/ ~/.config/
    ln -s ~/dotfiles/wlogout/ ~/.config/
    ln -s ~/dotfiles/fastfetch/ ~/.config/
    ln -s ~/dotfiles/fish/ ~/.config/

sudo chown -R "$USER": "$HOME/.config/"*

}

install_packages
dotfiles_dir
setup_config
copy_files
create_symlinks
