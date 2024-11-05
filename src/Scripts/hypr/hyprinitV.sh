#!/bin/bash

# ----------------------------------
# hyprinitV.sh | By g5ostXa | 2024
# ----------------------------------

VPN="protonvpn"
SERVICE="openvpn"
VPN_CONNECT="sudo protonvpn connect -f"
DNS_RESTART="sudo systemctl restart dnsmasq.service"

main_function() {
	if ! pgrep -x "$SERVICE" >/dev/null; then
		if command -v "$VPN" >/dev/null 2>&1; then
			clear
			is_installed_figlet
			is_installed_gum
			sudo -v
			set -e
			gum spin --spinner points --title "Setting up VPN and DNS..." -- $VPN_CONNECT
			gum spin --spinner points --title "Refreshinng dnsmasq..." -- $DNS_RESTART
			Hyprland
		else
			Hyprland
		fi
	else
		Hyprland
	fi

}

is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		echo "---------------------------------"
		echo "hyprinitV | By g5ostXa | 2024"
		echo "---------------------------------"
	else
		figlet "hyprinitV"
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo "Missing package 'gum'..."
		echo "Type 'sudo pacman -Syu gum' to install"
		exit 1
	fi
}

main_function
