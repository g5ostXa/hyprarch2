#!/usr/bin/env bash

# // ======= install.sh =======

# Colors
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

# Get hyprarch2's current version name
VERSION_NAME="$HYPRARCH2_DIR/.version/latest"

# Set hyprarch2's source directory
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

# Set dotfiles target directory
DOTS_TARGET_DIR="$HOME/dotfiles"

# Define h2installer's paths'
H2INSTALLER_REPO="https://github.com/g5ostXa/h2install"
H2INSTALLER_DIR="$HOME/Downloads/h2install"
H2INSTALLER_TARGET_LOC="$HOME/Downloads/h2install/h2installer"

# Make sure gum is installed, exit if not found
if ! command -v "gum" >/dev/null; then
	echo -e "${RED};; Dependency gum NOT FOUND... ${RC}"
	exit 1
fi

install_greeter() {
	if command -v figlet >/dev/null 2>&1; then
		clear
		echo -e "${CYAN}"
		figlet -f smslant "Installer"
		echo "Welcome to hyprarch2"
		cat "$VERSION_NAME"
		echo -e "${RC}" && echo ""
	else
		clear
		echo -e "${CYAN}"
		cat <<"EOF"
	 ___           _        _ _
	|_ _|_ __  ___| |_ __ _| | | ___ _ __
	 | || '_ \/ __| __/ _` | | |/ _ \ '__|
	 | || | | \__ \ || (_| | | |  __/ |
	|___|_| |_|___/\__\__,_|_|_|\___|_|
EOF
		echo "Welcome to hyprarch2"
		cat "$VERSION_NAME"
		echo -e "${RC}" && echo ""
	fi

	# Simple prompt if installing via ssh
	if [ -n "$SSH_CONNECTION" ]; then
		while true; do
			read -r -p "DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn):" yn
			case $yn in
			[Yy]*)
				echo ";; Starting Installation..."
				func_main || exit 1
				break
				;;
			[Nn]*)
				echo ";; Installation canceled..."
				exit
				;;
			*)
				echo ";; Please answer yes or no."
				;;
			esac
		done
	else
		# Gum prompt if not installing via ssh
		if gum confirm "DO YOU WANT TO START THE INSTALLATION NOW?"; then
			echo ";; Starting Installation..."
			func_main || exit 1
		elif [ $? -eq 130 ]; then
			echo ";; Installation canceled..."
			exit 130
		else
			echo ";; Installation canceled..."
			exit
		fi
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

# Run some checks, build h2install binary and run if successful
func_main() {
	src_check
	src_copy || exit 1
	target_check || exit 1

	# TTY login
	if [ -f "/etc/issue" ]; then
		sudo chown root:root /etc/issue
	else
		echo -e "${RED};; Failed to copy issue to /etc/, skipping...${RC}"
	fi

	# Remove any existing h2install directory in ~/Downloads
	if [ -d "$H2INSTALLER_DIR" ]; then
		rm -rf "$H2INSTALLER_DIR"
		cd "$HOME/Downloads" || exit 1
	else
		cd "$HOME/Downloads" || exit 1
	fi

	# Get h2installer
	git clone --depth=1 "$H2INSTALLER_REPO".git

	# Go to and build h2installer
	cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer

	# Check if installer was successfully built and run it
	if [ ! -f "$H2INSTALLER_TARGET_LOC" ]; then
		echo -e "${RED};; ERROR: h2installer failed to build, aborting...${RC}"
		exit 1
	else
		echo -e "${CYAN};; h2installer was built successfully!${RC}"
		./h2installer
	fi
}

# Script entry
install_greeter || exit 1

# Check if essential files were copied
echo -e "${YELLOW};; Verifying if all essential files are copied...${RC}"

# Check .bashrc exists
if [ -f "$HOME/.bashrc" ]; then
	echo -e "${CYAN};; ~/.bashrc initialization successful!${RC}"
else
	echo -e "${RED};; Failed to initialize ~/.bashrc...${RC}"
fi

# Check .version directory exists
if [ -d "$HOME/.version/" ]; then
	echo -e "${CYAN};; Found ~/.version/ directory!${RC}"
else
	echo -e "${RED};; ~/.version/ not found...${RC}"
fi

# Check .github directory exists
if [ -d "$HOME/.github/" ]; then
	echo -e "${CYAN};; Found ~/.github/ directory!${RC}"
else
	echo -e "${RED};; ~/.github/ not found...${RC}"
fi

# Check .gitignore exists
if [ -f "$HOME/.gitignore" ]; then
	echo -e "${CYAN};; Found ~/.gitignore!${RC}"
else
	echo -e "${RED};; ~/.gitignore not found...${RC}"
fi

# Check if dotfiles exist
if [ -d "$DOTS_TARGET_DIR" ]; then
	echo -e "${CYAN};; Found ~/dotfiles/ directory!${RC}"
else
	echo -e "${RED};; ~/dotfiles/ not found...${RC}"
fi

# End of script message
echo -e "${CYAN}"
echo ";; hyprarch2 dotfiles are now installed!"
echo ""
echo ";; You now may launch hyprland or reboot..."
echo -e "${RC}"
