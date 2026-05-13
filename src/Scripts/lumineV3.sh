#!/usr/bin/env bash

CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

SERVICE="brightnessctl"
programName="lumineV3.sh"

func_banner() {
	clear && echo ""

	echo -e "$CYAN"
	cat <<"EOF"
   __           _         _   ______
  / /_ ____ _  (_)__  ___| | / /_  /
 / / // /  ' \/ / _ \/ -_) |/ //_ <
/_/\_,_/_/_/_/_/_//_/\__/|___/____/
EOF
	echo -e "${RC}" && echo ""
}

func_main() {
	if command -v "gum" >/dev/null 2>&1; then
		echo -e "${CYAN}:: Select the brightness level for your laptop screen:${RC}"
		echo ""

		BRIGHTNESS_LEVEL=$(gum choose "5%" "20%" "35%" "50%" "65%" "80%" "100%" "CANCEL")
		DEVICE_NAME=$(brightnessctl --list | grep -oP "Device '\K[^']+" | head -n 1)

		if [[ -n "$BRIGHTNESS_LEVEL" ]]; then
			if [[ ! "$BRIGHTNESS_LEVEL" == "CANCEL" ]]; then
				"$SERVICE" set "$BRIGHTNESS_LEVEL" "$DEVICE_NAME"
				sleep 0.2
				exit 0
			else
				if [[ -n "$HYPRLAND_INSTANCE_SIGNATURE" ]]; then
					if command -v "notify-send" >/dev/null 2>&1; then
						notify-send --urgency=normal ":: Canceled: $programName"
						exit
					else
						exit
					fi
				else
					echo -e "${YELLOW}:: Aborted by the user... ${RC}"
					exit
				fi
			fi
		else
			if command -v "notify-send" >/dev/null 2>&1; then
				notify-send --urgency=critical ":: Variable not found: BRIGHTNESS_LEVEL"
				exit 1
			else
				echo -e "${RED}:: Variable not found: BRIGHTNESS_LEVEL${RC}"
				exit 1
			fi
		fi
	else
		if command -v "notify-send" >/dev/null 2>&1; then
			notify-send --urgency=critical ":: Missing dependency: gum"
			exit 1
		else
			echo -e "${RED}:: Missing dependency: gum${RC}"
			exit 1
		fi
	fi
}

func_service() {
	func_banner

	if ! command -v "$SERVICE" >/dev/null 2>&1; then
		if [[ -n "$HYPRLAND_INSTANCE_SIGNATURE" ]]; then
			if command -v "notify-send" >/dev/null 2>&1; then
				notify-send --urgency=critical ":: Missing dependency: $SERVICE"
				exit 1
			else
				exit 1
			fi
		else
			echo -e "${RED}:: Missing dependency: $SERVICE${RC}"
			exit 1
		fi
	else
		func_main
	fi
}
func_service
