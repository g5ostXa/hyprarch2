#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m' 

echo -e "${CYAN}---> RUNNING HYPRCLEAN.SH <---${RC}"
sleep 3

cleanup_script="$HOME/dotfiles/scripts/cleanup.sh"
hyprarch2_dir="$HOME/Downloads/hyprarch2"
sysctl_readme="/etc/sysctl.d/README.md"

clean_up() {
    echo -e "${CYAN}Starting cleanup process...${RC}"
    sleep 1
    cd "$HOME" && rm -rf paru-bin

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}paru-bin removed !${RC}"
        sleep 1
    else
        echo -e "${RED}Failed to remove paru-bin...${RC}"
    fi
    
    if [ -d "$hyprarch2_dir" ]; then
        echo -e "${YELLOW}Removing $hyprarch2_dir...${RC}"
        rm -rf "$hyprarch2_dir"
    else
        echo -e "${RED}$hyprarch2_dir does not exist, skipping...${RC}"
    fi

    if [ -e "$sysctl_readme" ]; then
        echo -e "${YELLOW}Removing $sysctl_readme...${RC}"
        sudo rm -rf "$sysctl_readme"
    else
        echo -e "${RED}$sysctl_readme does not exist, skipping...${RC}"
    fi

    if [ -f "$cleanup_script" ]; then
        echo -e "${YELLOW}Executing cleanup script...${RC}"
        source "$cleanup_script"
    else
        echo -e "${RED}Cleanup script $cleanup_script not found, skipping...${RC}"
    fi

    echo -e "${YELLOW}Emptying the trash...${RC}"
    if command -v trash-empty &> /dev/null; then
        trash-empty
    else
        echo -e "${RED}trash-empty command not found, skipping...${RC}"
    fi

    echo -e "${GREEN}Cleanup process completed successfully !${RC}"

}

clean_up
