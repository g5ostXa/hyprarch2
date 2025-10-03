#!/usr/bin/bash

# // ======= sys-info.sh =======

set -euo pipefail

func_main() {
	printf "Started sys-info\n"
	date
	homectl && hostnamectl
	echo "" && lsblk
}

func_Banner() {
	if command -v "figlet" >/dev/null 2>&1; then
		clear
		figlet -f smslant "sys-info" && echo ""
		func_main
	else
		clear
		echo "# // ======= sys-info.sh =======" && echo ""
		func_main
	fi
}
func_Banner
