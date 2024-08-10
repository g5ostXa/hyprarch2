#!/bin/bash

CONF_FILE="/etc/dnsmasq.conf"

if [ -f "$CONF_FILE" ]; then
	echo "Configuring dnsmasq..."
	sleep 1
else
	echo ":: ERROR: dnsmasq may not be installed, or the config file doesn't exist. Exiting..."
	exit 1
fi

# Check if the script is run as root
if [ "$EUID" -ne 0 ]; then
	echo "Please run as root or use sudo."
	exit 1
fi

sed -i '/^#conf-file=\/usr\/share\/dnsmasq\/trust-anchors.conf/s/^#//g' "$CONF_FILE"

sed -i '/^#dnssec/s/^#//g' "$CONF_FILE"

sed -i '/^#bind-interfaces/s/^#//g' "$CONF_FILE"

# sudo systemctl enable dnsmasq.service
echo "Configuration updated and dnsmasq service enabled."

