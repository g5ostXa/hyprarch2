#!/bin/bash

# ----------------------------------
# st4rtX.sh
# ----------------------------------

DNS_RESTART="sudo systemctl restart dnsmasq.service"

is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		echo "--------------------------------"
		echo "st4rtX.sh"
		echo "--------------------------------"
	else
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

clear
is_installed_figlet
is_installed_gum
sudo -v
set -e
gum spin --spinner points --title "Restarting DNSmask service..." -- sleep 3 && $DNS_RESTART
Hyprland
