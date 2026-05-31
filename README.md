<div align="center">
  <img src="/assets/logos/hyprarch2-sx234.png" width="525" height="525"/>
    <p align="center">
         <img src="https://img.shields.io/github/actions/workflow/status/g5ostXa/hyprarch2/main.yml?style=flat&label=Build&color=B4BEFE&logo=github&logoColor=D9E0EE&labelColor=242438">
         <a href="https://github.com/g5ostXa/hyprarch2">
         <img src="https://img.shields.io/github/repo-size/g5ostXa/hyprarch2?style=flat&color=B4BEFE&label=SIZE&logo=googledrive&logoColor=D9E0EE&labelColor=242438">
      </a>
   </p>
</div>
<br>

> [!NOTE]
> About hyprland migrating to lua...
> - We are currently working on the transition, and the changes are done in `integrate-lua` branch.
> - The config currently works in `integrate-lua` branch, but remains ioncomplete.
> - We'll do our best to ship the new configuration as soon as possible.

## :octocat: `Support`
If you like my project, feel free to give it a ⭐ !
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
> - A lot of it is very specific to me so if you're unfamiliar with [`hyprland`](https://hypr.land), I suggest you try [`mylinuxforwork's dotfiles`](https://github.com/mylinuxforwork/dotfiles) instead.
> - This project only works with upstream [`Arch`](https://archlinux.org).
> - If installing on bare metal, do not forget to **backup your current installation** before proceeding.
<br>

🗒️ **Prerequisites**:
<br>

If you have not done so already, you need to install [`Archlinux`](https://archlinux.org).\
It is recommended to have a minimal, up-to-date arch-base installation.

In your new [`Arch`](https://archlinux.org/) install, make sure **all needed dependencies** are installed before installing [`hyprarch2`](https://github.com/g5ostXa/hyprarch2):
```ruby
$ sudo pacman -S --needed --noconfirm go git reflector xdg-utils xdg-user-dirs vim networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers
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
$ cd "$HOME/hyprarch2/src" && ./install.sh
```
<br>

## 💧 `Start Hyprland`
Use the following command to start [`hyprland`](https://wiki.hypr.land):
```bash
$ uwsm start hyprland
```
<br>

If you get an error, don't worry, you simply need to reload your [`hyprland`](https://hypr.land) config:
```bash
$ hyprctl reload
```
<br>

Alternatively, kill [`hyprland`](https://hypr.land) and reboot, in case you haven't done so after installing.
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
To configure your monitor(s), you need to edit [`monitor.conf`](/dotfiles/hypr/conf/monitor.lua) \
Here's an example configuration:
```lua
--------------------
----- Monitors -----
--------------------

hl.monitor({
	output   = "",
	mode     = "preferred",
	position = "auto",
	scale    = "1",
})

-- Examples:

-- hl.monitor({
--    	output    = "eDP-1",
--    	mode      = "1920x1080@120.035",
--    	position  = "2048x0",
--    	scale     = "1",
--})
```
<br>

Optionally, you can set your monitor(s) as env variables for extra compatibility. \
Edit [`environment.conf`](/dotfiles/hypr/conf/environment.lua) and change the values of the following env variables to match your monitor(s):
```lua
-- Monitor(s):
hl.env("PRIMARY_MONITOR", "eDP-1")
```
<br>

Visit [`🖥 Hyprland Wiki`](https://wiki.hypr.land/Configuring/Basics/Monitors/) to learn more about configuring your monitor(s)
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
- `SUPER` + `SHIFT` + `N` : toggle hypridle
- `SUPER` + `CTRL` + `M` : kill hyprland

## 📸 `Screenshots`
<img src="/assets/screenshots/h2sc1.png"/>
<img src="/assets/screenshots/h2sc2.png"/>
<img src="/assets/screenshots/h2sc3.png"/>
<img src="/assets/screenshots/h2sc4.png"/>
<img src="/assets/screenshots/h2sc5.png"/>
<img src="/assets/screenshots/h2sc6.png"/>