#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

# Get selected wallpaper
wallpaper="$1"
used_wallpaper="$wallpaper"

if ! wallust run "$used_wallpaper"; then
    exit 1
fi

# Copy selected wallpaper to ~/.cache/
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get new wallpaper's name
newwall=$(echo "$wallpaper" | sed "s|$HOME/wallpaper/||g")

# Send notification only if waybar is running to prevent a wallpaper update notification every time hyprland is launched
if pgrep -x waybar >/dev/null; then
	notify-send --icon=/usr/share/icons/Dracula/16/folder-pictures.svg "Wallpaper and colors updated!" "with image $newwall"
fi

# Reload waybar
source "$HOME/src/Scripts/waybar/launch.sh"
