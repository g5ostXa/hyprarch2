#!/bin/bash

# ----------------------------------------------------
# hypridle.sh
# ----------------------------------------------------
SERVICE="hypridle"

idle_toggle() {
	if pgrep -x "$SERVICE" >/dev/null; then
		killall "$SERVICE"
		notify-send --urgency=normal ":: $SERVICE DEACTIVATED"
	else
		"$SERVICE" &
		notify-send --urgency=normal ":: $SERVICE ACTIVATED"
	fi

}

idle_toggle
