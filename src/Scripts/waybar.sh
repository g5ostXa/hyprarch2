#!/usr/bin/env bash

# // ======= launch.sh =======

# Quit all running waybar instances

WAYBAR_CONFIG="$HOME/.config/waybar/config.jsonc"

if pgrep -x waybar >/dev/null 2>&1; then
	killall waybar
	sleep 0.2
fi

if [ -f "$WAYBAR_CONFIG" ]; then
	uwsm app -- waybar -c "$WAYBAR_CONFIG" &
	sleep 0.25
else
	notify-send --urgency=critical "Waybar config file not found..." "Failed to launch waybar!"
fi
