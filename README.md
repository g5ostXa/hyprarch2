<div align="center">
<img src="/assets/IMG_3279.png" width="300" height="300"/>
</div>

<div align="center">

[![Release](https://img.shields.io/badge/Latest_Release-v1.3-blue.svg)](/releases/tag/v1.3)
</div>

## ⚠️ `What you need to know...`
> [!WARNING]
> - This repository is basically just a **heavily** modified clone of [`ml4w-dotfiles (v2.5)`](https://github.com/mylinuxforwork/dotfiles).
> - Requires a strong knowledge base of [`archlinux`](https://archlinux.org), [`💧hyprland`](https://hyprland.org), `bash-scripting` and `git`, especially if you're on bare metal.
> - This project was recently made public and there is still alot of things to do to make it more user-friendly.
> - For example, by default, `ufw`, [`sysctl`](https://github.com.g5ostXa/sysctl) and `dnsmasq` are configured automatically. I'm working on [`the code`](src/.install/secure.sh) to make them optional and it will be fixed soon.
> - Make sure the repo lives in `~/Downloads/` and [`install.sh`](/install.sh) is ran from `~/Downloads/hyprarch2`
> - Do not forget to backup your current system before proceeding.

## ⚙️ `Setup and installation`
> [!IMPORTANT]
> - Before you start, take a look: [` ➜ screenshots`](https://github.com/g5ostXa/hyprarch2#-screenshots)
> - The installation process is divided in 2 main steps, both of which are essential. The first step is the installation of Arch-base (minimal) and the second step is the installation of [`💧hyprland`](https://hyprland.org) on top of arch.
> - If installing in virt-manager, please verify that **_3D acceleration_** is enabled in **_Video Virtio_** and the **_Listen type_** is set to **_None_** in **_Display Spice_**.
> - To install arch manually, please refer to the [`archlinux install guide`](https://wiki.archlinux.org/title/Installation_guide) or, simply run [`archinstall`](https://github.com/archlinux/archinstall) from the archiso to install arch the easy way.

Before installing [`hyprarch2`](/), please make sure all needed dependencies are installed:
```ruby
$ sudo pacman -S --needed --noconfirm wireless_tools dialog os-prober mtools dosfstools base-devel git reflector xdg-utils xdg-user-dirs gum figlet dnsmasq vim openssh
```

 You can now clone the [`hyprarch2`](/) repository in the `~/Downloads` directory and run the [`install.sh script`](/install.sh):
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```

After the installation is completed, use the following to start [`💧hyprland`](https://hyprland.org) from tty:
```ruby
$ uwsm start hyprland
```

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
For more detailed instructions for configuring your monitor on hyprland: [` ➜ Click me!`](https://wiki.hyprland.org/Configuring/Monitors)

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

## 🌐 `Quick links`
**Wallpaper engine documentation:**\
[` ➜ docs/wallpaper-waybar/README.md`](/docs/wallpaper-waybar/README.md)

**Wallpaper source**\
[` ➜ g5ostXa/wallpaper`](https://github.com/g5ostXa/wallpaper)

**Sysctl config source**\
[` ➜ g5ostXa/sysctl`](https://github.com/g5ostXa/sysctl)

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
<img src="/docs/screenshots/screenshot-20241201-164323.png"/>
<img src="/docs/screenshots/screenshot-20241201-165449.png"/>
<img src="/docs/screenshots/screenshot-20241201-214501.png"/>
