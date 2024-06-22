#!/bin/bash

dotfiles_dir="$HOME/dotfiles/"
packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"
aur_helper="paru"

install_packages() {

sudo pacman -Syu && sudo pacman -S --needed - < "$packages"
cd "$HOME"; git clone https://aur.archlinux.org/$aur_helper.git 
cd "$HOME/$aur_helper/" && makepkg -si

if [ $? -eq 0 ]; then
    echo "$aur_helper successfully built! Moving on..." | lolcat
else
    echo "$aur_helper failed to build... Exiting script" | lolcat
    exit 1
fi

$aur_helper -S bibata-cursor-theme dracula-gtk-theme swaylock-effects swww trizen wlogout wlr-randr

}

dotfiles_dir() {
    if [ -d "$dotfiles_dir" ]; then
        echo "$dotfiles_dir already exists, aborting!" | lolcat
        exit 1
    else
        echo "Creating $dotfiles_dir..." | lolcat
        sleep 2
        mkdir -p "$dotfiles_dir"
        echo "$dotfiles_dir created!" | lolcat
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
            echo "Removed $path" | lolcat
        else
            echo "Path $path does not exist" | lolcat
        fi
    done

}

copy_files() {
    cp -r "$HOME/Downloads/hyprarch2/.config/"* "$HOME/.config/"
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
    ln -s ~/dotfiles/swaylock/ ~/.config
    ln -s ~/dotfiles/vim/ ~/.config/
    ln -s ~/dotfiles/wal ~/.config/
    ln -s ~/dotfiles/waybar/ ~/.config/
    ln -s ~/dotfiles/wlogout/ ~/.config/
    ln -s ~/dotfiles/fastfetch/ ~/.config/

sudo chown -R "$USER": "$HOME/.config/"*

}

install_packages
dotfiles_dir
setup_config
copy_files
create_symlinks
