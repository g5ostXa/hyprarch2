#!/bin/bash

# -----------------------------------------------------
# launch.sh
# -----------------------------------------------------

# Quit all running waybar instances
killall waybar
sleep 0.2

# Default theme: /THEMEFOLDER;/VARIATION
themestyle="/ml4w;/ml4w/light"

# Get current theme information from .cache/.themestyle.sh
if [ -f ~/.cache/.themestyle.sh ]; then
	themestyle=$(cat ~/.cache/.themestyle.sh)
else
	touch ~/.cache/.themestyle.sh
	echo "$themestyle" >~/.cache/.themestyle.sh
fi

IFS=';' read -ra arrThemes <<<"$themestyle"
echo ${arrThemes[0]}

if [ ! -f ~/dotfiles/waybar/themes${arrThemes[1]}/style.css ]; then
	themestyle="/ml4w;/ml4w/light"
fi

# Loading the configuration
waybar -c ~/dotfiles/waybar/themes${arrThemes[0]}/config -s ~/dotfiles/waybar/themes${arrThemes[1]}/style.css &
