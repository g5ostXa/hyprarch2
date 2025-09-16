#!/bin/bash

#-----------------------------------------------------
# wallpaper.sh
# ----------------------------------------------------

# Get selected wallpaper
wallpaper="$1"
used_wallpaper="$wallpaper"

main_function() {

	# Copy selected wallpaper to ~/.cache/
	cp "$wallpaper" "$HOME/.cache/current_wallpaper.jpg"

	# Get new wallpaper's name
	newwall=$(echo "$wallpaper" | sed "s|$HOME/wallpaper/||g")
	
	# Load theme configuration
	SETTINGS_FILE="$HOME"/.config/gtk-3.0/settings.ini
	THEME_PREF=$(grep -E '^gtk-application-prefer-dark-theme=' "$SETTINGS_FILE" | awk -F'=' '{print $2}')
	
	# Set theme using matugen based on $used_wallpaper colors
	if [ "$THEME_PREF" -eq 1 ]; then
		"$HOME"/.local/bin/matugen image "$used_wallpaper" -m "dark"
	else
		"$HOME"/.local/bin/matugen image "$used_wallpaper" -m "light"
	fi
	
	# Set wallpaper
	swww img "$used_wallpaper" --transition-type center
	
	# Send notification only if waybar is running to prevent a wallpaper update notification every time hyprland is launched
	if pgrep -x waybar >/dev/null; then
		notify-send --icon=/usr/share/icons/Dracula/16/folder-pictures.svg "Wallpaper and colors updated!" "with image $newwall"
	fi
	
	# Reload waybar
	source "$HOME"/src/Scripts/waybar/launch.sh

}

main_function
