#!/bin/bash

SERVICE="waybar"

waybar_check () {
if ! pgrep -x "$SERVICE" >/dev/null; then
	waybar -c /home/g5ostX2/dotfiles/waybar/themes/ml4w-bottom/config -s /home/g5ostX2/dotfiles/waybar/themes/ml4w-bottom/light/style.css &
fi

}

waybar_check
