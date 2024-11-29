<div align="center">
<img src="https://github.com/g5ostXa/hyprarch2/blob/master/assets/IMG_3279.png" width="300" height="300"/>
</div>

<div align="center">

[![Release](https://img.shields.io/badge/Latest_Release-v1.2.12-blue.svg)](https://github.com/g5ostXa/hyprarch2/releases/tag/v1.2.12)
</div>

## 📦 Sources
- [arch-wiki](https://wiki.archlinux.org)
- [dotfiles (ml4w)](https://github.com/mylinuxforwork/dotfiles)
- [hyprland wiki](https://wiki.hyprland.org)
- [wallpaper](https://github.com/g5ostXa/wallpaper)
- [sysctl](https://github.com/g5ostXa/sysctl)
- [archbase](https://github.com/g5ostXa/hyprarch2/blob/master/docs/archbase/arch-lvm-luks.md)

## ⚠️ Disclaimer
This repository is a personal project for experimenting with [hyprland](https://hyprland.org) and [archlinux](https://archlinux.org). It is based on an early version of[ml4w-dotfiles (v2.5)](https://github.com/mylinuxforwork/dotfiles) and tested on the master branch in a virtual machine.

The code is customized for my specific environment and may require adjustments to work on other systems. As this project is still in its early stages, it is not intended to work out of the box.

Contributions are welcome via PRs.


## ⚙️ Setup and installation
> [!IMPORTANT]
> - The installation process is divided in 2 main steps, both of which are essential. The first step is the installation of Arch-base (minimal) and the second step is the installation of [hyprland](https://hyprland.org) on top of arch.
> - If installing in virt-manager, please verify that **_3D acceleration_** is enabled in **_Video Virtio_** and the **_Listen type_** is set to **_None_** in **_Display Spice_**.
> - To install arch manually, please refer to the [arch-base install](https://github.com/g5ostXa/hyprarch2/blob/master/docs/archbase/arch-lvm-luks.md) guide. Alternatively, you can simply run [archinstall](https://github.com/archlinux/archinstall) from the archiso to install arch the easy way. 
> - Before installing [hyprarch2](https://github.com/g5ostXa/hyprarch2), please make sure that all needed dependencies are installed:
```
$ sudo pacman -S --needed --noconfirm wireless_tools dialog os-prober mtools dosfstools base-devel git reflector xdg-utils xdg-user-dirs gum figlet dnsmasq htop fastfetch vim openssh
```
- Then, clone the [hyprarch2](https://github.com/g5ostXa/hyprarch2) repository in the `~/Downloads` directory and run the [install script](https://github.com/g5ostXa/hyprarch2/blob/master/install.sh):
```
$ cd Downloads
$ git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```

## ➜ Hyprland
- Start [Hyprland](https://hyprland.org) from tty:
```
$ st4rtX
```

## ➜ Quick links
- Wallpaper and waybar engine documentation:
  * https://github.com/g5ostXa/hyprarch2/blob/master/docs/wallpaper-waybar/README.md
  
## ⌨️ Keybindings
- All available keybinds here:
  - https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/hypr/conf/keybindings.conf

- General keybinds:
  - `SUPER` + `RETURN` : Alacritty
  - `SUPER` + `B` : Firefox
  - `SUPER` + `CTRL` + `RETURN` : Rofi
  - `SUPER` + `CTRL` + `W` : Waypaper 
  - `SUPER` + `SHIFT` + `B` : Reload waybar 
  - `SUPER` + `CTRL` + `Q` : Wlogout
  - `SUPER` + `Q` : Killactive
  - `SUPER` + `E` : Nautilus
  - `SUPER` + `SHIFT` +`N` : Toggle hypridle
  - `SUPER` + `CTRL` + `M` : Exit hyprland
