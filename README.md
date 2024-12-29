<div align="center">
<img src="/assets/logos/IMG_3279.png" width="300" height="300"/>
</div>

<div align="center">

[![Release](https://img.shields.io/badge/hyprarch2-v1.3.3-cyan.svg)](https://github.com/g5ostXa/hyprarch2/)
[![Hyprland](https://img.shields.io/badge/Hyprland-%236A0DAD?&logo=hyprland&logoColor=white)](https://hyprland.org/)
[![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=6A0DAD)](https://archlinux.org/)
</div>

## ⚠ `Disclaimer`
> [!WARNING]
> - [`Hyprland`](https://wiki.hyprland.org/) and [`Archlinux`](https://wiki.archlinux.org/) are not meant for beginners!
> - It is **strongly** advised that you fully read and understand the [`documentation`](https://wiki.hyprland.org/Getting-Started/Installation/) before installing.
> - This project is based on [`ml4w-dotfiles`](https://github.com/mylinuxforwork/dotfiles), which can be found on the [`AUR`](https://aur.archlinux.org).

**What you need to consider:**

- Many things still need improvements, as this project was recently made public.
- Tested on dell hardware with intel processors and in KVM / qemu virtual machines, which works just fine.
- Not tested on AMD processors or with NVIDIA drivers.
- Before intalling, take a look at the [`packages`](/src/packages/) lists, and edit them to remove what you don't want or add extra packages.
> [!CAUTION]
> - Removing packages from the lists might break things, especially the AUR packages.

**What you can expect for the future:**

You can expect some significant improvements for this project.\
Here's a quick summary:
- The integration of a customizable [`Archlinux`](https://archlinux.org) install script.
- A lot of packages will be stripped out so you don't get a bloated install.
- The user will be able to choose exactly what to install.
- A much more enjoyable and reliable installation process.
- Availability to a wider range of users.

## ⚙️ `Setup and installation`
**Prerequisites:**\
If you have not done so already, you need a fresh minimal [`Archlinux`](https://archlinux.org) installation.\
If you want to use a different distro, which is totally fine, go ahead and install [`Archlinux`](https://archlinux.org) anyway.

To install [`Arch`](https://archlinux.org) manually, refer to the [`Arch install guide`](https://wiki.archlinux.org/title/Installation_guide) or, run [`archinstall`](https://github.com/archlinux/archinstall) from the `archiso` to install [`Arch`](https://archlinux.org) the easy way.
> [!IMPORTANT]
> - If installing on bare metal, do not forget to _backup your current installation_ before proceeding.
> - Installing in `virt-manager` requires you to:
>   - Enable `[3D acceleration]` in `[Video Virtio]`.
>   - Set `[Listen type]` to `[None]` in `[Display Spice]`.
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
> - To configure your monitor(s) manually, you need to edit [`dotfiles/hypr/conf/monitor.conf`](/dotfiles/hypr/conf/monitor.conf)

Here's what a manual configuration should look like:
```md
# -------------------------------------------------------------------------------------
# Monitor Setup
# -------------------------------------------------------------------------------------

# Custom configuration example:
monitor=eDP-1,1920x1080@120.035,0x0,1
monitor=HDMI-A-1,2048x1080@60.00,auto,1
monitor=Virtual-1,2048x1080@60.00,0x0,1
```
For more detailed instructions about how to configure your monitor(s): [`🖥 Hyprland Wiki`](https://wiki.hyprland.org/Configuring/Monitors)

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
