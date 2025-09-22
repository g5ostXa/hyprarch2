#!/usr/bin/env bash

YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

INSTALLER_REPO="git@github.com:g5ostXa/h2install.git"
REPO_NAME="h2install"
CLONE_DIR="$HOME/Downloads/$REPO_NAME"
INSTALL_BIN_DIR="/usr/local/bin"
OUTPUT_BIN="$INSTALL_BIN_DIR/$REPO_NAME"

check_dir() {
	if [ ! -d "$HOME/Downloads" ]; then
		echo -e "${YELLOW}:: The ~/Downloads directory does not exist...${RC}"
		echo -e "${CYAN}:: Creating ~/Downloads...${RC}"
		mkdir -p "$HOME/Downloads"
	fi
	cd "$HOME/Downloads" || exit 1
	echo -e "${CYAN}:: Working inside $(pwd)${RC}"
}

main_function() {
	if [ ! -d "$CLONE_DIR/.git" ]; then
		echo -e "${CYAN}:: Cloning $REPO_NAME via SSH...${RC}"
		git clone --depth=1 "$INSTALLER_REPO" "$CLONE_DIR"
	else
		echo -e "${CYAN}:: Repository already exists, updating...${RC}"
		cd "$CLONE_DIR" && git pull --depth=1
	fi

	cd "$CLONE_DIR" || {
		echo "Failed to cd into $CLONE_DIR"
		exit 1
	}

	echo -e "${CYAN}:: Building $REPO_NAME binary...${RC}"
	go build -o "$REPO_NAME"

	if [ -f "./$REPO_NAME" ]; then
		echo -e "${CYAN}:: Copying $REPO_NAME to $OUTPUT_BIN...${RC}"
		sudo cp "./$REPO_NAME" "$OUTPUT_BIN"
		sudo chmod +x "$OUTPUT_BIN"
		echo -e "${CYAN}:: $REPO_NAME has been installed globally at $OUTPUT_BIN${RC}"
		echo -e "${CYAN}:: Running $REPO_NAME...${RC}"
		"$OUTPUT_BIN"
	else
		echo -e "${YELLOW}:: Failed to build $REPO_NAME binary.${RC}"
		exit 1
	fi
}

check_dir
main_function
