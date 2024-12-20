#!/bin/bash

# -------------------------------------------------------------------------------------
# keybindings.sh
# -------------------------------------------------------------------------------------

# Parse and load keybinds
config_file=~/dotfiles/hypr/conf/keybindings.conf
keybinds=$(grep -oP '(?<=bind = ).*' $config_file)
keybinds=$(echo "$keybinds" | sed 's/$mainMod/SUPER/g' | sed 's/,\([^,]*\)$/ = \1/' | sed 's/, exec//g' | sed 's/^,//g')

# List all available keybinds in rofi
rofi -dmenu -replace -p "Keybinds" -config ~/dotfiles/rofi/config-compact.rasi <<<"$keybinds"
