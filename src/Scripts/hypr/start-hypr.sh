#!/usr/bin/env bash

# // ======= start-hypr.sh =======

# Set exit on error
set -euo pipefail

# Check if feglet is installed and print banner
is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		clear
		echo "--------------------------------"
		echo "start-hypr.sh"
		echo "--------------------------------"
	else
		clear
		figlet -f smslant "start-hypr"
		echo ""
	fi

}

# Check if gum is installed / exit if false
is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo "Gum is missing, use pacman -S gum to install the package..."
		exit 1
	fi

}

#Check if uwsm is installed
is_installed_uwsm() {
	if ! command -v uwsm >/dev/null 2>&1; then
		echo "uwsm is missing, use pacman -S uwsm to install the package..."
		exit 1
	fi

}

# Script entry
is_installed_figlet && is_installed_gum && is_installed_uwsm

# Gum animation
gum spin --spinner points --title "Launching hyprland..." -- sleep 3

# Set defaults and lunch hyprland
uwsm select && uwsm start hyprland
