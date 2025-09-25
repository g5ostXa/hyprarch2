#!/usr/bin/env bash

# ----------
# mirrors.sh
# ---------------
# By g5ostXa (2024)
# ---------------------------
# Requires: reflector | gum | figlet
# ----------------------------------------------------

# Define variables
MIRRORLIST="/etc/pacman.d/mirrorlist"
MIRRORLIST_BAK="/etc/pacman.d/mirrorlist.bak"
REFLECTOR_CMD="sudo reflector --country Canada --protocol https --latest 20 --age 6 --sort rate --save $MIRRORLIST"
SYNC_DATABASE="sudo pacman -Sy"

create_mirrorlist() {
	gum spin --spinner globe --title "Fetching the latest mirrors..." -- $REFLECTOR_CMD
	gum spin --spinner points --title "Synchronizing package database..." -- $SYNC_DATABASE
	echo ";; The mirrors are now up to date!"

}

is_installed_figlet() {
	clear
	if command -v figlet >/dev/null 2>&1; then
		figlet -f smslant "Mirrorlist"
		echo ""
	else
		echo "--------------------------"
		echo "Mirrors.sh"
		echo "--------------------------"
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo ";; gum needs to be installed to run this script..."
		echo ";; Type 'sudo pacman -S gum' to install, then run this script again."
		exit 1
	fi

}

is_installed_reflector() {
	if ! command -v reflector >/dev/null 2>&1; then
		if gum confirm "Do you want to install reflector now?"; then
			sudo pacman -Syu --noconfirm reflector
		else
			echo ";; Aborting script..."
			exit 1
		fi
	fi

}

refresh_backup() {
	is_installed_figlet
	sudo -v
	is_installed_gum
	is_installed_reflector
	if gum confirm "Remove existing backup and create a fresh one?"; then
		sudo rm -rf "$MIRRORLIST_BAK"
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo ";; Refreshed $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	else
		echo ";; Unchanged: $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	fi

}

create_backup() {
	is_installed_figlet
	sudo -v
	is_installed_gum
	is_installed_reflector
	if gum confirm "Do you want to create a backup of your current mirrorlist?"; then
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo ";; Saved $MIRRORLIST as $MIRRORLIST_BAK"
		sleep 2
		create_mirrorlist
	else
		echo ";; No backup created..."
		sleep 2
		create_mirrorlist
	fi

}

if [ -f "$MIRRORLIST_BAK" ]; then
	refresh_backup
else
	create_backup
fi
