<div align="center">
  <img src="/assets/logos/hyprarch2-sx234.png" width="525" height="525"/>
    <p align="center">
         <img src="https://img.shields.io/github/actions/workflow/status/g5ostXa/hyprarch2/main.yml?style=flat&label=Build&color=B4BEFE&logo=github&logoColor=D9E0EE&labelColor=242438">
         <img src="https://img.shields.io/github/stars/g5ostXa/hyprarch2?style=flat&logo=github&color=B4BEFE&logoColor=D9E0EE&labelColor=242438">
      <a href="https://github.com/g5ostXa/hyprarch2">
         <img src="https://img.shields.io/github/repo-size/g5ostXa/hyprarch2?style=flat&color=B4BEFE&label=SIZE&logo=googledrive&logoColor=D9E0EE&labelColor=242438">
      </a>
   </p>
</div>
<br>



## :octocat: `Support`
If you like my project, feel free to  buy me a coffee, or simply give it a ⭐ !
```neon
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
> - Alot of it is very specific to me so if you're unfamiliar with [`hyprland`](https://hyprland.org), I suggest you try [`mylinuxforwork's dotfiles`](https://github.com/mylinuxforwork/dotfiles) instead.
> - This is NOT compatible with a different distro than upstream [`Arch`](https://archlinux.org).
> - If installing on bare metal, do not forget to **backup your current installation** before proceeding.
<br>

🗒️ **Prerequisites**:
<br>

If you have not done so already, you need to install [`Archlinux`](https://archlinux.org).\
It is recommended to have a minimal, up-to-date arch-base installation.

In your new [`Arch`](https://archlinux.org/) install, make sure **all needed dependencies** are installed before installing [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm git reflector xdg-utils xdg-user-dirs vim networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers
```
<br>

🖱️ **Usage**:
<br>

If you haven't done so already, create your user directories including `~/.config`:
```bash
$ xdg-user-dirs-update && mkdir -p "$HOME/.config"
```
<br>

Make sure your current directory is `$HOME` and download the project:
```bash
$ cd "$HOME" && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
```
<br>

At this point, you may want to change a few things before installing. \
If using a `VM`, uncomment the following in `~/hyprarch2/dotfiles/hypr/hyprland.conf`:
```md
# source = ~/.config/hypr/conf/kvm.conf
```
> [!TIP]
> I usually set my monitor(s) before installing, but it's not required.
> - See [`Monitor(s)`](https://github.com/g5ostXa/hyprarch2#%EF%B8%8F-monitors) section to learn more
<br>

Once you're all set, run [`install.sh`](src/install.sh) from `~/hyprarch2/src/`:
```bash
$ cd "$HOME/hyprarch2/src && ./install.sh
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
- Terminal: `ghostty`
- Browser: `firefox-nightly`
- App Launcher: `rofi`
- Wallpaper front end: `waypaper-git`
- Wallpaper back end: `awww`
- Logout menu: `wlogout`
- Bar: `waybar`
- File Manager: `nautilus`
- Theming: `pywal16` / `GTK`
- Editor: `neovim`

## ⌨️ `Keybinds`
[` ➜ See all available keybindings here`](/dotfiles/hypr/conf/keybindings.conf)

General keybinds:
- `SUPER` + `RETURN` : ghostty
- `SUPER` + `B` : firefox-nightly
- `SUPER` + `CTRL` + `RETURN` : rofi
- `SUPER` + `W` : waypaper 
- `SUPER` + `SHIFT` + `B` : reload waybar 
- `SUPER` + `CTRL` + `Q` : logout
- `SUPER` + `Q` : kill active window
- `SUPER` + `SHIFT` +`N` : toggle hypridle
- `SUPER` + `CTRL` +`M` : kill hyprland

## 📸 `Screenshots`
<img src="/assets/screenshots/h2sc1.png"/>
<img src="/assets/screenshots/h2sc2.png"/>
<img src="/assets/screenshots/h2sc3.png"/>
<img src="/assets/screenshots/h2sc4.png"/>

