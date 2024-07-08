#!/bin/bash

#!/bin/bash

GREEN='\033[0;32m'
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
while true; do
    read -p "DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn): " yn
    case $yn in
        [Yy]* )
            echo ":: Installation started."
            echo
        break;;
        [Nn]* )
            echo ":: Installation canceled."
            exit;
        break;;
        * ) echo ":: Please answer yes or no.";;
    esac
done

set -e

main_vars="$HOME/Downloads/hyprarch2/src/variables.sh"

# Source all installation scripts // The order matters!
source_main_scripts() {

source "$main_vars"
source "$setup_script"
source "$secure_script"
source "$hyprclean"
source ~/.bashrc
source "$gtk_settings"
    
}

end_of_install_greeting() {

echo "The installation is officially completed!" | lolcat
echo "You may now reboot in your new hyprarch2 system..." | lolcat
echo "Welcome to hyprarch2!" | figlet -c | lolcat

}

source_main_scripts
end_of_install_greeting
