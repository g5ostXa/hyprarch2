<div align="center">

<img src="/assets/logos/hyprarch2-sx234.png" width="525" height="525"/>

[![Release](https://img.shields.io/badge/hyprarch2-v1.3.10-cyan.svg)](https://github.com/g5ostXa/hyprarch2/)
[![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)](https://hyprland.org/)
[![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)](https://archlinux.org/)

</div>

### :octocat: `Support`
If you like my project, feel free to give it a star ⭐ !
```md
   __                              __   ___
  / /  __ _____  _______ _________/ /  |_  |
 / _ \/ // / _ \/ __/ _ `/ __/ __/ _ \/ __/
/_//_/\_, / .__/_/  \_,_/_/  \__/_//_/____/
     /___/_/

[hypr@arch~]$ git clone https://github.com/g5ostXa/hyprarch2.git
```
> [!WARNING]
> Before you begin...
> - These dotfiles may not work if not installing via [`install.sh`](/src/install.sh). 
> - The installer installs [`dotfiles/`](/dotfiles) in your home directroy and create symlinks that point to `~/.config/`
> - We are currently working on renaming `~/dotfiles/` to `~/.config/`, but for now we still use symlinks.
> - This is NOT compatible with a different distro than upstream [`Archlinux`](https://archlinux.org).

#### 🗒️ Prerequisites:
If you have not done so already, you need to install [`Archlinux`](https://archlinux.org).\
It is recommended to have a minimal, up-to-date arch-base installation.

If installing on bare metal, do not forget to _backup your current installation_ before proceeding.

> [!IMPORTANT]
> Using virt-manager requires you to:
  - Enable `[3D acceleration]` in `[Video Virtio]`.
  - Set `[Listen type]` to `[None]` in `[Display Spice]`.
  - Set the `virtual machine environment` in [`hyprland.conf`](/dotfiles/hypr/hyprland.conf).

Within your new [`Archlinux`](https://archlinux.org/) install, make sure all needed dependencies are installed _**before**_ installing [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm go git reflector xdg-utils xdg-user-dirs gum figlet vim networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers
```

#### 🖱️ Usage:
First, clone [`hyprarch2`](/) in `~/Downloads/`:
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
```

Then, run [`install.sh`](src/install.sh) from `~/Downloads/hyprarch2/src/`:
```bash
$ cd hyprarch2/src && ./install.sh
```

After the installation is completed, use the following to start [`hyprland`](https://hyprland.org) from tty:
```ruby
$ uwsm start hyprland
```

### 📦 `Main apps`
- Terminal: `alacritty`
- Shell: `fish` + `starship`
- Browser: `firefox-nightly`
- App Launcher: `rofi`
- Wallpaper front end: `waypaper`
- Wallpaper back end: `swww`
- Logout menu: `wlogout`
- Bar: `waybar`
- File Manager: `nautilus`
- Theming: `GTK` / `python-pywal16`
- GUI Theme App: `nwg-look`
- Current GTK Theme: `tokyonight-gtk-theme-git`
- Current Cursor Theme: `bibata-cursor-theme`
- Editors: `neovim` / `vscodium`

### 🖥️ `Monitor`
> [!TIP]
> - To configure your monitor(s), you need to edit [`dotfiles/hypr/conf/monitor.conf`](/dotfiles/hypr/conf/monitor.conf)

Here's what a manual configuration should look like:
```md
# -------------------------------------------------------------------------------------
# Monitor Setup
# -------------------------------------------------------------------------------------

# General:
monitor=eDP-1,1920x1080@120.035,0x0,1
monitor=HDMI-A-1,2048x1080@60.00,auto,1

# Virtual machine:
monitor=Virtual-1,2048x1080@60.00,0x0,1
```
For more detailed instructions about how to configure your monitor(s): [`🖥 Hyprland Wiki`](https://wiki.hyprland.org/Configuring/Monitors)

### ⌨️ `Keybinds`
General keybinds:
- `⌨️` `SUPER` + `RETURN` : Alacritty
- `⌨️` `SUPER` + `B` : Firefox-nightly
- `⌨️` `SUPER` + `CTRL` + `RETURN` : Rofi
- `⌨️` `SUPER` + `W` : Waypaper 
- `⌨️` `SUPER` + `SHIFT` + `B` : Reload waybar 
- `⌨️` `SUPER` + `CTRL` + `Q` : Wlogout
- `⌨️` `SUPER` + `Q` : Killactive
- `⌨️` `SUPER` + `E` : Nautilus
- `⌨️` `SUPER` + `SHIFT` +`N` : Toggle hypridle
- `⌨️` `SUPER` + `CTRL` +`M` : Kill hyprland

[` ➜ See all available keybindings here`](/dotfiles/hypr/conf/keybindings.conf)

### 📸 `Screenshots`
<img src="/assets/screenshots/h2sc5.png"/>
<img src="/assets/screenshots/h2sc6.png"/>
<img src="/assets/screenshots/h2sc2.png"/>
<img src="/assets/screenshots/h2sc3.png"/>
<img src="/assets/screenshots/h2sc4.png"/>
