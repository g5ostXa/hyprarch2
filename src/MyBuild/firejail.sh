#!/bin/bash

sudo cp -r "$HOME"/src/hooks/firejail.hook /etc/pacman.d/hooks/
sudo chown -R root: /etc/pacman.d/hooks/firejail.hook
sudo firecfg && sudo firecfg --fix
