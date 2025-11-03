#!/usr/bin/env bash

# // ==== monitor_toggle.sh ====

# Script to toggle laptop monitor on and off
# Monitor(s) are define in .config/hypr/conf/environment.conf

CURRENT_STATUS=$(hyprctl monitors -j | jq -r ".[] | select(.name==\"$PRIMARY_MONITOR\") | .dpmsStatus")

func_main() {
	if [ "$CURRENT_STATUS" = "true" ]; then
		hyprctl dispatch dpms off "$PRIMARY_MONITOR"
		notify-send --urgency=normal "DPMS turned OFF for $PRIMARY_MONITOR"
	else
		hyprctl dispatch dpms on "$PRIMARY_MONITOR"
		notify-send --urgency=normal "DPMS turned ON for $PRIMARY_MONITOR"
	fi
}

if [[ -z "$CURRENT_STATUS" ]]; then
	notify-send --urgency=critical "Monitor not found..." "Please set the environment variable LAPTOP_MONITOR_NAME in your .bashrc"
	exit 1
else
	func_main
fi
