#!/bin/bash

# Define waybar module color based on the number of updates
threshold_green=0
threshold_yellow=25
threshold_red=100

# Define which AUR helper is installed
define_helper() {
	if command -v paru >/dev/null; then
		AUR_HELPER="paru"
	else
		if command -v yay >/dev/null; then
			AUR_HELPER="yay"
		else
			if command -v notify-send >/dev/null; then
				notify-send --urgency=critical "Neither paru or yay is installed..."
			else
				echo "Neither paru or yay is installed..."
				exit 1
			fi
		fi
	fi

}

# Get total number of updates
get_number() {
	if ! updates_arch=$(checkupdates 2>/dev/null | wc -l); then
		updates_arch=0
	fi

	if ! updates_aur=$("$AUR_HELPER" -Qua 2>/dev/null | wc -l); then
		updates_aur=0
	fi

	updates=$(("$updates_arch" + "$updates_aur")) && css_class="green"

}

define_helper && get_number

# Print json format for waybar module
if [ "$updates" -gt $threshold_yellow ]; then
	css_class="yellow"
fi

if [ "$updates" -gt $threshold_red ]; then
	css_class="red"
fi

if [ "$updates" -gt $threshold_green ]; then
	printf '{"text": "%s", "alt": "%s", "tooltip": "%s Updates", "class": "%s"}' "$updates" "$updates" "$updates" "$css_class"
else
	printf '{"text": "0", "alt": "0", "tooltip": "0 Updates", "class": "green"}'
fi
