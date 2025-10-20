#!/usr/bin/env bash

# // ======= pacman.sh ========

CYAN='\033[0;36m'
YELLOW='\033[0;33m'
RC='\033[0m'

echo "======================"
echo -e "${YELLOW}Configuring PACMAN...${RC}"
echo "======================"
sleep 1

if grep -Fq "#ParallelDownloads" /etc/pacman.conf; then
	sudo sed -i 's/^#ParallelDownloads/ParallelDownloads/' /etc/pacman.conf
	echo -e "${CYAN}ParallelDownloads${RC} activated!"
else
	echo -e "${CYAN}ParallelDownloads${RC} is already enabled!"
fi

if grep -Fxq "#Color" /etc/pacman.conf; then
	sudo sed -i 's/^#Color/Color/' /etc/pacman.conf
	echo -e "${CYAN}Colors${RC} activated!"
else
	echo -e "${CYAN}Colors${RC} are already enabled!"
fi

if grep -Fxq "#VerbosePkgLists" /etc/pacman.conf; then
	sudo sed -i 's/^#VerbosePkgLists/VerbosePkgLists/' /etc/pacman.conf
	echo -e "${CYAN}VerbosePkgLists${RC} activated!"
else
	echo -e "${CYAN}VerbosePkgLists${RC} is already enabled!"
fi

if grep -Fxq "ILoveCandy" /etc/pacman.conf; then
	echo -e "${CYAN}I love candy${RC} is already enabled!"
	exit
else
	sudo sed -i '/^ParallelDownloads = .*/a ILoveCandy' /etc/pacman.conf
	echo -e "${CYAN}I love candy${RC} activated"
fi
