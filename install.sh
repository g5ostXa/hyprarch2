#!/bin/bash

# Set variables
main_vars="$HOME/Downloads/hyprarch2/src/MyBuild/variables.sh"

# Source all installation scripts // The order matters!
exec_scripts() {

    source "$main_vars"
    source "$install_packages"
    source "$setup_script"
    source "$symlinks_script"
    source "$secure_script"
    source "$hyprclean"
    source ~/.bashrc
    source "$gtk_settings"

}

# hyprarch2 end of install greeting
wlcm() {

    echo "The installation is officially completed!" | lolcat;
    echo "You may now reboot in your new hyprarch2 system..." | lolcat;
    echo "Welcome to hyprarch2!" | figlet -c | lolcat;

}

# Call functions
exec_scripts
wlcm
