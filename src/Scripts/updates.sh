#!/bin/bash

# ----------------------------------------------------
# updates.sh
# ----------------------------------------------------
threshold_green=0
threshold_yellow=25
threshold_red=100

if ! updates_arch=$(checkupdates 2>/dev/null | wc -l); then
	updates_arch=0
fi

if ! updates_aur=$(paru -Qua --quiet | wc -l); then
	updates_aur=0
fi

updates=$(("$updates_arch" + "$updates_aur"))

css_class="green"

if [ "$updates" -gt $threshold_yellow ]; then
	css_class="yellow"
fi

if [ "$updates" -gt $threshold_red ]; then
	css_class="red"
fi

if [ "$updates" -gt $threshold_green ]; then
	printf '{"text": "%s", "alt": "%s", "tooltip": "%s Updates", "class": "%s"}' "$updates" "$updates" "$updates" "$css_class"
else
	printf '{"text": "0", "alt": "0", "tooltip": "0 Updates", "class": "green"}'
fi
