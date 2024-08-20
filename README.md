<div align="center">
    
<img src="https://github.com/g5ostXa/hyprarch2/blob/master/assets/hyprarch2.png" width="300" height="300"/>
</div>

<div align="center">

[![Release](https://img.shields.io/badge/Latest_Release-v1.0.4-blue.svg)](https://github.com/g5ostXa/hyprarch2/releases/tag/v1.0.4)
</div>

## 📦 Sources
- [arch-wiki](https://wiki.archlinux.org)
- [dotfiles (ml4w)](https://github.com/mylinuxforwork/dotfiles)
- [hyprland wiki](https://wiki.hyprland.org)
- [wallpaper](https://github.com/g5ostXa/wallpaper)
- [archbase](https://gist.github.com/g5ostXa/5f9255430996b9d77d6004d6d2308b4d)

## ⚙️ Setup and installation
> [!IMPORTANT]
> - The installation process is divided in 2 main steps, both of which are essential. The first step is the installation of Arch-base (minimal) and the second step is the installation of [hyprland](https://hyprland.org) on top of arch.
> - If installing in virt-manager, please verify that **_3D acceleration_** is enabled in **_Video Virtio_** and the **_Listen type_** is set to **_None_** in **_Display Spice_**.
> - To install arch manually, please refer to the [arch-base install](https://gist.github.com/g5ostXa/5f9255430996b9d77d6004d6d2308b4d) guide. Alternatively, you can simply run [archinstall](https://github.com/archlinux/archinstall) from the archiso to install arch the easy way. 
> - Before installing [hyprarch2](https://github.com/g5ostXa/hyprarch2), please make sure that all needed dependencies are installed:
```
$ sudo pacman -S --needed --noconfirm wireless_tools dialog os-prober mtools dosfstools base-devel git reflector xdg-utils xdg-user-dirs gum dnsmasq htop fastfetch vim openssh
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
$ Hyprland
```

## ⌨️ Some useful keybinds
- `SUPER` + `B` : Firefox
- `SUPER` + `RETURN` : Alacritty
- `SUPER` + `CTRL` + `RETURN` : Rofi 
- `SUPER` + `SHIFT` + `B` : Reload waybar 
- `SUPER` + `CTRL` + `Q` : Wlogout
- `SUPER` + `Q` : Killactive
- `SUPER` + `E` : Nautilus
- `SUPER` + `F` : Fullscreen
- `SUPER` + `T` : Togglefloating
