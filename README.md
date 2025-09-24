<div align="center">

<img src="/assets/logos/IMG_3279.png" width="300" height="300"/>

[![Release](https://img.shields.io/badge/hyprarch2-v1.3.6-cyan.svg)](https://github.com/g5ostXa/hyprarch2/)
[![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)](https://hyprland.org/)
[![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)](https://archlinux.org/)

</div>

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

## ⚙️ `Setup and installation`
<h4> 🗒️ Prerequisites:</h4>

If you have not done so already, you need a fresh, minimal [`Archlinux`](https://archlinux.org) installation.

> [!IMPORTANT]
> If installing on bare metal, do not forget to _backup your current installation_ before proceeding.
> - Installing in `virt-manager` requires you to:
> - Enable `[3D acceleration]` in `[Video Virtio]`.
> - Set `[Listen type]` to `[None]` in `[Display Spice]`.
> - Set the `virtual machine environment` in [`hyprland.conf`](/dotfiles/hypr/hyprland.conf).

Within your new [`Arch`](https://archlinux.org/) install, make sure all needed dependencies are installed for [`hyprarch2`](/):
```ruby
$ sudo pacman -S --needed --noconfirm go git reflector xdg-utils xdg-user-dirs gum figlet vim grub efibootmgr networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers
```

<h4> 🖱️ Usage:</h4>

First, clone [`hyprarch2`](/) in `~/Downloads/`:
```bash
$ cd ~/Downloads && git clone --depth 1 https://github.com/g5ostXa/hyprarch2.git
```

> [!CAUTION]
> - [`hyprarch2`](/) has a [`new installer`](https://github.com/g5ostXa/h2install) which is written in `golang`.
> - The installer is still very unstable, even though it works fine for me at the momment.
> - I recommend running in `--dry-run` mode first.

To do that, edit [`install.sh`](src/install.sh) and add `--dry-run` when running the installer like shown below:
```bash
func_main() {
	src_check && src_copy && target_check

	if [ -f "/etc/issue" ]; then
		sudo chown root:root /etc/issue
	else
		echo -e "${YELLOW}Failed to copy issue to /etc...${RC}"
		sleep 1
	fi

	cd "$HOME/Downloads" && git clone --depth=1 https://github.com/g5ostXa/h2install.git
	cd h2install && rm -rf .git/ && go mod tidy && go build -o h2installer && ./h2installer --dry-run

}
```

Then, run [`install.sh`](src/install.sh) from `~/Downlaods/hyprarch2/src/`:
```bash
$ cd hyprarch2/src && ./install.sh
```

After the installation is completed, use the following to start [`hyprland`](https://hyprland.org) from tty:
```ruby
$ uwsm start hyprland
```

## 📦 `Main apps`
- Terminal: `alacritty`
- Shell: `fish` + `starship`
- Browser: `firefox`
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

## 🖥️ `Monitor`
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

## ⌨️ `Keybinds`
[` ➜ All keybindings here`](/dotfiles/hypr/conf/keybindings.conf)

- `⌨️` `SUPER` + `RETURN` : Alacritty
- `⌨️` `SUPER` + `B` : Firefox
- `⌨️` `SUPER` + `CTRL` + `RETURN` : Rofi
- `⌨️` `SUPER` + `W` : Waypaper 
- `⌨️` `SUPER` + `SHIFT` + `B` : Reload waybar 
- `⌨️` `SUPER` + `CTRL` + `Q` : Wlogout
- `⌨️` `SUPER` + `Q` : Killactive
- `⌨️` `SUPER` + `E` : Nautilus
- `⌨️` `SUPER` + `SHIFT` +`N` : Toggle hypridle
- `⌨️` `SUPER` + `CTRL` +`M` : Kill hyprland

## 📸 `Screenshots`
<img src="/assets/screenshots/h2sc1.png"/>
<img src="/assets/screenshots/h2sc2.png"/>
<img src="/assets/screenshots/h2sc3.png"/>
<img src="/assets/screenshots/h2sc4.png"/>
