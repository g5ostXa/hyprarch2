#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

wall_select_and_colors() {
	# Define selected wallpaper
	wallpaper="$1"
	used_wallpaper="$wallpaper"

	# Apply pywal colors
	wal -q -i "$used_wallpaper"
	source "$HOME/.cache/wal/colors.sh"

}

cache_and_waybar() {
	# Copy selected wallpaper to ~/.cache/
	cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

	# Get new wallpaper's name
	newwall=$(echo $wallpaper | sed "s|$HOME/wallpaper/||g")

 	# Send notification
  	SERVICE="waybar"
        if pgrep -x "$SERVICE" >/dev/nul; then notify-send --icon=/usr/share/icons/Dracula/16/folder-pictures.svg "Wallpaper and colors updated!" "with image $newwall"; fi;

	# Reload waybar
	source "$HOME/dotfiles/waybar/launch.sh"

}

wall_select_and_colors
cache_and_waybar
