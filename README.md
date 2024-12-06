<div align="center">
<img src="/assets/logos/IMG_3279.png" width="300" height="300"/>
</div>

<div align="center">

![Release](https://img.shields.io/badge/hyprarch2-v1.3.2-cyan.svg)
![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)
![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)
</div>

## ⚠️ `Disclaimer`
> [!WARNING]
> - This repository is basically just a **heavily** modified clone of [`ml4w-dotfiles (v2.5)`](https://github.com/mylinuxforwork/dotfiles).
> - Requires a strong knowledge base of [`archlinux`](https://archlinux.org), [`💧hyprland`](https://hyprland.org), `bash-scripting` and `git`, especially if you're on bare metal.
> - This project was recently made public and there is still alot of things to do to make it more user-friendly.

- **What's to expect**:
  - The install might fail on some systems.
  - Some files and directories might get deleted upon installing (That's why a fresh minimal arch base install is recommended)
  - By default, for the time being,  the installer will install all packages in `/src/packages/`.
  - You can expect some significant improvements in the near future for this project. 

## ⚙️ `Setup and installation`
> [!IMPORTANT]
> - Before you start, take a look: [` ➜ screenshots`](https://github.com/g5ostXa/hyprarch2#-screenshots)
> - If installing [`arch`](https://archlinux.org/) (base) on bare metal, make sure you backup your current install before proceeding.
> - If installing [`arch`](https://archlinux.org/) (base) in virt-manager, please enable `[3D acceleration]` in `[Video Virtio]` and set `[Listen type]` to `[None]` in `[Display Spice]`.
> - Also if using in a VM, `SSH` is a great way to install arch from the comfort of your terminal.
> - To install arch manually, please refer to the [`archlinux install guide`](https://wiki.archlinux.org/title/Installation_guide) or, simply run [`archinstall`](https://github.com/archlinux/archinstall) from the archiso to install arch the easy way.

Within your new [`arch`](https://archlinux.org/) install, make sure all needed dependencies are installed for [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm wireless_tools dialog os-prober mtools dosfstools base-devel git reflector xdg-utils xdg-user-dirs gum figlet vim openssh
```

 Then, clone [`hyprarch2`](/) in `~/Downloads/` and run [`install.sh`](/install.sh) from `~/Downloads/hyprarch2/`:
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```

After the installation is completed, use the following to start [`💧hyprland`](https://hyprland.org) from tty:
```ruby
$ uwsm start hyprland
```

## 📦 `Main apps`
- Terminal: `Alacritty`
- Shell: `Fish` + `Starship`
- Browser: `Firefox`
- App Launcher: `Rofi-wayland`
- Wallpaper front end: `Waypaper`
- Wallpaper back end: `Swww`
- Logout menu: `Wlogout`
- Bar: `Waybar`
- File Manager: `Nautilus`
- Theming: `GTK` / `Python-pywal`
- GUI Theme App: `Lxappearance`
- Current GTK Theme: `Tokyonight-gtk-theme-git`
- Current Cursor Theme: `Bibata-Cursor-theme`
- Editors: `Neovim` / `Vscodium` / `Obsidian`
- AUR helper: (User chooses between `Paru-bin` and `Yay-bin` during install)

## ⌨️ `Keybinds`
**All available keybinds here:**\
[` ➜ dotfiles/hypr/conf/keybindings.conf`](/dotfiles/hypr/conf/keybindings.conf)

**General keybinds:**
- `⌨️` `SUPER` + `RETURN` : Alacritty
- `⌨️` `SUPER` + `B` : Firefox
- `⌨️` `SUPER` + `CTRL` + `RETURN` : Rofi
- `⌨️` `SUPER` + `CTRL` + `W` : Waypaper 
- `⌨️` `SUPER` + `SHIFT` + `B` : Reload waybar 
- `⌨️` `SUPER` + `CTRL` + `Q` : Wlogout
- `⌨️` `SUPER` + `Q` : Killactive
- `⌨️` `SUPER` + `E` : Nautilus
- `⌨️` `SUPER` + `SHIFT` +`N` : Toggle hypridle

## 🖥️ `Monitor`
> [!TIP]
> You have two options if you want a properly configured display:
> - Either you set `Automatic display configuration` 
> - Either you configure your own screen resolution.

[` ➜ dotfiles/hypr/conf/monitor.conf`](/dotfiles/hypr/conf/monitor.conf):
```md
# -------------------------------------------------------------------------------------
# Monitor Setup
# See https://wiki.hyprland.org/Configuring/Monitors/
# -------------------------------------------------------------------------------------

# Uncomment <monitor=,preferred,auto,1> and remove g5ostXa'a configuration if you want to use Automatic display configuration.

# Automatic display configuration:
# monitor=,preferred,auto,1

# g5ostXa's configuration:
monitor=eDP-1,1920x1080@120.035,0x0,1
monitor=HDMI-A-1,2048x1080@60.00,auto,1
# monitor=Virtual-1,2048x1080@60.00,0x0,1
```
For more detailed instructions about how to configure your monitor on hyprland: [` ➜ 🖥️ Hyprland / Monitors`](https://wiki.hyprland.org/Configuring/Monitors)

## 🌐 `Quick links`
**Wallpaper engine documentation:**\
[` ➜ docs/wallpaper-waybar/README.md`](/docs/wallpaper-waybar/README.md)

**Wallpaper source:**\
[` ➜ g5ostXa/wallpaper`](https://github.com/g5ostXa/wallpaper)

**Packages lists:**\
[` ➜ Pacman`](/src/packages/pacman_packages.txt)
[` ➜ AUR`](/src/packages/aur_packages.txt)

## :octocat: `Contributions`
If you like my project and want to contribute, feel free to submit a PR and give it a ⭐ !
```md
   __                              __   ___
  / /  __ _____  _______ _________/ /  |_  |
 / _ \/ // / _ \/ __/ _ `/ __/ __/ _ \/ __/
/_//_/\_, / .__/_/  \_,_/_/  \__/_//_/____/
     /___/_/

[hypr@arch~]$ git clone https://github.com/g5ostXa/hyprarch2
```

## 📸 `Screenshots`
<img src="/docs/screenshots/screenshot-20241206-122335.png"/>
<img src="/docs/screenshots/screenshot-20241201-164323.png"/>
<img src="/docs/screenshots/screenshot-20241201-165449.png"/>
<img src="/docs/screenshots/screenshot-20241204-051902.png"/>
