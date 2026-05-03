#!/usr/bin/env bash

# // ======= poweroff.sh =======

set -euo pipefail

YELLOW='\033[0;33m'
RC='\033[0m'

func_main() {
	if gum confirm ":: Are you sure you want to power off the system ?"; then
		clear
		gum spin --spinner points --title "Shutting down..." --padding "2 2" --spinner.foreground "112" --title.foreground "10" -- sleep 3
		systemctl poweroff
	elif [ $? -eq 130 ]; then
		exit 130
	else
		echo ":: Aborted..."
	fi
}

if command -v "gum" >/dev/null 2>&1; then
	func_main
else
	clear
	echo -e "${YELLOW}:: Shutting down...${RC}" && sleep 3
	systemctl poweroff
fi
