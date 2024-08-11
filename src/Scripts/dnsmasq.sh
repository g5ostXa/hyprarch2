#!/bin/bash

RED='\033[0;31m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
RC='\033[0m'

CONF_FILE="/etc/dnsmasq.conf"

if [ -f "$CONF_FILE" ]; then
	echo -e "${YELLOW}Configuring dnsmasq...${RC}"
	sleep 1
else
	echo -e "${RED}:: ERROR: dnsmasq may not be installed, or the config file doesn't exist. Exiting...${RC}"
	exit 1
fi

# Check if the script is run as root
if [ "$EUID" -ne 0 ]; then
	echo -e "${RED}Please run as root or use sudo...$}{RC}"
	exit 1
fi

sed -i '/^#conf-file=\/usr\/share\/dnsmasq\/trust-anchors.conf/s/^#//g' "$CONF_FILE"

sed -i '/^#dnssec/s/^#//g' "$CONF_FILE"

sed -i '/^#bind-interfaces/s/^#//g' "$CONF_FILE"

sudo systemctl enable dnsmasq.service
echo -e "${GREEN}Configuration updated and dnsmasq service enabled!${RC}"
