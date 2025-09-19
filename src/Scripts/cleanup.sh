#!/bin/bash

# -----------------------------------------------
# cleanup.sh
# -----------------------------------------------
cat <<"EOF"
  ____ _                                
 / ___| | ___  __ _ _ __    _   _ _ __  
| |   | |/ _ \/ _` | '_ \  | | | | '_ \ 
| |___| |  __/ (_| | | | | | |_| | |_) |
 \____|_|\___|\__,_|_| |_|  \__,_| .__/ 
                                 |_|    

EOF

main_function() {

	dependency_packages=$(sudo pacman -Qqd)
	if [ -n "$dependency_packages" ]; then
		sudo pacman -Rsu "$dependency_packages"
	fi
	sudo pacman -Scc

	orphaned_packages=$(sudo pacman -Qtdq)
	if [ -n "$orphaned_packages" ]; then
		sudo pacman -Rns "$orphaned_packages"
	fi

	if pgrep -x dunst >/dev/null; then
		notify-send --urgency=normal "Cleanup done !"
	fi

}

main_function
