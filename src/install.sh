#!/usr/bin/env bash

# ------------------------------------------------
# install.sh
# ------------------------------------------------

# Color Variables
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

# hyprarch2 source directory
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

# Check if hyprarch2 directory exists
src_check() {
	if [ ! -d "$HYPRARCH2_DIR" ]; then
		echo -e "${RED};; $HYPRARCH2_DIR does not exist, exiting...${RC}"
		exit 1
	fi

}

# Copy all hyprarch2 files to home directory
src_copy() {
	cp -r "$HYPRARCH2_DIR"/* "$HOME/"
	sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"

}

# Make sure all files were copied
target_check() {
	if [ ! -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
		cp "$HYPRARCH2_DIR/.bashrc" "$HOME"
	fi

	# Check .version/ exists
	if [ ! -d "$HOME/.version/" ]; then
		cp -r "$HYPRARCH2_DIR/.version/" "$HOME"
	fi

	# Check .github/ exists
	if [ ! -d "$HOME/.github/" ]; then
		cp -r "$HYPRARCH2_DIR/.github/" "$HOME"
	fi

	# Check .gitignore exists
	if [ ! -f "$HOME/.gitignore" ]; then
		cp "$HYPRARCH2_DIR/.gitignore" "$HOME"
	fi

}

func_main() {
	src_check && src_copy && target_check

	if [ -f "/etc/issue" ]; then
		sudo chown root:root /etc/issue
	else
		echo -e "${YELLOW}Failed to copy issue to /etc...${RC}"
		sleep 1
	fi

	cd "$HOME/Downloads" && git clone --depth=1 https://github.com/g5ostXa/h2install.git
	cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer && ./h2installer

}

# Script entry
read -rp ";; Are you sure you want to start the installation now? [y/N]" ans
[[ "$ans" =~ ^[Yy]$ ]] && func_main
