#!/bin/bash

# ---------------------------------------------------------------------------
# checkerrors.sh | By g5ostXa | 2024
# ---------------------------------------------------------------------------

# Define colors
CYAN='\033[0;36m'
YELLOW='\033[0;33m'
RC='\033[0m'

# Script banner
echo -e "${CYAN}"
cat <<"EOF"
  ____ _               _    _____
 / ___| |__   ___  ___| | _| ____|_ __ _ __ ___  _ __ ___
| |   | '_ \ / _ \/ __| |/ /  _| | '__| '__/ _ \| '__/ __|
| |___| | | |  __/ (__|   <| |___| |  | | | (_) | |  \__ \
 \____|_| |_|\___|\___|_|\_\_____|_|  |_|  \___/|_|  |___/

EOF
echo -e "${RC}"

check_errors() {
	echo -e "${YELLOW}Checking for system errors with journalctl...${RC}"
	journalctl -p 3 -b
	echo -e "${YELLOW}Checking systemd for any failed services...${RC}"
	systemctl --failed

}

check_errors
