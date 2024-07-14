#!/bin/bash

GREEN='\033[0;32m'
CYAN='\033[0;36m'
RC='\033[0m'

echo -e "${GREEN}"
cat <<"EOF"
 ___           _        _ _
|_ _|_ __  ___| |_ __ _| | | ___ _ __
 | || '_ \/ __| __/ _` | | |/ _ \ '__|
 | || | | \__ \ || (_| | | |  __/ |
|___|_| |_|___/\__\__,_|_|_|\___|_|

EOF
echo "Welcome to hyprarch2"
echo
echo -e "${RC}"
echo

if gum confirm "DO YOU WANT TO START THE INSTALLATION NOW?" ;then
    echo
    echo ":: Sarting Installation..."
    echo
elif [ $? -eq 130 ]; then
    echo ":: Installation canceled"
    exit 130
else
    echo
    echo ":: Installation canceled"
    exit;
fi

sleep 2
set -e

setup_script="$HOME/Downloads/hyprarch2/src/setup.sh"
gtk_settings="$HOME/dotfiles/hypr/scripts/gtk.sh"
hyprclean="$HOME/src/hyprclean.sh"
secure_script="$HOME/src/secure.sh"

# Source all installation scripts // The order matters!
source "$setup_script"
source "$secure_script"
source "$hyprclean"
source ~/.bashrc
source "$gtk_settings"

echo -e "${GREEN}The installation is officially completed!${RC}"
echo -e "${GREEN}You may now reboot in your new hyprarch2 system...${RC}"
echo -e ${CYAN}
cat <<"EOF"

__        __   _                            _
\ \      / /__| | ___ ___  _ __ ___   ___  | |_ ___
 \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \ | __/ _ \
  \ V  V /  __/ | (_| (_) | | | | | |  __/ | || (_) |
   \_/\_/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/

 _                                    _     ____  _
| |__  _   _ _ __  _ __ __ _ _ __ ___| |__ |___ \| |
| '_ \| | | | '_ \| '__/ _` | '__/ __| '_ \  __) | |
| | | | |_| | |_) | | | (_| | | | (__| | | |/ __/|_|
|_| |_|\__, | .__/|_|  \__,_|_|  \___|_| |_|_____(_)
       |___/|_|

EOF
echo -e ${RC}
