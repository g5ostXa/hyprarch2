#!/bin/bash

# ----------------------------------------
# r3boot.sh
# ----------------------------------------

CYAN='\033[0;36m'
RC='\033[0m'

gum_prompt() {
	if gum confirm "Are you sure you want to reboot now ?"; then
		clear
		gum spin --spinner dot --title ":: Running r3boot.sh ..." -- sleep 2
		main_function
	elif [ $? -eq 130 ]; then
		exit 130
	else
		echo ":: Aborted..."
	fi

}

main_function() {
	clear
	echo -e "${CYAN}"
	echo "Reboot in..."
	echo "5..."
	sleep 1
	echo "4..."
	sleep 1
	echo "3..."
	sleep 1
	echo "2..."
	sleep 1
	echo "1..."
	sleep 1
	echo "See You Soon!"
	sleep 1
	echo -e "${RC}"
	systemctl reboot

}

gum_prompt
