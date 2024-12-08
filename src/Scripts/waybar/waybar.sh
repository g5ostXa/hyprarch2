#!/bin/bash

# --------------------------------------------------------
# waybar.sh
# --------------------------------------------------------

# Define service
SERVICE="waybar"

# Launch waybar with bottom/light theme if not already running
waybar_check() {
	sleep 5
	if ! pgrep -x "$SERVICE" >/dev/null; then
		uwsm app -- waybar -c "$HOME"/dotfiles/waybar/themes/h2bar-bottom/config -s "$HOME"/dotfiles/waybar/themes/h2bar-bottom/light/style.css &
	fi

}

waybar_check
