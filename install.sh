#!/bin/bash

set -e

main_vars="$HOME/Downloads/hyprarch2/src/MyBuild/variables.sh"

# Source all installation scripts // The order matters!
function_1() {

    source "$main_vars"
    source "$install_packages"
    source "$setup_script"
    source "$symlinks_script"
    source "$secure_script"
    source "$hyprclean"
    source ~/.bashrc
    source "$gtk_settings"
    
}

function_2() {

    echo "The installation is officially completed!" | lolcat;
    echo "You may now reboot in your new hyprarch2 system..." | lolcat;
    echo "Welcome to hyprarch2!" | figlet -c | lolcat;

}

# Call functions
function_1
function_2
