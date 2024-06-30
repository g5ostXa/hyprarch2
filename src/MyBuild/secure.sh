#!/bin/bash

sysctl_dir="/etc/sysctl.d/"
sysctl_source_dir="$HOME/Downloads/hyprarch2/sysctl"

ufw_config() {
    echo "Updating system and installing UFW..."
    sudo pacman -Syu && sudo pacman -S --noconfirm ufw
    # sudo ufw default deny incoming
    # sudo ufw default allow outgoing
    # sudo systemctl enable --now ufw.service

    echo "NOTE:"
    echo "A reboot may be required for the firewall to be enabled and active!" | lolcat
    echo "The installation will continue in 5 seconds..." | lolcat
    sleep 6
}

# Function to apply sysctl hardening (kernel and networking)
sysctl_hardening() {
    echo "Checking if $sysctl_dir exists..." | lolcat

    if [ -d "$sysctl_dir" ]; then
        echo "$sysctl_dir exists, proceeding with sysctl hardening..." | lolcat
    else
        echo "$sysctl_dir does not exist, creating directory..." | lolcat
        sudo mkdir -p "$sysctl_dir"
        echo "$sysctl_dir created!" | lolcat
    fi

    sleep 2

    if [ -d "$sysctl_source_dir" ]; then
        echo "Copying sysctl configurations from $sysctl_source_dir to $sysctl_dir..." | lolcat
        sudo cp -r "$sysctl_source_dir"/* "$sysctl_dir"
        sudo chown -R root:root "$sysctl_dir"/*
        sudo sysctl --system
        echo "Sysctl hardening applied successfully!" | lolcat
    else
        echo "Source directory $sysctl_source_dir does not exist. Aborting sysctl hardening." | lolcat
        
    fi
}

ufw_config
sysctl_hardening

