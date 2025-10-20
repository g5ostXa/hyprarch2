#!/usr/bin/env bash

# // ======= poweroff.sh ========

# Define colors
CYAN='\033[0;36m'
RC='\033[0m'

gum_prompt() {
	if gum confirm "Are you sure you want to power off the system ?"; then
		clear
		gum spin --spinner points --title "Running poweroff.sh ..." -- sleep 3
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
	echo "Poweroff in..."
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
	echo "Good bye!"
	sleep 1
	echo -e "${RC}"
	systemctl poweroff
}
gum_prompt
