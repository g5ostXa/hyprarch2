#!/bin/bash

packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"

install_packages() {

sudo pacman -Syu && sudo pacman -S --needed - < "$packages"
git clone https://aur.archlinux.org/paru.git "$HOME"
cd "$HOME/paru" && makepkg -si

if [ $? -eq 0 ]; then
    echo "Paru successfully built! Moving on..."
else
    exit 1
fi

paru -S bibata-cursor-theme dracula-gtk-theme swaylock-effects swww trizen wlogout wlr-randr

}

install_packages
