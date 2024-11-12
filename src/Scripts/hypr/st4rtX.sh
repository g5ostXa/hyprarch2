#!/bin/bash

# ----------------------------------
# st4rtX.sh
# ----------------------------------

DNS_RESTART="sudo systemctl restart dnsmasq.service"

is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		clear
		echo "--------------------------------"
		echo "st4rtX.sh"
		echo "--------------------------------"
	else
		clear
		figlet -f smslant "st4rtX"
		echo ""
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo "Missing package 'gum'..."
		echo "Type 'sudo pacman -Syu gum' to install"
		exit 1
	fi

}

is_installed_figlet
is_installed_gum
if gum confirm "Do you want to restart dnsmasq.service before launching hyprland?"; then
	sudo -v && set -e
	gum spin --spinner points --title "Restarting dnsmasq.service..." -- sleep 3 && $DNS_RESTART
	Hyprland
else
	gum spin --spinner points --title "Launching hyprland..." -- sleep 3 && Hyprland
fi
