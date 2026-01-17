#!/usr/bin/env bash

# // ======= updates.sh =======

# Define waybar module color based on the number of updates
threshold_ok=0
threshold_warning=24
threshold_critical=99

# Define which AUR helper is installed
define_helper() {
	if command -v paru >/dev/null 2>&1; then
		AUR_HELPER="paru"
	elif command -v yay >/dev/null 2>&1; then
		AUR_HELPER="yay"
	elif command -v notify-send >/dev/null 2>&1; then
		notify-send --urgency=critical "Neither paru or yay is installed..."
	else
		echo "Neither paru or yay is installed..."
		exit 1
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

	updates=$(("$updates_arch" + "$updates_aur"))
}

define_helper && get_number

# Define waybar module class based on the number of updates
css_class="ok"

if [ "$updates" -gt $threshold_warning ]; then
	css_class="warning"
fi

if [ "$updates" -gt $threshold_critical ]; then
	css_class="critical"
fi

# Print json format for waybar module
if [ "$updates" -gt $threshold_ok ]; then
	printf '{"text": "%s", "alt": "%s", "tooltip": "%s Updates", "class": "%s"}' "$updates" "$updates" "$updates" "$css_class"
else
	printf '{"text": "0", "alt": "0", "tooltip": "0 Updates", "class": "ok"}'
fi
