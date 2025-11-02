#!/usr/bin/env bash

# ========= wallpaper.sh ==========

# Get used wallpaper
wallpaper="$1"

# Set wallpaper and load colors
wal -q -i "$wallpaper"
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get wallpaper name and send notification
newwall=$(basename "$wallpaper")
notify-send --urgency=normal "Wallpaper and colors updated!" "with image $newwall" --icon=folder-pictures
