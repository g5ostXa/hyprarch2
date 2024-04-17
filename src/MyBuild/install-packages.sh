#!/bin/bash

# Install all needed packages and dependencies
install_packages() {

sudo pacman -Syu && sudo pacman -S --needed - < "$packages"
cd "$HOME"; cd;
git clone https://aur.archlinux.org/paru.git
cd paru && makepkg -si
cd $HOME; cd;
paru -S bibata-cursor-theme dracula-gtk-theme pfetch swaylock-effects swww trizen wlogout wlr-randr

}

# Call functions
install_packages
