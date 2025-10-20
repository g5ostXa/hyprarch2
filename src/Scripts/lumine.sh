#!/usr/bin/env bash

# // ======= lumine.sh =======

is_installed_brightnessctl() {
	if ! command -v brightnessctl >/dev/null 2>&1; then
		echo ";; brightnessctl is not installed..."
		exit 1
	fi
}

is_installed_figlet() {
	if command -v figlet >/dev/null 2>&1; then
		clear && figlet -f smslant "lumine"
		echo ""
	else
		clear
		echo ""
		echo "// ===== lumine.sh ====="
		echo ""
	fi
}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo ";; gum is not installed..."
		exit 1
	fi
}

main_operation() {
	is_installed_figlet
	is_installed_brightnessctl
	echo ";; Select the brightness level for your laptop screen:"
	echo ""

	is_installed_gum
	BRIGHTNESS_LEVEL=$(gum choose "0%" "5%" "15%" "35%" "50%" "65%" "80%" "CANCEL")
	if [ -n "$BRIGHTNESS_LEVEL" ]; then
		if [[ ! "$BRIGHTNESS_LEVEL" == "CANCEL" ]]; then
			brightnessctl set "$BRIGHTNESS_LEVEL" intel_backlight
		else
			echo ";; Operation canceled..."
			exit 0
		fi
	else
		echo ";; Variable not set: $BRIGHTNESS_LEVEL"
		exit 1
	fi
}

# Script start
main_operation
