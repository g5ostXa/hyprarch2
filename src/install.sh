#!/usr/bin/env bash

# // ======= install.sh =======

# Colors
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

# Main variables
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"
VERSION_NAME="$HYPRARCH2_DIR/.version/latest"
DOTS_TARGET_DIR="$HOME/dotfiles"
H2INSTALLER_REPO="https://github.com/g5ostXa/h2install"
H2INSTALLER_TARGET_LOC="$HOME/Downloads/h2install/h2installer"

if ! command -v "gum" >/dev/null; then
    echo -e "${RED};; Dependency gum NOT FOUND... ${RC}"
    exit 1
fi

# Installation greeter
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
			sleep 2
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
		sleep 2
	elif [ $? -eq 130 ]; then
		echo ";; Installation canceled..."
		exit 130
	else
		echo ";; Installation canceled..."
		exit
	fi
fi

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
	src_check
	src_copy || exit 1
	target_check || exit 1

	if [ -f "/etc/issue" ]; then
		sudo chown root:root /etc/issue
	else
		echo -e "${RED};; Failed to copy issue to /etc/, skipping...${RC}"
	fi

	if [ -d "$H2INSTALLER_DIR" ]; then
		rm -rf "$H2INSTALLER_DIR"
        cd "$HOME/Downloads" || exit 1
    else
        cd "$HOME/Downloads" || exit 1
    fi

	git clone --depth=1 "$H2INSTALLER_REPO".git
	cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer

	# Check if h2installer binary was created and exists
	if [ ! -f "$H2INSTALLER_TARGET_LOC" ]; then
		echo -e "${RED};; ERROR: h2installer failed to build, aborting...${RC}"
		exit 1
	else
		echo -e "${CYAN};; h2installer was built successfully!${RC}"
		./h2installer
	fi
}

# Script entry
echo -e "${YELLOW};; INFO: You're about to clone the h2install repository${RC}"
read -rp ";; Are you sure you want to start the installation now? [y/N]" ans
[[ "$ans" =~ ^[Yy]$ ]] && func_main || exit 1

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