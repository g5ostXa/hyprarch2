#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

# Define selected wallpaper
wallpaper="$1"
used_wallpaper="$wallpaper"

# Define service
SRVC="waybar"

# Apply pywal colors
wal -q -i "$used_wallpaper"
source "$HOME/.cache/wal/colors.sh"

# Copy selected wallpaper to ~/.cache/
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get new wallpaper's name
newwall=$(echo $wallpaper | sed "s|$HOME/wallpaper/||g")

# Send notification
if pgrep -x "$SRVC" >/dev/null; then
notify-send --icon=/usr/share/icons/Dracula/16/folder-pictures.svg "Wallpaper and colors updated!" "with image $newwall"; fi

# Reload waybar
source "$HOME/dotfiles/waybar/launch.sh"

