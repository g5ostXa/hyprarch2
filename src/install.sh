#!/usr/bin/env bash

# // ======= install.sh =======

# Colors
CYAN='\033[0;36m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RC='\033[0m'

VERSION_NAME="$HOME/hyprarch2/.version/latest"
HYPRARCH2_DIR="$HOME/hyprarch2"

install_greeter() {
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

	while true; do
		read -r -p ";; DO YOU WANT TO START THE INSTALLATION NOW? (Yy/Nn):" yn

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
}

check_paru() {
	if ! command -v "paru" >/dev/null 2>&1; then
		echo -e "${YELLOW};; Paru: Requiured but not found.${RC}"

		while true; do
			read -r -p ";; Install paru and all hyprarch2 dependencies now? (Yy/Nn):" yn
			case $yn in
			[Yy]*)
				echo ";; Installing paru..."
				if [ ! -d "$HOME/.cache" ]; then
					mkdir -p "HOME/.cache"
				fi

				cd "$HOME/.cache" || exit

				if [ -d "paru" ]; then
					rm -rf ./paru
				fi

				git clone --depth=1 https://aur.archlinux.org/paru.git
				cd paru && makepkg -si --noconfirm
				cd "$HOME" || exit
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
	fi
}

check_depends() {
	# Install all hyprarch2's exterrnal depends
	local -a h2depends=(
		"hyprland"
		"hyprpolkitagent"
		"uwsm"
		"ghostty"
		"aquamarine"
		"waybar"
		"rofi"
		"dunst"
		"libnotify"
		"cliphist"
		"wlogout"
		"xdg-desktop-portal-hyprland"
		"xdg-desktop-portal-gtk"
		"qt5-wayland"
		"waypaper-git"
		"hyprpicker"
		"hyprlock"
		"hyprcursor"
		"hypridle"
		"hyprgraphics"
		"hyprlang"
		"hyprls-git"
		"hyprwayland-scanner"
		"otf-font-awesome"
		"woff2-font-awesome"
		"ttf-fira-sans"
		"ttf-fira-code"
		"ttf-firacode-nerd"
		"gnu-free-fonts"
		"brightnessctl"
		"neovim"
		"nautilus"
		"fastfetch"
		"pavucontrol"
		"pipewire"
		"pipewire-pulse"
		"pipewire-alsa"
		"pipewire-jack"
		"wireplumber"
		"bibata-cursor-theme"
		"dracula-icons-theme"
		"tokyonight-gtk-theme-git"
		"python-pywal16"
		"gtk3"
		"gtk4"
		"awww"
		"fish"
		"starship"
		"python-pip"
		"eza"
		"swappy"
		"firefox-nightly-bin"
		"vscodium-bin"
		"ccache"
		"jq"
		"pacman-contrib"
		"fzf"
		"ttf-0xproto-nerd"
		"grim"
		"bubblewrap"
		"gum"
		"figlet"
	)
	while true; do
		read -r -p "Install all required packages now? (y/n): " yn
		case $yn in
		[Yy]*)
			echo "Installing dependencies..."
			paru -S --needed "${h2depends[@]}" || exit 1
			break
			;;
		[Nn]*)
			echo "Installation canceled."
			exit 0
			;;
		*)
			echo "Please answer yes or no."
			;;
		esac
	done
}

src_copy() {
	echo -e "${CYAN};; Copying assets/ ...${RC}"
	if [ -d "$HOME/assets" ]; then
		cp -r "$HOME/assets" "$HOME/assets_backup"
	fi

	sleep 1.5
	cp -r "$HYPRARCH2_DIR/assets" "$HOME"/.
	echo ";; DONE."

	echo -e "${CYAN};; Copying dotfiles/ ...${RC}"
	if [ -d "$HOME/dotfiles" ]; then
		cp -r "$HOME/dotfiles" "$HOME/dotfiles_backup"
	fi

	sleep 1.5
	cp -r "$HYPRARCH2_DIR/dotfiles" "$HOME"/.
	echo ";; DONE."

	echo -e "${CYAN};; Copying src/ ...${RC}"
	if [ -d "$HOME/src" ]; then
		cp -r "$HOME/src" "$HOME/src_backup"
	fi

	sleep 1.5
	cp -r "$HYPRARCH2_DIR/src" "$HOME"/.
	echo ";; DONE."

	echo -e "${CYAN};; Copying .version/ ...${RC}"
	if [ -d "$HOME/.version" ]; then
		cp -r "$HOME/.version" "$HOME/.version_backup"
	fi

	sleep 1.5
	cp -r "$HYPRARCH2_DIR/.version" "$HOME"/.
	echo ";; DONE."

	echo -e "${CYAN};; Copying issue file ...${RC}"
	if [ -f "/etc/issue" ]; then
		sudo cp -r "/etc/issue" "/etc/issue_backup"
	fi

	sleep 1.5
	sudo cp -r "$HYPRARCH2_DIR/dotfiles/login/issue" "/etc/issue"
	sudo chown root:root /etc/issue
	sudo chmod 644 /etc/issue
	echo ";; DONE."

	echo -e "${CYAN};; Copying .bashrc ... ${RC}"
	if [ -f "$HOME/.bashrc" ]; then
		cp -r "$HOME/.bashrc" "$HOME/.bashrc_backup"
	fi

	sleep 1.5
	cp -r "$HYPRARCH2_DIR/.bashrc" "$HOME"/.
	echo "DONE."
}

get_wallpaper() {
	echo -e "${YELLOW}For wallpapers to work on hyprarch2, you need to put your walls in ~/wallpaper.${RC}"
	echo -e "${YELLOW}You can add your own walls to that folder later${RC}"

	while true; do
		read -r -p ";; Install wallpapers now? (Yy/Nn):" yn

		case $yn in
		[Yy]*)
			echo ";; Starting Installation..."

			if [ -d "$HOME/wallpaper" ]; then
				cp -r "$HOME/wallpaper" "$HOME/wallpaper_backup"
			fi

			cd "$HOME" && git clone --depth=1 https://github.com/g5ostXa/wallpaper.git
			break
			;;
		[Nn]*)
			echo ";; Installation canceled..."
			return
			;;
		*)
			echo ";; Please answer yes or no."
			;;
		esac
	done
}

create_symlinks() {
	while true; do
		read -r -p ";; Do you want to symlinks my dotfiles to your ~/.config/ folder? (Yy/Nn):" yn

		case $yn in
		[Yy]*)
			echo ";; Creating symlinks ..."
			sleep 1.5

			if [ -d "$HOME/.config" ]; then
				cp -r "$HOME/.config" "$HOME/.config_backup"
			fi

			ln -s ~/hyprarch2/dotfiles/gtk/.Xresources ~/
			ln -s ~/hyprarch2/dotfiles/ghostty ~/.config
			ln -s ~/hyprarch2/dotfiles/btop ~/.config
			ln -s ~/hyprarch2/dotfiles/dunst ~/.config
			ln -s ~/hyprarch2/dotfiles/gtk ~/.config
			ln -s ~/hyprarch2/dotfiles/hypr/ ~/.config
			ln -s ~/hyprarch2/dotfiles/nvim ~/.config
			ln -s ~/hyprarch2/dotfiles/rofi ~/.config
			ln -s ~/hyprarch2/dotfiles/starship.toml ~/.config
			ln -s ~/hyprarch2/dotfiles/swappy ~/.config
			ln -s ~/hyprarch2/dotfiles/vim ~/.config
			ln -s ~/hyprarch2/dotfiles/wal ~/.config
			ln -s ~/hyprarch2/dotfiles/waybar ~/.config
			ln -s ~/hyprarch2/dotfiles/wlogout ~/.config
			ln -s ~/hyprarch2/dotfiles/fastfetch ~/.config
			ln -s ~/hyprarch2/dotfiles/fish ~/.config
			ln -s ~/hyprarch2/dotfiles/pacseek ~/.config
			ln -s ~/hyprarch2/dotfiles/waypaper ~/.config
			ln -s ~/hyprarch2/dotfiles/uwsm ~/.config

			if [ -d "$HYPRARCH2_DIR/.git" ]; then
				rm -rf "$HYPRARCH2_DIR/.git"
			fi

			echo ";; Done."
			break
			;;
		[Nn]*)
			echo ";; Symplinks not created, please add your configs manually before launching hyprland..."
			return
			;;
		*)
			echo ";; Please answer yes or no."
			;;
		esac
	done
}

func_main() {
	sudo -v
	bash "$HYPRARCH2_DIR/src/Scripts/pacman.sh"

	check_paru && check_depends && src_copy
	get_wallpaper && create_symlinks
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

# Check src directory exists
if [ -d "$HOME/src" ]; then
	echo -e "${CYAN};; Found ~/src/ directory!${RC}"
else
	echo -e "${RED};; ~/src/ not found...${RC}"
fi

# Check if dotfiles exist
if [ -d "$HOME/dotfiles" ]; then
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
