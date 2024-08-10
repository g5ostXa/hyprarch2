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
sudo su -c 'pacman -Qtdq | pacman -Rns -'
sudo su -c 'pacman -Qqd | pacman -Rsu -'


