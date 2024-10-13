#!/bin/bash

SERVICE="waybar"

# Launch waybar with bottom/light theme if not already running
waybar_check () {
if ! pgrep -x "$SERVICE" >/dev/null; then
	waybar -c /$HOME/dotfiles/waybar/themes/ml4w-bottom/config -s /$HOME/dotfiles/waybar/themes/ml4w-bottom/light/style.css &
fi

}

waybar_check
