#!/bin/bash

# -----------------------------------------------------
# installupdates.sh
# -----------------------------------------------------

# Requires: gum | trizen | libnotify
# -----------------------------------------------------

sleep 1
clear
figlet -f smslant "System update"
echo ""

# Confirm start
if gum confirm "DO YOU WANT TO START THE UPDATE NOW?"; then
	echo ""
	echo ":: Update started."
elif [ $? -eq 130 ]; then
	exit 130
else
	echo ""
	echo ":: Update canceled."
	exit
fi

trizen -Syu --noconfirm --noedit --noinfo

notify-send "Update complete"
echo ""
echo ":: Update complete"
echo ""
echo ""

echo "Press [ENTER] to close."
read -r
