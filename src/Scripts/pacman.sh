#!/bin/bash

# -----------------------------------------------
# pacman.sh
# -----------------------------------------------
RED='\033[0;31m'
CYAN='\033[0;36m'
RC='\033[0m'

echo -e "${CYAN}Configuring pacman...${RC}"
sleep 2

if grep -Fq "#ParallelDownloads" /etc/pacman.conf; then
	sudo sed -i 's/^#ParallelDownloads/ParallelDownloads/' /etc/pacman.conf
	echo -e "${CYAN}Parallel downloads activated!${RC}"
else
	echo -e "${CYAN}ParallelDownloads is already enabled!${RC}"
fi

if grep -Fxq "#Color" /etc/pacman.conf; then
	sudo sed -i 's/^#Color/Color/' /etc/pacman.conf
	echo -e "${CYAN}Colors activated!${RC}"
else
	echo -e "${RED}Failed to activate colors...${RC}"
fi

if grep -Fxq "#VerbosePkgLists" /etc/pacman.conf; then
	sudo sed -i 's/^#VerbosePkgLists/VerbosePkgLists/' /etc/pacman.conf
	echo -e "${CYAN}Verbose pkg lists activated!${RC}"
else
	echo -e "${RED}Failed to activate verbose pkg lists...${RC}"
fi

if grep -Fxq "ILoveCandy" /etc/pacman.conf; then
	echo -e "${RED}I love candy already activated...${RC}"
	exit
else
	sudo sed -i '/^ParallelDownloads = .*/a ILoveCandy' /etc/pacman.conf
	echo -e "${CYAN}I love candy activated${RC}"
fi
