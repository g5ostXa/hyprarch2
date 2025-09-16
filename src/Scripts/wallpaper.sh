#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

# Get selected wallpaper
wallpaper="$1"
used_wallpaper="$wallpaper"

# Copy selected wallpaper to ~/.cache/
cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

# Get new wallpaper's name
newwall=$(echo "$wallpaper" | sed "s|$HOME/wallpaper/||g")

load_config() {
	# Load theme ane color variants
	SETTINGS_FILE="$HOME"/.config/gtk-3.0/settings.ini
	THEME_PREF=$(grep -E '^gtk-application-prefer-dark-theme=' "$SETTINGS_FILE" | awk -F'=' '{print $2}')
	
	if [ "$THEME_PREF" -eq 1 ]; then
		"$HOME"/.local/bin/matugen image "$used_wallpaper" -m "dark"
	else
		"$HOME"/.local/bin/matugen image "$used_wallpaper" -m "light"
	fi

}

main_function() {
	# Set wallpaper
	swww img "$used_wallpaper" --transition-type center

	# Reload waybar
	source "$HOME"/src/Scripts/waybar/launch.sh

}

main_function
