#!/bin/bash

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Define variables
CLEANUP_SCRIPT="$HOME/src/Scripts/cleanup.sh"
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
SYSCTL_README="/etc/sysctl.d/README.md"
AUR_HELPER_NAME="paru-bin"

# Script banner
echo -e "${CYAN}==============================${RC}"
echo -e "${CYAN}---> RUNNING HYPRCLEAN.SH <---${RC}"
echo -e "${CYAN}==============================${RC}"
sleep 3

echo -e "${CYAN}Starting cleanup process...${RC}"
sleep 1

# Remove aur helper git directory
cd "$HOME" && rm -rf "$AUR_HELPER_NAME"

if [ $? -eq 0 ]; then
	echo -e "${GREEN}Removing $AUR_HELPER_NAME...${RC}"
	sleep 1
else
	echo -e "${RED}Failed to remove $AUR_HELPER_NAME...${RC}"
fi

# Remove hyprarch2 git directory
if [ -d "$HYPRARCH2_DIR" ]; then
	echo -e "${YELLOW}Removing $HYPRARCH2_DIR...${RC}"
	rm -rf "$HYPRARCH2_DIR"
else
	echo -e "${RED}$HYPRARCH2_DIR does not exist, skipping...${RC}"
fi

# Remove README from target directory
if [ -e "$SYSCTL_README" ]; then
	echo -e "${YELLOW}Removing $SYSCTL_README...${RC}"
	sudo rm -rf "$SYSCTL_README"
else
	echo -e "${RED}$SYSCTL_README does not exist, skipping...${RC}"
fi

# Run cleanup.sh
if [ -f "$CLEANUP_SCRIPT" ]; then
	echo -e "${YELLOW}Executing cleanup script...${RC}"
	source "$CLEANUP_SCRIPT"
else
	echo -e "${RED}Cleanup script $CLEANUP_SCRIPT not found, skipping...${RC}"
fi

# Empty the trash
echo -e "${YELLOW}Emptying the trash...${RC}"
if command -v trash-empty &>/dev/null; then
	trash-empty
else
	echo -e "${RED}trash-empty command not found, skipping...${RC}"
fi

echo -e "${GREEN}Cleanup process completed successfully !${RC}"
