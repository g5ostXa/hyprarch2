#!/bin/bash

# Create all needed symbolic links
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
ln -s ~/dotfiles/swaylock/ ~/.config
ln -s ~/dotfiles/vim/ ~/.config/
ln -s ~/dotfiles/wal ~/.config/
ln -s ~/dotfiles/waybar/ ~/.config/
ln -s ~/dotfiles/wlogout/ ~/.config/
ln -s ~/dotfiles/fastfetch/ ~/.config/

sudo chown -R "$USER": "$HOME/.config/"*

}

create_symlinks
