#!/bin/bash

dotfiles_dir="$HOME/dotfiles/"

dotfiles_dir() {
    if [ -d "$dotfiles_dir" ]; then
        echo "dotfiles directory already exists, aborting!"
        exit 1
    else
        echo "Creating dotfiles directory..." | lolcat
        sleep 2
        mkdir -p "$dotfiles_dir"
        echo "dotfiles directory created!" | lolcat
        sleep 2
    fi

}

setup_config() {
    local paths=(
        "$HOME/.config/fish/"
        "$HOME/.config/autostart/"
        "$HOME/.bashrc"
        "$HOME/.icons"
    )

    for path in "${paths[@]}"; do
        if [ -e "$path" ]; then
            rm -rf "$path"
            echo "Removed $path"
        else
            echo "Path $path does not exist"
        fi
    done

}

copy_files() {
    cp -r "$HOME/Downloads/hyprarch2/.config/"* "$HOME/.config/"
    cp -r "$HOME/Downloads/hyprarch2/.bashrc" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/dotfiles/"* "$HOME/dotfiles/"
    cp -r "$HOME/Downloads/hyprarch2/wallpaper/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/src/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/docs/" "$HOME/"
    cp -r "$HOME/Downloads/hyprarch2/.icons/" "$HOME/"

}

dotfiles_dir
setup_config
copy_files
