<div align="center">
<img src="/assets/logos/IMG_3279.png" width="300" height="300"/>
</div>

<div align="center">

![Release](https://img.shields.io/badge/hyprarch2-v1.3.3-cyan.svg)
![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)
![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)
</div>

## ⚠ `Disclaimer`
> [!WARNING]
> - This repository is basically just a **heavily** modified clone of [`ml4w-dotfiles (v2.5)`](https://github.com/mylinuxforwork/dotfiles).
> - Requires a strong knowledge base of [`Archlinux`](https://archlinux.org), [`hyprland`](https://hyprland.org), `bash-scripting` and `git`, especially if you're on bare metal.
> - This project was recently made public and there is still alot of things to do to make it more user-friendly.

**What you need to consider:**

For me, the installer works just fine both on my two intel laptops and inside a VM.\
But because there's still so much to fix;
- The installation might fail on _some systems_.
- For the time being, the installer will install all packages in [`src/packages/`](/src/packages/) by default.
- Some files and directories might get deleted upon installing.
- A fresh minimal arch base install is recommended for this project.

**What you can expect for the future:**

You can expect some significant improvements for this project.\
Here's a quick summary:
- The integration of a customizable [`Archlinux`](https://archlinux.org) install script.
- A lot of packages will be stripped out so you don't get a bloated install.
- The user will be able to choose exactly what to install.
- A much more enjoyable and reliable installation process.
- Availability to a wider range of users.

So, with that out of the way, happy install!\
Before you begin, you may preview [` ➜ screenshots`](https://github.com/g5ostXa/hyprarch2#-screenshots)

## ⚙️ `Setup and installation`
**Prerequisites:**\
If you have not done so already, you need a fresh minimal [`Archlinux`](https://archlinux.org) installation.\
If you want to use a different distro, which is totally fine, go ahead and install [`Archlinux`](https://archlinux.org) anyway.

To install [`Arch`](https://archlinux.org) manually, refer to the [`Arch install guide`](https://wiki.archlinux.org/title/Installation_guide) or, run [`archinstall`](https://github.com/archlinux/archinstall) from the `archiso` to install [`Arch`](https://archlinux.org) the easy way.
> [!IMPORTANT]
> - If installing on bare metal, do not forget to _backup your current installation_ before proceeding.
> - Installing in `virt-manager` requires you to:
>   - Enable `[3D acceleration]` in `[Video Virtio]` and set `[Listen type]` to `[None]` in `[Display Spice]`.
>   - Set the `virtual machine environment` in [`hyprland.conf`](/dotfiles/hypr/hyprland.conf).

**Usage:**\
Within your new [`Arch`](https://archlinux.org/) install, make sure all needed dependencies are installed for [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm wireless_tools dialog os-prober mtools dosfstools base-devel git reflector xdg-utils xdg-user-dirs gum figlet vim openssh
```

 Then, clone [`hyprarch2`](/) in `~/Downloads/` and run [`install.sh`](/install.sh) from `~/Downloads/hyprarch2/`:
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```

After the installation is completed, use the following to start [`hyprland`](https://hyprland.org) from tty:
```ruby
$ uwsm start hyprland
```

## 📦 `Main apps`
- Terminal: `alacritty`
- Shell: `fish` + `starship`
- Browser: `firefox`
- App Launcher: `rofi-wayland`
- Wallpaper front end: `waypaper`
- Wallpaper back end: `swww`
- Logout menu: `wlogout`
- Bar: `waybar`
- File Manager: `nautilus`
- Theming: `GTK` / `python-pywal`
- GUI Theme App: `lxappearance`
- Current GTK Theme: `tokyonight-gtk-theme-git`
- Current Cursor Theme: `bibata-cursor-theme`
- Editors: `neovim` / `vscodium` / `obsidian`
- AUR helper: User chooses between `paru-bin` and `yay-bin` during install.

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
- `⌨️` `SUPER` + `CTRL` +`M` : Kill hyprland

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
For more detailed instructions about how to configure your monitor on hyprland: [` ➜ 🖥️ Hyprland Wiki`](https://wiki.hyprland.org/Configuring/Monitors)

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
