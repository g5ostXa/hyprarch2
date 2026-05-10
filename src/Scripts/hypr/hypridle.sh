#!/usr/bin/env bash

# // ======= hypridle.sh =======

SERVICE="hypridle"

func_depends() {
	local -a packages=(
		"uwsm"
		"notify-send"
	)
	for depends in "${packages[@]}"; do
		if ! command -v "$depends" >/dev/null 2>&1; then
			exit 1
		fi
	done
}
func_depends

if pgrep -x "$SERVICE" >/dev/null; then
	pkill -x "$SERVICE"
	notify-send --urgency=normal ":: $SERVICE DEACTIVATED"
else
	uwsm app -- "$SERVICE" &
	notify-send --urgency=normal ":: $SERVICE ACTIVATED"
fi
