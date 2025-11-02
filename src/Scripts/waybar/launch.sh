#!/usr/bin/env bash

# // ======= launch.sh =======

if command -v waybar >/dev/null 2>&1; then
	if ! pgrep -x waybar >/dev/null 2>&1; then
		sleep 0.25
		uwsm app -- waybar -c ~/.config/waybar/config.jsonc &
	else
		killall waybar
		sleep 0.25
		uwsm app -- waybar -c ~/.config/waybar/config.jsonc &
	fi
else
	notify-send --urgency=critical "Waybar launcher not found, aborting..."
	exit 1
fi
