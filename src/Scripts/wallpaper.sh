#!/usr/bin/env bash

# ========= wallpaper.sh ==========

# Get wallpaper
wallpaper="$1"

# Define bar and path for it's launcher
MY_BAR="waybar"
LAUNCH_BAR="$HOME/src/Scripts/waybar.sh"

# Set wallpaper and colors
wal -q -i "$wallpaper"
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get wallpaper name and send notification
newwall=$(basename "$wallpaper")
notify-send --urgency=normal "Wallpaper and colors updated!" "with image $newwall" --icon=folder-pictures
