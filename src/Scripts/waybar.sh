#!/bin/bash

SERVICE="waybar"

waybar_check () {
if ! pgrep -x "$SERVICE" >/dev/null; then
	waybar -c /$HOME/dotfiles/waybar/themes/ml4w-bottom/config -s /$HOME/dotfiles/waybar/themes/ml4w-bottom/light/style.css &
fi

}

waybar_check
