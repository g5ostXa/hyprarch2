#!/usr/bin/env bash

# --------------------------------------------------------
# waybar.sh
# --------------------------------------------------------

# Define service
SERVICE="waybar"

# Launch waybar if not already running
waybar_check() {
	sleep 5
	if ! pgrep -x "$SERVICE" >/dev/null; then
		uwsm app -- waybar -c "$HOME"/dotfiles/waybar/themes/waybar-bottom/config -s "$HOME"/dotfiles/waybar/themes/waybar-bottom/main/style.css &
	fi
}

waybar_check
