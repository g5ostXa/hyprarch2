#!/bin/bash

packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"
aur_helper="paru"

install_packages() {

sudo pacman -Syu && sudo pacman -S --needed - < "$packages"
cd "$HOME"; git clone https://aur.archlinux.org/$aur_helper.git 
cd "$HOME/$aur_helper/" && makepkg -si

if [ $? -eq 0 ]; then
    echo "$aur_helper successfully built! Moving on..."
else
    echo "$aur_helper failed to build... Exiting script"
    exit 1
fi

$aur_helper -S bibata-cursor-theme dracula-gtk-theme swaylock-effects swww trizen wlogout wlr-randr

}

install_packages
