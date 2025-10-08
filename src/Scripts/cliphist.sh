#!/usr/bin/env bash

# // ======= cliphist.sh =======

case $1 in
d)
	cliphist list | rofi -dmenu -replace -config ~/.config/rofi/config-cliphist.rasi | cliphist delete
	;;

w)
	if [ $(echo -e "Clear\nCancel" | rofi -dmenu -config ~/.config/rofi/config-short.rasi) == "Clear" ]; then
		cliphist wipe
	fi
	;;

*)
	cliphist list | rofi -dmenu -replace -config ~/.config/rofi/config-cliphist.rasi | cliphist decode | wl-copy
	;;
esac
