#!/usr/bin/env bash

# // ======= killhypr.sh =======

notify-send --urgency=normal "Terminating hyprland session in 5 seconds..."
sleep 5 && uwsm stop
