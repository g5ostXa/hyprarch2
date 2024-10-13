#!/bin/bash

# Script to automate package lists generation for hyprarch2
# The lists are located in ~/packages/

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RC='\033[0m'

package_lists_dir="$HOME/packages"

check_dir() {
	if [ -d "$package_lists_dir" ]; then
		rm -rf "$package_lists_dir"/*
		echo ""
		echo -e "${YELLOW}--------------------------------${RC}"
		echo -e "${YELLOW}---> Updating package lists <---${RC}"
		echo -e "${YELLOW}--------------------------------${RC}"
		echo ""
		sleep 1
	else
		mkdir -p "$package_lists_dir"
		echo ""
		echo -e "${YELLOW}--------------------------------${RC}"
		echo -e "${YELLOW}---> Updating package lists <---${RC}"
		echo -e "${YELLOW}--------------------------------${RC}"
		echo ""
		sleep 1
	fi

}

update_lists() {
	pacman -Qqn >"$package_lists_dir"/pacman_packages.txt
	pacman -Qm | awk '{print $1}' >"$package_lists_dir"/aur_packages.txt

	echo -e "${GREEN}Calculating number of pacman packages...${RC}"
	wc -l "$package_lists_dir"/pacman_packages.txt
	echo ""

	echo -e "${GREEN}Calculating number of AUR packages...${RC}"
	wc -l "$package_lists_dir"/aur_packages.txt

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

check_dir
update_lists
