#!/usr/bin/env bash

# ---------------------------------
# install.sh
# ---------------------------------

# Color Variables
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

# hyprarch2 source directory
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

set -e

# Ensure hyprarch2 directory exists
if [ ! -d "$HYPRARCH2_DIR" ]; then
	echo -e "${RED};; $HYPRARCH2_DIR does not exist, exiting...${RC}"
	exit 1
fi

# Copy all hyprarch2 files to home directory
cp -r "$HYPRARCH2_DIR"/* "$HOME/"

# Copy issue file to /etc
sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"
sudo chown root:root /etc/issue

# Check .bashrc exists
if [ ! -f "$HOME/.bashrc" ]; then
	echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
	cp "$HYPRARCH2_DIR/.bashrc" "$HOME/"
fi

# Check .version/ exists
if [ ! -d "$HOME/.version/" ]; then
	cp -r "$HYPRARCH2_DIR/.version/" "$HOME/"
fi

# Check .github/ exists
if [ ! -d "$HOME/.github/" ]; then
	cp -r "$HYPRARCH2_DIR/.github/" "$HOME/"
fi

# Check .gitignore exists
if [ ! -f "$HOME/.gitignore" ]; then
	cp "$HYPRARCH2_DIR/.gitignore" "$HOME/"
fi

sleep 2

cd "$HOME/Downloads" && git clone --depth=1 git@github.com:g5ostXa/h2install.git
cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer && ./h2installer
