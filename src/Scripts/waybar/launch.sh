#!/usr/bin/env bash

# // ======= launch.sh =======

# Quit all running waybar instances
killall waybar
sleep 0.2

uwsm app -- waybar -c ~/.config/waybar/config.jsonc &
