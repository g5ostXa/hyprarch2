#!/bin/bash

# Clean up after install
clean_up() {
    
    cd "$HOME"; cd;
    rm -rf "$HOME"/Downloads/hyprarch2/;
    sudo bash "$cleanup_script"
    trash-empty;

}

# Call functions
clean_up
