#!/usr/bin/env bash

#-----------------------------------------------------
# wallpaper.sh
#-----------------------------------------------------

wallpaper="$1"
[ -z "$wallpaper" ] && {
	notify-send --urgency=critical "No wallpaper found" --icon=dialog-error
	exit 1
}

func_main() {
	# Set wallpaper and colors
	wal -q -i "$wallpaper"
	cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

	# Get wallpaper name and send notification
	newwall=$(basename "$wallpaper")
	notify-send --urgency=normal "Wallpaper and colors updated!" "with image $newwall" --icon=folder-pictures
}

func_main
