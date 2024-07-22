<div align="center">
    <img src="https://user-images.githubusercontent.com/25181517/186884156-e63da389-f3e1-4dca-a6c1-d76e886ba22a.png" width="200" height="200"/>
</div>

<div align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Iosevka+Nerd+Font&weight=900&pause=1000&color=6791C9&background=0C0E0F00&center=true&vCenter=true&width=435&lines=Welcome to hyprarch2 !"/>
</div>

<div align="center">

By g5ostXa :ghost:
</div>

<div align="center">

[![Release](https://img.shields.io/badge/release-v0.2.3-blue.svg)](https://github.com/g5ostXa/hyprarch2/releases/tag/v0.2.3)
</div>

## 📦 Sources
- [arch-wiki](https://wiki.archlinux.org)
- [dotfiles (Stephan Raabe)](https://github.com/mylinuxforwork/dotfiles)
- [archbase (g5ostXa)](https://gist.github.com/g5ostXa/5f9255430996b9d77d6004d6d2308b4d)
- [hyprland wiki](https://wiki.hyprland.org)
- [hyprland github](https://github.com/hyprwm/Hyprland)

## ⚙️ Setup
> [!IMPORTANT]
> - Make sure to create new ssh key and add it to github before installing
> - If installing in virt-manager, please verify that `3D acceleration` is enabled in `Video Virtio` and the `Listen type` is set to `None` in `Display Spice`

## 💻 Installation
> [!NOTE]
> - [arch-lvm-luks.md](https://github.com/g5ostXa/hyprarch2/blob/master/docs/archbase/arch-lvm-luks.md) will guide you through installing Arch manually, or you can simply run `archinstall` from the archiso for a best effort automated Arch install 
> - After installing Arch, download the [Repo](https://github.com/g5ostXa/hyprarch2) in the `~/Downloads` directory and run the install script
```
$ cd Downloads
$ git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```

## ➜ Hyprland 
- Start [Hyprland](https://hyprland.org) from tty
```
$ Hyprland
```

## ⌨️ Some useful keybinds
- `SUPER` + `B` : Firefox
- `SUPER` + `RETURN` : Alacritty
- `SUPER` + `CTRL` + `RETURN` : Rofi 
- `SUPER` + `SHIFT` + `B` : Reload waybar 
- `SUPER` + `CTRL` + `Q` : Wlogout
- `SUPER` + `U` : Update package lists
- `SUPER` + `Q` : killactive
- `SUPER` + `CTRL` + `P` : Proton-pass
- `SUPER` + `E` : Thunar
- `SUPER` + `F` : Fullscreen
- `SUPER` + `T` : Togglefloating
