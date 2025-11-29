#!/usr/bin/env bash

# // ======= mirrors.sh =======

# // By g5ostXa / 2024
# // Requires: gum reflector

# Define mirrorlist target location
MIRRORLIST="/etc/pacman.d/mirrorlist"
MIRRORLIST_BAK="/etc/pacman.d/mirrorlist.bak"

# Define your country for faster mirrors
COUNTRY="Canada"

# Define reflector cmd with your desired options
GET_MIRRORS="sudo reflector --country $COUNTRY --protocol https --latest 20 --age 6 --sort rate --save $MIRRORLIST"

# Sync package database
SYNC_DATABASE="sudo pacman -Sy"

func_main() {
	# shellcheck disable=SC2086
	gum spin --spinner globe --title "Fetching the latest mirrors..." -- $GET_MIRRORS
	# shellcheck disable=SC2086
	gum spin --spinner points --title "Synchronizing package database..." -- $SYNC_DATABASE
	echo ";; The mirrors are now up to date!"
}

is_installed_figlet() {
	clear
	if command -v figlet >/dev/null 2>&1; then
		figlet -f smslant "Mirrorlist"
		echo ""
	else
		echo ""
		echo "// ======= mirrors.sh ======="
		echo ""
	fi
}

check_depends() {
	local -a packages=(
		"gum"
		"reflector"
	)
	for depends in "${packages[@]}"; do
		if ! command -v "$depends" >/dev/null 2>&1; then
			echo ";; Some dependencies are not installed, aborting..."
			exit 1
		fi
	done
}

refresh_backup() {
	is_installed_figlet
	sudo -v
	check_depends
	if gum confirm "Remove existing backup and create a fresh one?"; then
		sudo rm -rf "$MIRRORLIST_BAK"
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo ";; Refreshed $MIRRORLIST_BAK"
		sleep 2
		func_main
		sudo chmod 644 "$MIRRORLIST"
	else
		echo ";; Unchanged: $MIRRORLIST_BAK"
		sleep 2
		func_main
		sudo chmod 644 "$MIRRORLIST"
	fi
}

create_backup() {
	is_installed_figlet
	sudo -v
	check_depends
	if gum confirm "Do you want to create a backup of your current mirrorlist?"; then
		sudo cp -r "$MIRRORLIST" "$MIRRORLIST_BAK"
		sudo chmod 644 "$MIRRORLIST_BAK"
		echo ";; Saved $MIRRORLIST as $MIRRORLIST_BAK"
		sleep 2
		func_main
		sudo chmod 644 "$MIRRORLIST"
	else
		echo ";; No backup created..."
		sleep 2
		func_main
		sudo chmod 644 "$MIRRORLIST"
	fi
}

if [ -f "$MIRRORLIST_BAK" ]; then
	refresh_backup
else
	create_backup
fi
