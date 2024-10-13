#!/bin/bash
#  ___           _        _ _   _   _           _       _
# |_ _|_ __  ___| |_ __ _| | | | | | |_ __   __| | __ _| |_ ___  ___
#  | || '_ \/ __| __/ _` | | | | | | | '_ \ / _` |/ _` | __/ _ \/ __|
#  | || | | \__ \ || (_| | | | | |_| | |_) | (_| | (_| | ||  __/\__ \
# |___|_| |_|___/\__\__,_|_|_|  \___/| .__/ \__,_|\__,_|\__\___||___/
#                                    |_|
# -----------------------------------------------------
# Required: paru trizen gum
# -----------------------------------------------------

sleep 1
clear
figlet "System update"
echo
_isInstalledParu() {
	package="$1"
	check="$(paru -Qs --color always "${package}" | grep "local" | grep "${package} ")"
	if [ -n "${check}" ]; then
		echo 0 #'0' means 'true' in Bash
		return #true
	fi
	echo 1 #'1' means 'false' in Bash
	return #false
}

# ------------------------------------------------------
# Confirm Start
# ------------------------------------------------------

if gum confirm "DO YOU WANT TO START THE UPDATE NOW?"; then
	echo
	echo ":: Update started."
elif [ $? -eq 130 ]; then
	exit 130
else
	echo
	echo ":: Update canceled."
	exit
fi

trizen -Syu --noconfirm --noedit --noinfo

notify-send "Update complete"
echo
echo ":: Update complete"
echo
echo

echo "Press [ENTER] to close."
read
