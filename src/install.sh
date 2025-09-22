#!/usr/bin/env bash

# Define some colors
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

INSTALLER_REPO="https://github.com/g5ostXa/h2install"

# Run some checks
check_dir() {
	if [ ! -d "$HOME/Downloads" ]; then
		echo -e "${YELLOW}:: The ~/Downloads directory does not exist...${RC}"
		echo -e "${CYAN}:: Creating ~/Downloads...${RC}"
		mkdir -p "$HOME/Downloads"
	fi

	if [ "$(pwd)" != "$HOME/Downloads" ]; then
		echo -e "${YELLOW}:: Moving to ~/Downloads...${RC}"
		cd "$HOME/Downloads" && pwd
	fi

}

main_function() {
	if [ "$(pwd)" != "$HOME/Downloads" ]; then
		echo -e "${YELLOW}Errors occured, aborting...${RC}"
		exit 1
	else
		git clone --depth=1 "$INSTALLER_REPO".git ./
		cd "$INSTALLER_REPO" && go build -o h2install
		./h2install
	fi

}

check_dir
main_function
