#!/usr/bin/env bash

# // ==== monitor-toggle.sh ====

# Script to toggle laptop monitor on and off
# Monitor(s) are defined in .config/hypr/conf/environment.lua

CURRENT_STATUS=$(hyprctl monitors -j | jq -r ".[] | select(.name==\"$PRIMARY_MONITOR\") | .dpmsStatus")

func_main() {
	if [ "$CURRENT_STATUS" = "true" ]; then
		hyprctl dispatch 'hl.dsp.dpms({ action = "disable", output = "'"$PRIMARY_MONITOR"'" })'
		notify-send --urgency=normal ":: DPMS turned OFF for $PRIMARY_MONITOR"
	else
		hyprctl dispatch 'hl.dsp.dpms({ action = "enable", output = "'"$PRIMARY_MONITOR"'" })'
		notify-send --urgency=normal ":: DPMS turned ON for $PRIMARY_MONITOR"
	fi
}

if [[ -z "$CURRENT_STATUS" ]]; then
	notify-send --urgency=critical ":: Monitor not found..." "Please define your monitors in ~/.config/hypr/conf/environment.lua"
	exit 1
else
	func_main
fi
