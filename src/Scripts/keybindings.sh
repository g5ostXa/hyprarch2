#!/bin/bash
#  _              _     _           _ _
# | | _____ _   _| |__ (_)_ __   __| (_)_ __   __ _ ___
# | |/ / _ \ | | | '_ \| | '_ \ / _` | | '_ \ / _` / __|
# |   <  __/ |_| | |_) | | | | | (_| | | | | | (_| \__ \
# |_|\_\___|\__, |_.__/|_|_| |_|\__,_|_|_| |_|\__, |___/
#           |___/                             |___/


binds_conf="~/dotfiles/hypr/conf/keybindings.conf"

# -----------------------------------------------------
# Parse keybindings
# -----------------------------------------------------
keybinds=$(grep -oP '(?<=bind = ).*' $binds_conf)
keybinds=$(echo "$keybinds" | sed 's/$mainMod/SUPER/g' | sed 's/,\([^,]*\)$/ = \1/' | sed 's/, exec//g' | sed 's/^,//g')

# -----------------------------------------------------
# Show keybindings in rofi
# -----------------------------------------------------
rofi -dmenu -replace -p "Keybinds" -config ~/dotfiles/rofi/config-compact.rasi <<<"$keybinds"
