#!/bin/bash

cat <<"EOF"
  ____ _                                
 / ___| | ___  __ _ _ __    _   _ _ __  
| |   | |/ _ \/ _` | '_ \  | | | | '_ \ 
| |___| |  __/ (_| | | | | | |_| | |_) |
 \____|_|\___|\__,_|_| |_|  \__,_| .__/ 
                                 |_|    

EOF

paru -Scc
# Remove orphaned packages
orphaned_packages=$(sudo pacman -Qtdq)
if [ -n "$orphaned_packages" ]; then
  sudo pacman -Rns $orphaned_packages
fi

# Remove packages that are no longer required
dependency_packages=$(sudo pacman -Qqd)
if [ -n "$dependency_packages" ]; then
  sudo pacman -Rsu $dependency_packages
fi

