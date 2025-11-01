#!/usr/bin/env bash

# ========= wallpaper.sh ==========

# Get used wallpaper
wallpaper="$1"

# Define waybar launcher
WAYBAR_LAUNCHER="$HOME/src/Scripts/waybar/launch.sh"

# Set wallpaper and load colors
wal -q -i "$wallpaper"
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get wallpaper name and send notification
newwall=$(basename "$wallpaper")
notify-send --urgency=normal "Wallpaper and colors updated!" "with image $newwall" --icon=folder-pictures

# Reload waybar because it won't load when executed from autostart.conf
if command -v "waybar" >/dev/null 2>&1; then
	if ! pgrep -x "waybar" >/dev/null 2>&1; then
		sleep 2
		bash -e "$WAYBAR_LAUNCHER"
	else
		killall waybar
		sleep 0.75
		bash -e "$WAYBAR_LAUNCHER"
	fi
else
	notify-send --urgency=critical "Waybar not found, aborting..."
	exit 1
fi
