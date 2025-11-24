#!/usr/bin/env bash

# // ===== lumineV2.sh =====
#
# // By g5ostXa / 2025
#
# // Requires:
# gum figlet brightnessctl libnotify
#
# // Description:
# Control your laptop screen brightness from your terminal

# Ansi Colors
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

programName="lumineV2"
SERVICE="brightnessctl"

check_depends() {
	local -a packages=(
		"figlet"
		"gum"
		"notify-send"
		"$SERVICE"
	)
	for depend in "${packages[@]}"; do
		if ! command -v "$depend" >/dev/null 2>&1; then
			echo -e "${RED};; Missing dependency: $depend${RC}"
			notify-send --urgency=critical ":: $programName: Exited due to missing dependency: $depend"
			exit 1
		fi
	done
}

greet_ascii() {
	clear && check_depends
	echo -e "${CYAN}" && figlet "$programName"
	echo -e "${RC}" && main
}

main() {
	echo -e "${YELLOW};; Select the brightness level for your laptop screen:${RC}"
	echo ""

	BRIGHTNESSCTL_LEVEL=$(gum choose "CANCEL" "5%" "20%" "35%" "50%" "65%" "80%")
	if [ -n "$BRIGHTNESSCTL_LEVEL" ]; then
		if [[ ! "$BRIGHTNESSCTL_LEVEL" == "CANCEL" ]]; then
			"$SERVICE" set "$BRIGHTNESSCTL_LEVEL" intel_backlight
			sleep 0.2 && exit 0
		else
			echo -e "${YELLOW};; Aborted by the user...${RC}"
			exit 0
		fi
	else
		echo -e "${RED}Failed to define BRIGHTNESSCTL_LEVEL, aboting...${RC}"
		exit 1
	fi
}

# Entry point
greet_ascii
