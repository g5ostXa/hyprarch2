#!/bin/bash

YELLOW='\033[0;33m'
RC='\033[0m' 

echo CheckErrors | figlet

check_errors() {
echo -e "${YELLOW}Checking for system errors...${RC}"
journalctl -p 3 -b
echo -e "${YELLOW}Checking systemd for any failed services${RC}"
systemctl --failed

}

check_errors
