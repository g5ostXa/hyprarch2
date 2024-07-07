#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

sysctl_dir="/etc/sysctl.d/"
sysctl_source_dir="$HOME/Downloads/hyprarch2/sysctl"

ufw_config() {
    echo -e "${CYAN}Updating system and installing UFW...${RC}"
    sudo pacman -Syu && sudo pacman -S --noconfirm ufw
    # sudo ufw default deny incoming
    # sudo ufw default allow outgoing
    # sudo systemctl enable --now ufw.service

    echo -e "${CYAN}NOTE:${RC}"
    echo -e "${YELLOW}A reboot may be required for the firewall to be enabled and active!${RC}"
    echo -e "${YELLOW}The installation will continue in 5 seconds...${RC}"
    sleep 6
}

# Function to apply sysctl hardening (kernel and networking)
sysctl_hardening() {
    echo -e "${YELLOW}Checking if $sysctl_dir exists...${RC}"

    if [ -d "$sysctl_dir" ]; then
        echo -e "${GREEN}$sysctl_dir exists, proceeding with sysctl hardening...${RC}"
    else
        echo -e "${YELLOW}$sysctl_dir does not exist, creating directory...${RC}"
        sudo mkdir -p "$sysctl_dir"
        echo -e "${GREEN}$sysctl_dir created!${RC}"
    fi

    sleep 2

    if [ -d "$sysctl_source_dir" ]; then
        echo -e "${YELLOW}Copying sysctl configurations from $sysctl_source_dir to $sysctl_dir...${RC}"
        sudo cp -r "$sysctl_source_dir"/* "$sysctl_dir"
        sudo chown -R root:root "$sysctl_dir"/*
        sudo sysctl --system
        echo -e "${GREEN}Sysctl hardening applied successfully!${RC}"
    else
        echo -e "${RED}Source directory $sysctl_source_dir does not exist. Aborting sysctl hardening.${RC}"
    fi
}

ufw_config
sysctl_hardening

