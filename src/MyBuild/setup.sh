#!/bin/bash

# Create dotfiles directory if needed
function_1() {

if [ -d "$dotfiles_dir" ]; then
    echo "dotfiles directory already exists, aborting!"
else
    echo "Creating dotfiles directory..." | lolcat;
    sleep 2;
    mkdir -p "$dotfiles_dir";
    echo "dotfiles directory created!" | lolcat;
    sleep 2;
fi

}

# Copying files and directories
function_2() {

rm -rf ~/.config/fish/
rm -rf ~/.config/autostart/
rm -rf ~/.bashrc
rm -rf ~/.icons
cp -r "$HOME"/Downloads/hyprarch2/.config/* "$HOME"/.config/;
cp -r "$HOME"/Downloads/hyprarch2/.bashrc ~/
cp -r "$HOME"/Downloads/hyprarch2/dotfiles/* ~/dotfiles
cp -r "$HOME"/Downloads/hyprarch2/wallpaper/ ~/
cp -r "$HOME"/Downloads/hyprarch2/src/ ~/
cp -r "$HOME"/Downloads/hyprarch2/docs/ ~/
cp -r "$HOME"/Downloads/hyprarch2/.icons/ ~/

}

# Call functions
function_1
function_2

