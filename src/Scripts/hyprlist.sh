#!/bin/bash

# ---------------------------------------------------------
# hyprlist.sh
# ---------------------------------------------------------

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RC='\033[0m'

# Define package directory path
PKG_LIST_DIR="$HOME/src/packages"

prep_function() {
	if [ -d "$PKG_LIST_DIR" ]; then
		rm -rf "$PKG_LIST_DIR"/*
		gum spin --spinner meter --title "Updating package lists..." -- sleep 3
	else
		mkdir -p "$PKG_LIST_DIR"
		gum spin --spinner meter --title "Updating package lists..." -- sleep 3
	fi

}

main_function() {
	pacman -Qqn >"$PKG_LIST_DIR"/pacman_packages.txt
	pacman -Qm | awk '{print $1}' >"$PKG_LIST_DIR"/aur_packages.txt

	echo -e "${GREEN}Total number of pacman packages...${RC}"
	wc -l "$PKG_LIST_DIR"/pacman_packages.txt
	echo ""

	echo -e "${GREEN}Total number of AUR packages...${RC}"
	wc -l "$PKG_LIST_DIR"/aur_packages.txt

	if [ $? -eq 0 ]; then
		echo ""
		echo -e "${YELLOW}Package lists are now up to date!${RC}"
		echo -e "${YELLOW}---------------------------------${RC}"
		notify-send --icon=/usr/share/icons/Dracula/16/folder-text.svg "Package lists are now up to date!"
	else
		echo ""
		echo -e "${RED}Failed to update package lists...${RC}"
		echo -e "${YELLOW}------------------------------${RC}"
		notify-send --urgency=critical "Failed to update package lists..."

	fi

}

prep_function
main_function
