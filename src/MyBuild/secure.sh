#!/bin/bash

sysctl_dir="/etc/sysctl.d/"

# UFW installation and configuration
ufw_config() {

    sudo pacman -Syu && sudo pacman -S ufw;
#    sudo ufw default deny incoming;
#    sudo ufw default allow outgoing;
#    sudo systemctl enable --now ufw.service;
    echo "NOTE:";
    echo "A Reboot may be required for the firewall to be enabled and active!" | lolcat;
    echo "The installation will continue in 5 seconds..." | lolcat; sleep 6;

}

# sysctl hardening (kernel and networking)
sysctl_hardening() {

if [ -d "$sysctl_dir" ]; then
    echo "$sysctl_dir exists so we are good to go!"
    sleep 2 
else
    echo "creating sysctl.d in /etc...";
    sleep 2;
    sudo mkdir -p "$sysctl_dir";
    echo "$sysctl_dir Created!" | lolcat;
    sleep 2;
fi

    sudo cp -r "$HOME"/Downloads/hyprarch2/sysctl/* "$sysctl_dir"
    sudo chown -R root:root "$sysctl_dir"/*
    sudo sysctl --system

}

ufw_config
sysctl_hardening
