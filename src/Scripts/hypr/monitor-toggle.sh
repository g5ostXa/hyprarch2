#!/usr/bin/env bash

# // ==== monitor_toggle.sh ====

# Script to toggle laptop monitor on and off
# Edit .bashrc and replace the value of <MONITOR_NAME> to match the name of your monitor
# Or, set the variable above the <CURRENT_STATUS> variable down below.

# LAPTOP_MONITOR_NAME=""
CURRENT_STATUS=$(hyprctl monitors -j | jq -r ".[] | select(.name==\"$LAPTOP_MONITOR_NAME\") | .dpmsStatus")

func_main() {
	if [ "$CURRENT_STATUS" = "true" ]; then
		hyprctl dispatch dpms off "$LAPTOP_MONITOR_NAME"
		notify-send --urgency=normal "DPMS turned OFF for $LAPTOP_MONITOR_NAME"
	else
		hyprctl dispatch dpms on "$LAPTOP_MONITOR_NAME"
		notify-send --urgency=normal "DPMS turned ON for $LAPTOP_MONITOR_NAME"
	fi
}

if [[ -z "$CURRENT_STATUS" ]]; then
	notify-send --urgency=critical "Monitor not found..." "Please set the environment variable LAPTOP_MONITOR_NAME in your .bashrc"
	exit 1
else
	func_main
fi
