#!/bin/bash

# ----------
# mirrors.sh
# ---------------
# By g5ostXa (2024)
# ---------------------------
# Requires: reflector gum figlet
# ----------------------------------------------------

# Define variables
MIRRORLIST="/etc/pacman.d/mirrorlist"
MIRRORLIST_BAK="/etc/pacman.d/mirrorlist.bak"
REFLECTOR_CMD="sudo reflector --country Canada --protocol https --latest 20 --age 6 --sort rate --save $MIRRORLIST"
SERVICE="openvpn"
VPN_NAME="protonvpn"
VPN_CONNECT="sudo protonvpn connect -f"
VPN_DISCONNECT="sudo protonvpn disconnect"
SYNC_DATABASE="sudo pacman -Syu"

create_mirrorlist() {
	set -e
	if pgrep -x "$SERVICE" >/dev/null; then
		gum spin --spinner points --title "Disconnecting VPN" -- $VPN_DISCONNECT
	fi

	gum spin --spinner globe --title "Fetching the latest mirrors..." -- $REFLECTOR_CMD
	gum spin --spinner points --title "Synchronizing package database..." -- $SYNC_DATABASE

	if ! pgrep -x "$SERVICE" >/dev/null; then
		if command -v "$VPN_NAME" >/dev/null 2>&1; then
			gum spin --spinner points --title "Reconnecting VPN..." -- $VPN_CONNECT
			echo "The mirrors are now up to date!"
		else
			echo "The mirrors are now up to date!"
		fi
	fi

}

is_installed_figlet() {
	clear
	if command -v figlet >/dev/null 2>&1; then
		figlet "Mirrorlist"
	else
		echo "--------------------------"
		echo "Mirrors.sh"
		echo "--------------------------"
	fi

}

refresh_backup() {
	clear
	is_installed_figlet
	sudo -v
	if gum confirm "Remove existing backup and create a fresh one?"; then
		sudo rm -rf "$MIRRORLIST_BAK"
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo "Refreshed $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	else
		echo "Unchanged: $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	fi

}

create_backup() {
	clear
	is_installed_figlet
	sudo -v
	if gum confirm "Do you want to create a backup of your current mirrorlist?"; then
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo "Saved $MIRRORLIST as $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	else
		echo "No backup created..."
		sleep 2
		create_mirrorlist
	fi

}

if [ -f "$MIRRORLIST_BAK" ]; then
	refresh_backup
else
	create_backup
fi
