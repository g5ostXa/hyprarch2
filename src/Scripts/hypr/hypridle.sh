#!/usr/bin/env bash

# // ======= hypridle.sh =======

SERVICE="hypridle"

if pgrep -x "$SERVICE" >/dev/null; then
	killall "$SERVICE"
	notify-send --urgency=normal ":: $SERVICE DEACTIVATED" --icon=dialog-information
else
	uwsm app -- "$SERVICE" &
	notify-send --urgency=normal ":: $SERVICE ACTIVATED"
fi
