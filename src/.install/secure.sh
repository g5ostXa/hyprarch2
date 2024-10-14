#!/bin/bash

# ------------------------------------------------------
# secure.sh
# ------------------------------------------------------

# Define colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Define variables
SYSCTL_DIR="/etc/sysctl.d/"
SYSCTL_SOURCE_DIR="$HOME/sysctl"
SYSCTL_REPO="https://github.com/g5ostXa/sysctl.git"
DNSMASQ_CONFIG="/etc/dnsmasq.conf"

# Script banner
echo -e "${CYAN}===========================${RC}"
echo -e "${CYAN}---> RUNNING SECURE.SH <---${RC}"
echo -e "${CYAN}===========================${RC}"
sleep 3

ufw_config() {
	echo -e "${CYAN}Installing and configuring UFW...${RC}"
	sudo pacman -S --noconfirm ufw
	sudo ufw default deny incoming
	sudo ufw default allow outgoing
	sudo ufw enable && sudo systemctl enable ufw.service

	echo -e "${CYAN}==> NOTE:${RC}"
	echo -e "${YELLOW}-> A reboot is required for the firewall to be enabled and active!${RC}"
	echo -e "${YELLOW}-> The installation will continue in 5 seconds...${RC}"
	sleep 6
}

# Function to apply sysctl hardening (kernel and networking)
sysctl_hardening() {
	echo -e "${YELLOW}Checking if $SYSCTL_DIR exists...${RC}"

	if [ -d "$SYSCTL_DIR" ]; then
		echo -e "${GREEN}$SYSCTL_DIR exists, proceeding with sysctl hardening...${RC}"
	else
		echo -e "${YELLOW}$SYSCTL_DIR does not exist, creating directory...${RC}"
		sudo mkdir -p "$SYSCTL_DIR"
		echo -e "${GREEN}$SYSCTL_DIR created!${RC}"
	fi

	sleep 2

	if [ ! -d "$SYSCTL_SOURCE_DIR" ]; then
		echo -e "${YELLOW}Cloning sysctl repo...${RC}"
		cd "$HOME" && git clone "$SYSCTL_REPO"
		echo -e "${YELLOW}Copying sysctl configurations from $SYSCTL_SOURCE_DIR to $SYSCTL_DIR...${RC}"
		sleep 2
		sudo cp -r "$SYSCTL_SOURCE_DIR"/* "$SYSCTL_DIR/"
		sudo chown -R root:root "$SYSCTL_DIR"/*
		sudo sysctl --system
		echo -e "${GREEN}sysctl hardening applied successfully!${RC}"
	else
		rm -rf "$SYSCTL_SOURCE_DIR"
		echo -e "${YELLOW}Cloning sysctl repo...${RC}"
		cd "$HOME" && git clone "$SYSCTL_REPO"
		echo -e "${YELLOW}Copying sysctl configurations from $SYSCTL_SOURCE_DIR to $SYSCTL_DIR...${RC}"
		sleep 2
		sudo cp -r "$SYSCTL_SOURCE_DIR"/* "$SYSCTL_DIR/"
		sudo chown -R root:root "$SYSCTL_DIR"/*
		sudo sysctl --system
		echo -e "${GREEN}Sysctl hardening applied successfully!${RC}"
	fi

}

config_dnsmasq() {
	if [ -f "$DNSMASQ_CONFIG" ]; then
		echo -e "${YELLOW}Configuring dnsmasq...${RC}"
		sleep 1
	else
		echo -e "${RED}:: ERROR: dnsmasq may not be installed, or the config file doesn't exist. Skipping...${RC}"
		return 1
	fi

	if systemctl is-enabled --quiet dnsmasq.service; then
		echo -e "${GREEN}dnsmasq is already configured and enabled...${RC}"
		return 1
	elif command -v dnsmasq >/dev/null 2>&1; then
		sudo sed -i '/^#conf-file=\/usr\/share\/dnsmasq\/trust-anchors.conf/s/^#//g' "$DNSMASQ_CONFIG"
		sudo sed -i '/^#dnssec/s/^#//g' "$DNSMASQ_CONFIG"
		sudo sed -i '/^#bind-interfaces/s/^#//g' "$DNSMASQ_CONFIG"
		sudo systemctl enable dnsmasq.service
		echo -e "${GREEN}Configuration updated and dnsmasq service enabled!${RC}"
	else
		echo -e "${RED}dnsmasq is not installed. Skipping...${RC}"
		return 1
	fi
}

# Check if ufw is enabled
if ! systemctl is-enabled --quiet ufw.service; then
	ufw_config
else
	echo -e "${GREEN}UFW is already enabled.${RC}"
fi

sysctl_hardening
config_dnsmasq
