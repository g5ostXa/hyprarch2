#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

# Get selected wall
wallpaper="$1"
used_wallpaper="$wallpaper"

# Set colors / Set wall
if command -v wallust >/dev/null 2>&1; then
	wallust run "$used_wallpaper"
fi

# Copy to cache / Set new wall value
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"
newwall=$(echo "$wallpaper" | sed "s|$HOME/wallpaper/||g")

# Send notification only if waybar is running to prevent a wallpaper update notification every time hyprland is launched
# This might get removed later...
if pgrep -x waybar >/dev/null; then
	notify-send --icon=/usr/share/icons/Dracula/16/folder-pictures.svg "Wallpaper and colors updated!" "with image $newwall"
fi

# Reload waybar
# This might get removed later...
source "$HOME/src/Scripts/waybar/launch.sh"
