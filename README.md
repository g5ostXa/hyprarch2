<div align="center">

<img src="/assets/logos/hyprarch2-sx234.png" width="525" height="525"/>

[![Release](https://img.shields.io/badge/hyprarch2-v1.3.13-cyan.svg)](https://github.com/g5ostXa/hyprarch2/)
[![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)](https://hyprland.org/)
[![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)](https://archlinux.org/)

</div>

## :octocat: `Support`
If you like my project, feel free to give it a ⭐ !
```md
   __                              __   ___
  / /  __ _____  _______ _________/ /  |_  |
 / _ \/ // / _ \/ __/ _ `/ __/ __/ _ \/ __/
/_//_/\_, / .__/_/  \_,_/_/  \__/_//_/____/
     /___/_/

[hypr@arch~]$ git clone https://github.com/g5ostXa/hyprarch2.git
```
<br>

## ⚙️ `Setup and installation`
> [!WARNING]
> Before you begin... 
> - My dotfiles are meant to be installed via the installation process down below.
> - Copying dotfiles in your `~/.config/` without using the [`installer`](/src/install.sh) is not recommended.
> - This is NOT compatible with a different distro than upstream [`Arch`](https://archlinux.org).
> - If installing on bare metal, do not forget to **backup your current installation** before proceeding.
<br>

🗒️ **Prerequisites**:
<br>

If you have not done so already, you need to install [`Archlinux`](https://archlinux.org).\
It is recommended to have a minimal, up-to-date arch-base installation.

In your new [`Arch`](https://archlinux.org/) install, make sure **all needed dependencies** are installed before installing [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm go git reflector xdg-utils xdg-user-dirs gum figlet vim networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers
```
<br>

🖱️ **Usage**:
<br>

If you haven't done so already, create your user directories including `~/Downloads`:
```bash
$ xdg-user-dirs-update
```
<br>

If `~/Downloads` got deleted somehow, add the `--force` option:
```bash
$ xdg-user-dirs-update --force
```
<br>

Change directory to `~/Downloads/` and clone the project:
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
```
<br>

At this point, you may want to change a few things before installing. \
If using a `VM`, uncomment the following in `~/Downloads/hyprarch2/dotfiles/hypr/hyprland.conf`:
```md
# source = ~/.config/hypr/conf/kvm.conf
```
> [!TIP]
> I usually set my monitor(s) before installing, but it's not required.
> - See [`Monitor(s)`](https://github.com/g5ostXa/hyprarch2#%EF%B8%8F-monitors) section to learn more
<br>

Once you're all set, run [`install.sh`](src/install.sh) from `~/Downloads/hyprarch2/src/`:
```bash
$ cd hyprarch2/src && ./install.sh
```
<br>

## 💧 `Start Hyprland`
Use the following command to start [`hyprland`](https://wiki.hyprland.org):
```bash
$ uwsm start hyprland
```
<br>

If you get an error, don't worry, you simply need to reload your [`hyprland`](https://hyprland.org) config:
```bash
$ hyprctl reload
```
<br>

Alternatively, kill [`hyprland`](https://hyprland.org) and reboot, in case you didn't do so after installing.
- From hyprland session:
```bash
$ uwsm stop
```
- From TTY:
```bash
$ systemctl reboot
```

<br>

## 🖥️ `Monitor(s)`
To configure your monitor(s), you need to edit [`monitor.conf`](/dotfiles/hypr/conf/monitor.conf) \
Here's an example configuration:
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
<br>

Optionally, you can set you monitor(s) as env variables for extra compatibility. \
Edit [`environment.conf`](/dotfiles/hypr/conf/environment.conf) and change the values of the following env variables to match your monitor(s):
```md
# Monitor(s)
env = PRIMARY_MONITOR,<Monitor-1-name>
env = SECONDARY_MONITOR,<Monitor-2-name>
```
<br>

Visit [`🖥 Hyprland Wiki`](https://wiki.hyprland.org/Configuring/Monitors) to learn more about configuring your monitor(s)
<br>

## 📦 `Main apps`
- Terminal: `Alacritty`
- Browser: `Firefox-Nightly`
- App Launcher: `Rofi`
- Wallpaper front end: `Waypaper`
- Wallpaper back end: `Swww`
- Logout menu: `Wlogout`
- Bar: `Waybar`
- File Manager: `Nautilus`
- Theming: `Pywal16` / `GTK`
- Editor: `Neovim`

## ⌨️ `Keybinds`
[` ➜ See all available keybindings here`](/dotfiles/hypr/conf/keybindings.conf)

General keybinds:
- `SUPER` + `RETURN` : Alacritty
- `SUPER` + `B` : Firefox-Nightly
- `SUPER` + `CTRL` + `RETURN` : Rofi
- `SUPER` + `W` : Waypaper 
- `SUPER` + `SHIFT` + `B` : Reload Waybar 
- `SUPER` + `CTRL` + `Q` : Wlogout
- `SUPER` + `Q` : Killactive
- `SUPER` + `E` : Nautilus
- `SUPER` + `SHIFT` +`N` : Toggle Hypridle
- `SUPER` + `CTRL` +`M` : Kill Hyprland

## 📸 `Screenshots`
<img src="/assets/screenshots/h2sc1.png"/>
<img src="/assets/screenshots/h2sc2.png"/>
<img src="/assets/screenshots/h2sc3.png"/>
<img src="/assets/screenshots/h2sc4.png"/>
<img src="/assets/screenshots/h2sc5.png"/>
