#!/usr/bin/env bash

# // ======= install.sh =======

# Colors
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

# Main variables
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
DOTS_TARGET_DIR="$HOME/dotfiles"
H2INSTALLER_REPO="https://github.com/g5ostXa/h2install"

# Check if git is installed
is_installed_git() {
	if ! command -v "git" >/dev/null 2>&1; then
		echo -e "${RED};; Git not installed, aborting...${RC}"
		exit 1
	fi
}

# Check if go is installed
is_installed_go() {
	if ! command -v "go" >/dev/null 2>&1; then
		echo -e "${RED};; Go is not installed, aborting...${RC}"
		exit 1
	fi
}

# Check if hyprarch2 directory exists
src_check() {
	if [ ! -d "$HYPRARCH2_DIR" ]; then
		echo -e "${RED};; $HYPRARCH2_DIR does not exist, exiting...${RC}"
		exit 1
	fi
}

# Copy all hyprarch2 files to home directory
src_copy() {
	cp -r "$HYPRARCH2_DIR"/* "$HOME/"
	sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"
}

# Make sure all files were copied
target_check() {
	if [ ! -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
		cp "$HYPRARCH2_DIR/.bashrc" "$HOME"
	fi

	# Check .version/ exists
	if [ ! -d "$HOME/.version/" ]; then
		cp -r "$HYPRARCH2_DIR/.version/" "$HOME"
	fi

	# Check .github/ exists
	if [ ! -d "$HOME/.github/" ]; then
		cp -r "$HYPRARCH2_DIR/.github/" "$HOME"
	fi

	# Check .gitignore exists
	if [ ! -f "$HOME/.gitignore" ]; then
		cp "$HYPRARCH2_DIR/.gitignore" "$HOME"
	fi
}

# Install the h2install repository and run h2installer
func_main() {
	is_installed_git && is_installed_go && src_check && src_copy && target_check

	if [ -f "/etc/issue" ]; then
		sudo chown root:root /etc/issue
	else
		echo -e "${YELLOW};; Failed to copy issue to /etc...${RC}"
		sleep 1
	fi

	cd "$HOME/Downloads" && git clone --depth=1 "$H2INSTALLER_REPO".git
	cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer
	./h2installer
}

# Script entry
echo -e "${YELLOW};; INFO: You're about to clone the h2install repository${RC}"
read -rp ";; Are you sure you want to start the installation now? [y/N]" ans
[[ "$ans" =~ ^[Yy]$ ]] && func_main

# Check if h2installer binary was created and exists
if [ ! -f "$HOME/Downloads/h2install/h2installer" ]; then
	echo -e "${RED};; ERROR: h2installer was not built successfully!${RC}"
	exit 1
else
	echo -e "${CYAN};; h2installer was built successfully!${RC}"
fi

# Check if essential files were copied
echo -e "${YELLOW};; Verifying if all essential files are copied...${RC}"

# Check .bashrc exists
if [ -f "$HOME/.bashrc" ]; then
	echo -e "${CYAN};; .bashrc exists and was copied.${RC}"
else
	echo -e "${RED};; .bashrc was not copied properly!${RC}"
	exit 1
fi

# Check .version directory exists
if [ -d "$HOME/.version/" ]; then
	echo -e "${CYAN};; .version directory exists.${RC}"
else
	echo -e "${RED};; .version directory was not copied!${RC}"
	exit 1
fi

# Check .github directory exists
if [ -d "$HOME/.github/" ]; then
	echo -e "${CYAN};; .github directory exists.${RC}"
else
	echo -e "${RED};; .github directory was not copied!${RC}"
	exit 1
fi

# Check .gitignore exists
if [ -f "$HOME/.gitignore" ]; then
	echo -e "${CYAN};; .gitignore exists and was copied.${RC}"
else
	echo -e "${RED};; .gitignore was not copied!${RC}"
	exit 1
fi

# Check if dotfiles exist
if [ -d "$DOTS_TARGET_DIR" ]; then
	echo -e "${CYAN};; dotfiles target directorty exists.${RC}"
else
	echo -e "${RED};; dotfiles target directory does not exist...${RC}"
	exit 1
fi

# End of script message
echo -e "${CYAN}"
echo ";; Installation completed successfully!"
echo ""
echo ";; You now may launch hyprland or reboot"
echo -e "${RC}"
