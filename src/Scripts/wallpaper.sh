#!/usr/bin/env bash

# ========= wallpaper.sh ==========

wallpaper="$1"

BAR="waybar"
LAUNCH_BAR="$HOME/src/Scripts/waybar/launch.sh"

[ -z "$wallpaper" ] && {
	notify-send --urgency=critical "No wallpaper found..." --icon=dialog-error
	exit 1
}

# Set wallpaper and colors
wal -q -i "$wallpaper"
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get wallpaper name and send notification
newwall=$(basename "$wallpaper")
notify-send --urgency=normal "Wallpaper and colors updated!" "with image $newwall" --icon=folder-pictures

# Reload waybar if needed
sleep 0.25
if ! pgrep -x "$BAR" >/dev/null 2>&1; then
	source "$LAUNCH_BAR"
else
	killall "$BAR" && source "$LAUNCH_BAR"
fi
