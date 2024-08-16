#!/bin/bash
#                _ _
# __      ____ _| | |_ __   __ _ _ __   ___ _ __
# \ \ /\ / / _` | | | '_ \ / _` | '_ \ / _ \ '__|
#  \ V  V / (_| | | | |_) | (_| | |_) |  __/ |
#   \_/\_/ \__,_|_|_| .__/ \__,_| .__/ \___|_|
#                   |_|         |_|
#
# -----------------------------------------------------
# Get selected wallpaper
# -----------------------------------------------------
wallpaper="$1"
used_wallpaper="$wallpaper"

# -----------------------------------------------------
# Execute pywal
# -----------------------------------------------------
wal -q -i "$used_wallpaper"
source "$HOME/.cache/wal/colors.sh"

# -----------------------------------------------------
# Copy selected wallpaper into .cache folder
# -----------------------------------------------------
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# -----------------------------------------------------
# Get wallpaper image name
# -----------------------------------------------------
newwall=$(echo $wallpaper | sed "s|$HOME/wallpaper/||g")

# -----------------------------------------------------
# Reload Waybar
# -----------------------------------------------------
source "$HOME/dotfiles/waybar/launch.sh"

# -----------------------------------------------------
# Send notification
# -----------------------------------------------------
sleep 1
notify-send "Wallpaper and colors updated!" "with image $newwall"
