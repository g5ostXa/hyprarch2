#!/bin/bash

# ----------------------------------------------------------------
# hyprclean.sh
# ----------------------------------------------------------------

# Define colors
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Define variables
CLEANUP_SCRIPT="$HOME/src/Scripts/cleanup.sh"
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
SYSCTL_README="/etc/sysctl.d/README.md"
SYSCTL_LICENSE="/etc/sysctl.d/LICENSE"
SYSCTL_GIT_FOLDER="/etc/sysctl.d/.git"

# Script banner
echo -e "${CYAN}"
figlet -f smslant "hyprclean.sh"
echo ""
echo "Starting cleanup process..."
echo -e "${RC}" && echo ""
sleep 1

# Remove hyprarch2 git directory
if [ -d "$HYPRARCH2_DIR" ]; then
	echo -e "${YELLOW};; Removing $HYPRARCH2_DIR...${RC}"
	rm -rf "$HYPRARCH2_DIR"
else
	echo -e "${RED};; $HYPRARCH2_DIR does not exist, skipping...${RC}"
fi

# Remove README from target directory
if [ -e "$SYSCTL_README" ]; then
	echo -e "${YELLOW};; Removing $SYSCTL_README...${RC}"
	sudo rm -rf "$SYSCTL_README"
else
	echo -e "${RED};; $SYSCTL_README does not exist, skipping...${RC}"
fi

# Remove LICENSE from target directory
if [ -e "$SYSCTL_LICENSE" ]; then
	echo -e "${YELLOW};; Removing $SYSCTL_LICENSE...${RC}"
	sudo rm -rf "$SYSCTL_LICENSE"
else
	echo -e "${RED};; $SYSCTL_LICENSE does not exist, skipping...${RC}"
fi

# Remove .git folder from target directory
if [ -d "$SYSCTL_GIT_FOLDER" ]; then
	echo -e "${YELLOW};; Removing $SYSCTL_GIT_FOLDER...${RC}"
	sudo rm -rf "$SYSCTL_GIT_FOLDER"
else
	echo -e "${RED};; $SYSCTL_GIT_FOLDER does not exist, skipping...${RC}"
fi

# Run cleanup.sh
if [ -f "$CLEANUP_SCRIPT" ]; then
	echo -e "${YELLOW};; Executing cleanup script...${RC}"
	source "$CLEANUP_SCRIPT"
else
	echo -e "${RED};; Cleanup script $CLEANUP_SCRIPT not found, skipping...${RC}"
fi

# Empty the trash
echo -e "${YELLOW};; Emptying the trash...${RC}"
if command -v trash-empty &>/dev/null; then
	trash-empty
else
	echo -e "${RED};; trash-empty command not found, skipping...${RC}"
fi

echo -e "${CYAN};; Cleanup process completed successfully !${RC}"
