#!/bin/bash

cleanup_script="$HOME/dotfiles/scripts/cleanup.sh"

# Clean up after install
clean_up() {
    
cd "$HOME";
rm -rf "$HOME"/Downloads/hyprarch2/;
rm -rf /etc/sysctl.d/README;
sudo bash "$cleanup_script";
trash-empty;

}

clean_up
