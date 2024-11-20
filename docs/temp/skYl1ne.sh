#!/bin/bash

# -----------------------
# skYl1ne.sh
# -----------------------

check_cloned_repo() {
	if [ ! -d "$HOME/Downloads/$OPTION" ]; then
		echo ";; Failed to Download $OPTION"
	else
		echo ";; $OPTION successfully Downloaded!"
	fi

}

is_installed_figlet() {
	clear
	if command -v figlet >/dev/null 2>&1; then
		figlet -f smslant "skYl1ne.sh"
		echo ""
	else
		echo "--------------------------"
		echo "skYl1ne.sh"
		echo "--------------------------"
		echo ""
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo ";; gum needs to be installed to run this script..."
		echo ";; Type 'sudo pacman -S gum' to install, then run this script again."
		exit 1
	fi

}

choose_option() {
	set -e
	cd ~/Downloads || exit
	is_installed_figlet
	is_installed_gum
	echo ";; Select one of your personal projects to download:"
	echo ""

	OPTION=$(gum choose "hyprarch2" "b4shL4nd" "sysctl" "wallpaper" "CANCEL")
	if [[ -n "$OPTION" ]]; then
		if [[ ! "$OPTION" == "CANCEL" ]]; then
			gum spin --spinner points --title "Installing $OPTION..." -- sleep 3
			git clone --depth 1 git@github.com:g5ostXa/"$OPTION".git
			cd || exit
			check_cloned_repo
		else
			echo ";; Operation canceled..."
			cd || exit
			exit 0
		fi
	else
		echo ";; Variable not set: $OPTION"
		cd || exit
		exit 1
	fi

}

choose_option
