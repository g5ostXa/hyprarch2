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

# Reload waybar
sleep 0.25
if ! pgrep -x "$MY_BAR" >/dev/null 2>&1; then
	"$LAUNCH_BAR"
else
	killall "$MY_BAR" && "$LAUNCH_BAR"
fi
