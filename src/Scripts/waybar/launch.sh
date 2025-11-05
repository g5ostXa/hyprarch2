#!/usr/bin/env bash

# // ======= launch.sh =======

if command -v waybar >/dev/null 2>&1; then
	if ! pgrep -x waybar >/dev/null 2>&1; then
		uwsm app -- waybar -c ~/.config/waybar/config.jsonc &
		sleep 0.5
	else
		killall waybar
		uwsm app -- waybar -c ~/.config/waybar/config.jsonc &
		sleep 0.5
	fi
else
	notify-send --urgency=critical "Waybar launcher not found, aborting..."
	exit 1
fi
