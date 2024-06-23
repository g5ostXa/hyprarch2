#!/bin/bash

cleanup_script="$HOME/dotfiles/scripts/cleanup.sh"
hyprarch2_dir="$HOME/Downloads/hyprarch2"
sysctl_readme="/etc/sysctl.d/README"

clean_up() {
    echo "Starting cleanup process..." | lolcat
    sleep 1
    cd "$HOME"

    if [ -d "$hyprarch2_dir" ]; then
        echo "Removing $hyprarch2_dir..." | lolcat
        rm -rf "$hyprarch2_dir"
    else
        echo "$hyprarch2_dir does not exist, skipping..." | lolcat
    fi

    if [ -e "$sysctl_readme" ]; then
        echo "Removing $sysctl_readme..." | lolcat
        sudo rm -rf "$sysctl_readme"
    else
        echo "$sysctl_readme does not exist, skipping..." | lolcat
    fi

    if [ -f "$cleanup_script" ]; then
        echo "Executing cleanup script..." | lolcat
        bash "$cleanup_script"
    else
        echo "Cleanup script $cleanup_script not found, skipping..." | lolcat
    fi

    echo "Emptying the trash..." | lolcat
    if command -v trash-empty &> /dev/null; then
        trash-empty
    else
        echo "trash-empty command not found, skipping..." | lolcat
    fi

    echo "Cleanup process completed successfully!" | lolcat
}

clean_up
