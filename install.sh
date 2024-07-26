#!/bin/bash

GREEN='\033[0;32m'
CYAN='\033[0;36m'
RC='\033[0m'

version_name="$HOME/Downloads/hyprarch2/.version/latest"

echo -e "${GREEN}"
cat <<"EOF"
 ___           _        _ _
|_ _|_ __  ___| |_ __ _| | | ___ _ __
 | || '_ \/ __| __/ _` | | |/ _ \ '__|
 | || | | \__ \ || (_| | | |  __/ |
|___|_| |_|___/\__\__,_|_|_|\___|_|

EOF
echo "Welcome to hyprarch2"
cat "$version_name"
echo -e "${RC}"

if [ -n "$SSH_CONNECTION" ]; then
  while true; do
    read -r -p "DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn):" yn
    case $yn in
      [Yy]* )
        echo ":: Starting Installation..."
        break;;
      [Nn]* )
        echo ":: Installation canceled..."
        exit;
        break;;
      * )
        echo ":: Please answer yes or no.";;
    esac
  done
else
  if gum confirm "DO YOU WANT TO START THE INSTALLATION NOW?"; then
    echo ":: Starting Installation..."
  elif [ $? -eq 130 ]; then
    echo ":: Installation canceled..."
    exit 130
  else
    echo ":: Installation canceled..."
    exit;
  fi
fi

sleep 2
set -e

source "$HOME/Downloads/hyprarch2/src/setup.sh"
source "$HOME/src/secure.sh"
source "$HOME/src/hyprclean.sh"
source "$HOME/.bashrc"
source "$HOME/dotfiles/hypr/scripts/gtk.sh"

echo -e "${GREEN}The installation is officially completed!${RC}"
echo -e "${GREEN}You may now reboot in your new hyprarch2 system...${RC}"
echo -e "${CYAN}"
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
echo -e "${RC}"
