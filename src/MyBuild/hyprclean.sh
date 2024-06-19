#!/bin/bash

cleanup_script="$HOME/dotfiles/scripts/cleanup.sh"

# Clean up after install
clean_up() {
    
    cd "$HOME"
    rm -rf "$HOME"/Downloads/hyprarch2/;
    sudo bash "$cleanup_script"
    trash-empty;

}

# Call functions
clean_up
