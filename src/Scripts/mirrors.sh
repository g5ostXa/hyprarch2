#!/bin/bash

# ----------
# mirrors.sh
# ---------------
# By g5ostXa 2024
# ---------------------------
# Requires: reflector and gum
# ----------------------------------------------------

# Define variables
MIRRORLIST="/etc/pacman.d/mirrorlist"
MIRRORLIST_BAK="/etc/pacman.d/mirrorlist.bak"
REFLECTOR_CMD="sudo reflector --country Canada --protocol https --latest 20 --age 6 --sort rate --save $MIRRORLIST"
SERVICE="openvpn"

create_mirrorlist() {
	set -e
	if pgrep -x "$SERVICE" >/dev/null; then
		gum spin --spinner points --title "Disconnecting VPN" -- sudo protonvpn disconnect
	fi

	gum spin --spinner globe --title "Creating new mirrorlist..." -- $REFLECTOR_CMD
	gum spin --spinner points --title "Synchronizing repositories..." -- sudo pacman -Syu
	gum spin --spinner points --title "Reconnecting VPN..." -- sudo protonvpn connect -f
	echo "The mirrors are now up to date!"

}

check_backup() {
	if [ -f "$MIRRORLIST_BAK" ]; then
		clear && echo "" | sudo tee -a >/dev/null
		if gum confirm "Remove existing backup and create a fresh one?"; then
			sudo rm -rf "$MIRRORLIST_BAK"
			sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
			echo "Refreshed $MIRRORLIST_BAK"
			sleep 2
			create_mirrorlist
		else
			echo "Unchanged: $MIRRORLIST_BAK"
			sleep 2
			create_mirrorlist
		fi
	else
		clear && echo "" | sudo tee -a >/dev/null
		if gum confirm "Do you want to create a backup of your current mirrorlist?"; then
			sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
			echo "Saved $MIRRORLIST as $MIRRORLIST_BAK"
			sleep 2
			create_mirrorlist
		else
			echo "No backup created..."
			sleep 2
			create_mirrorlist
		fi
	fi

}

check_backup
