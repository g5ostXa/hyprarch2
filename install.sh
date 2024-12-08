#!/bin/bash

# ------------------------------------------------
# install.sh / Good luck !
# ------------------------------------------------

# Set colors
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RC='\033[0m'

# Set hyprarch2 latest version name
VERSION_NAME="$HOME/Downloads/hyprarch2/.version/latest"

# Set packages directory
PACMAN_PACKAGES="$HOME/Downloads/hyprarch2/src/packages/pacman_packages.txt"

# Set wallpaper variables
WALLPAPER_REPO="https://github.com/g5ostXa/wallpaper.git"
WALLPAPER_DIR="$HOME/wallpaper"

# Set hyprarch2 install directory
HYPRARCH2_DIR="$HOME/Downloads/hyprarch2"

# Set cleanup script path
CLEANUP_SCRIPT="$HOME/src/Scripts/cleanup.sh"

# Installation greeter (Not complicated at all)
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

# Gum does not work well with ssh
# That's why if installing via ssh, instead use a basic bash prompt

# Basic bash prompt if installing via ssh
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
	# Gum prompt if not using ssh
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

is_installed_figlet() {
	if ! command -v figlet >/dev/null 2>&1; then
		echo -e "${RED};; figlet is not installed...${RC}"
		exit 1
	fi

}

is_installed_gum() {
	if ! command -v gum >/dev/null 2>&1; then
		echo -e "${RED};; gum is not installed...${RC}"
		exit 1
	fi

}

is_installed_git() {
	if ! command -v git >/dev/null 2>&1; then
		echo -e "${RED};; git is not installed...${RC}"
		exit 1
	fi

}

install_aur_packages() {
	clear && echo -e "${CYAN}"
	figlet -f smslant "AUR"
	echo -e "${RC}" && echo ""

	echo -e "${YELLOW};; Which aur helper do you want to install ?${RC}" && echo ""
	AUR_HELPER=$(gum choose "paru" "yay" "CANCEL")

	if [ -n "$AUR_HELPER" ]; then
		if [[ ! "$AUR_HELPER" == "CANCEL" ]]; then
			is_installed_git
			cd || exit
			git clone https://aur.archlinux.org/"$AUR_HELPER"-bin
			cd "$AUR_HELPER"-bin || exit
			makepkg -si
			cd || exit
		else
			echo -e "${RED};; Operation canceled... :(${RC}"
			exit 0
		fi
	else
		exit 1
	fi

	"$AUR_HELPER" -S --needed --noconfirm \
		bibata-cursor-theme \
		dracula-icons-theme \
		pacseek-bin \
		tokyonight-gtk-theme-git \
		trizen \
		typos-lsp-bin \
		unimatrix-git \
		uwsm \
		vim-language-server \
		vscodium-bin \
		waypaper \
		wlogout

	if [ -d "$HOME/$AUR_HELPER-bin" ]; then
		echo -e "${CYAN};; Removing $AUR_HELPER-bin...${RC}"
		rm -rf "$HOME/$AUR_HELPER-bin" && sleep 2
	else
		echo -e "${RED};; $AUR_HELPER-bin does not exist...${RC}" && sleep 2
		return
	fi

}

install_wallpaper() {
	if [ -d "$WALLPAPER_DIR" ]; then
		echo -e "${YELLOW};; Installing wallpapers...${RC}"
		sleep 1
		rm -rf "$WALLPAPER_DIR"
		cd && git clone "$WALLPAPER_REPO"
		echo -e "${CYAN};; Wallpaper repository installed !${RC}"
		sleep 2
	else
		echo -e "${YELLOW};; Installing wallpapers...${RC}"
		sleep 1
		cd && git clone "$WALLPAPER_REPO"
		echo -e "${CYAN};; Wallpaper repository installed !${RC}"
		sleep 2
	fi

}

copy_files() {
	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; Creating a backup of ~/.bashrc...${RC}"
		cp -r "$HOME"/.bashrc "$HOME"/.bashrc.bak
		echo -e "${YELLOW};; Created ~/.bashrc.bak!${RC}"
		sleep 2
		rm -rf "$HOME/.bashrc"
	fi
	if [ ! -d "$HYPRARCH2_DIR" ]; then
		echo -e "${RED};; $HYPRARCH2_DIR directory does not exist, exiting...${RC}"
		exit 1
	else
		cp -r "$HYPRARCH2_DIR"/* "$HOME/"
		sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/"
		sudo chown -R root: /etc/issue
	fi
	if [ -f "$HOME/.bashrc" ]; then
		echo -e "${YELLOW};; $HOME/.bashrc exits...${RC}"
	else
		echo -e "${YELLOW};; Copying .bashrc to home folder...${RC}"
		cp -r "$HYPRARCH2_DIR/.bashrc" "$HOME/"
	fi
	if [ -d "$HOME/.version/" ]; then
		echo -e "${YELLOW};; $HOME/.version/ exists...${RC}"
	else
		echo -e "${YELLOW};; Copying .version/ to home folder...${RC}"
		cp -r "$HYPRARCH2_DIR/.version/" "$HOME/"
	fi
	if [ -d "$HOME/.github/" ]; then
		echo -e "${YELLOW};; $HOME/.github/ exists...${RC}"
	else
		echo -e "${YELLOW};; Copying .github/ to home folder...${RC}"
		cp -r "$HYPRARCH2_DIR/.github/" "$HOME/"
	fi
	if [ -f "$HOME/.gitignore" ]; then
		echo -e "${YELLOW};; $HOME/.gitignore exists...${RC}"
	else
		echo -e "${YELLOW};; Copying .gitignore to home folder...${RC}"
		cp -r "$HOME/Downloads/hyprarch2/.gitignore" "$HOME/"
	fi

	sleep 2

}

create_symlinks() {
	if [ -f "$HOME/dotfiles/gtk/.Xresources" ]; then
		ln -s ~/dotfiles/gtk/.Xresources ~/
	fi
	if [ -d "$HOME/dotfiles/alacritty/" ]; then
		ln -s ~/dotfiles/alacritty/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/dunst/" ]; then
		ln -s ~/dotfiles/dunst/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/gtk-3.0/" ];then
		ln -s ~/dotfiles/gtk/gtk-3.0/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/gtk/gtk-4.0/" ]; then
		ln -s ~/dotfiles/gtk/gtk-4.0/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/hypr/" ]; then
		ln -s ~/dotfiles/hypr/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/nvim/" ]; then
		ln -s ~/dotfiles/nvim/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/rofi/" ]; then
		ln -s ~/dotfiles/rofi/ ~/.config/
	fi
	if [ -f "$HOME/dotfiles/starship/starship.toml" ]; then
		ln -s ~/dotfiles/starship/starship.toml ~/.config/
	fi
	if [ -d "$HOME/dotfiles/swappy/" ]; then
		ln -s ~/dotfiles/swappy/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/vim/" ]; then
		ln -s ~/dotfiles/vim/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/wal/" ]; then
		ln -s ~/dotfiles/wal ~/.config/
	fi
	if [ -d "$HOME/dotfiles/waybar/" ]; then
		ln -s ~/dotfiles/waybar/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/wlogout/" ]; then
		ln -s ~/dotfiles/wlogout/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/fastfetch/" ]; then
		ln -s ~/dotfiles/fastfetch/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/fish/" ]; then
		ln -s ~/dotfiles/fish/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/pacseek/" ]; then
		ln -s ~/dotfiles/pacseek/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/waypaper/" ]; then
		ln -s ~/dotfiles/waypaper/ ~/.config/
	fi
	if [ -d "$HOME/dotfiles/uwsm/" ]; then
		ln -s ~/dotfiles/uwsm/ ~/.config/
	fi

}

# Installation Start # -----------------------------------------------------------------
is_installed_figlet

# Configure pacman
echo -e "${CYAN}"
figlet -f smslant "pacman.sh"
echo -e "${RC}" && echo ""
source ~/Downloads/hyprarch2/src/Scripts/pacman.sh

# Install packages (pacman)
is_installed_gum
gum spin --spinner points --title "Preparing to install main packages..." -- sleep 5
sudo pacman -Syu && sudo pacman -S --needed - <"$PACMAN_PACKAGES" && sleep 2
set -e

# Install packages (AUR)
install_aur_packages

# Wallpaper setup
install_wallpaper

# Dotfiles setup
copy_files

# Link ~/dotfiles/ to ~/.config
create_symlinks

# Cleanup install files and build dependencies
if [ -d "$HYPRARCH2_DIR" ]; then
	echo -e "${YELLOW};; Removing $HYPRARCH2_DIR...${RC}"
	rm -rf "$HYPRARCH2_DIR"
else
	echo -e "${RED};; $HYPRARCH2_DIR does not exist, skipping...${RC}"
fi

# Run cleanup.sh
if [ -f "$CLEANUP_SCRIPT" ]; then
	echo -e "${YELLOW};; Executing cleanup script...${RC}"
	source "$CLEANUP_SCRIPT"
else
	echo -e "${RED};; Cleanup script $CLEANUP_SCRIPT not found, skipping...${RC}"
fi

# Empty the trash
echo -e "${YELLOW};; Emptying the trash...${RC}"
if command -v trash-empty &>/dev/null; then
	trash-empty
else
	echo -e "${RED};; trash-empty command not found, skipping...${RC}"
fi

# Load ~/.bashrc
source ~/.bashrc

# Installation end message -------------------------------------------------------------
echo -e "${CYAN}"
figlet -f smslant "hyprarch2"
echo ""
echo ";; Installation status: COMPLETE"
echo ""
echo -e "${RC}"
