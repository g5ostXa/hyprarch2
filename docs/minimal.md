## Packages
This is a sub-project for improving package management on hyprarch2.

#### Main goal
Currently, all packages are stored in `src/packages/pacman_packages` and `src/packages/aur_packages.txt`.
By default, all packages are installed at onced, which is a problem especially when installing `hyprarch2` in a VM because not all packages are needed.

This documentation will be used to gradually define the most needed packages to allow the user to choose which packages to install.
New lists will be created as bash scripts. One will define the base packages, the otgher will define the optional packages.

#### Base packages
- hyprland
- xdg-desktop-portal
- xdg-desktop-portal-hyprland
- xdg-desktop-portal-gtk
- gtk
- slurp
- grim
- alacritty
- nautilus
