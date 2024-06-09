#!/bin/bash

# Set main variables
main_vars() {

packages="$HOME/Downloads/hyprarch2/packages/pacman_packages.txt"
install_packages="$HOME/Downloads/hyprarch2/src/MyBuild/install-packages.sh"
cleanup_script="$HOME/dotfiles/scripts/cleanup.sh"
dotfiles_dir="$HOME/dotfiles/"
setup_script="$HOME/Downloads/hyprarch2/src/MyBuild/setup.sh"
symlinks_script="$HOME/src/MyBuild/symlinks.sh"
gtk_settings="$HOME/dotfiles/gtk/gtk.sh"
hyprclean="$HOME/src/MyBuild/hyprclean.sh"
sysctl_dir="/etc/sysctl.d/"
secure_script="$HOME/Downloads/hyprarch2/src/MyBuild/secure.sh"
firejail_script="$HOME/src/MyBuild/firejail.sh"

}

# Call funtions
main_vars
