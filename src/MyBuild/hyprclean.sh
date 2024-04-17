#!/bin/bash

clean_up() {
    
    cd "$HOME"; cd;
    rm -rf "$HOME"/Downloads/hyprarch2/;
    rm -rf "$HOME"/.icons/README.md;
    sudo rm -rf "$sysctl_dir"/README.md;
    sudo bash "$cleanup_script"
    trash-empty;

}

# Call functions
clean_up
