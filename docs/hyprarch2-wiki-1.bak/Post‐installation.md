## ➜ Hyprland 
- Start [hyprland](https://hyprland.org) from tty
```
$ Hyprland
```
## ⌨️ Some useful keybinds
[keybindings.conf](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/hypr/conf/keybindings.conf)
- `SUPER` + `B` : Firefox
- `SUPER` + `RETURN` : Alacritty
- `SUPER` + `CTRL` + `RETURN` : Rofi 
- `SUPER` + `SHIFT` + `B` : Reload waybar 
- `SUPER` + `CTRL` + `Q` : Wlogout
- `SUPER` + `U` : Update package lists
- `SUPER` + `Q` : Killactive
- `SUPER` + `CTRL` + `P` : Proton-pass
- `SUPER` + `E` : Thunar
- `SUPER` + `F` : Fullscreen
- `SUPER` + `T` : Togglefloating

## 📦 Update package lists (Optional)

[update_pkgs_lists.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/update_pkgs_lists.sh)

```
$ update-pkgs-lists
```

## ⚙️ Systemd services and timers
You can find the services and timers that I use on hyprarch2 [here](https://github.com/g5ostXa/hyprarch2/blob/master/docs/systemd/services-timers.txt)

> [!NOTE]
> UFW stands for uncomplicated firewall. You can find how to install, configure and enable it [here](https://github.com/g5ostXa/hyprarch2/wiki/Secure#%EF%B8%8F-ufw-config)

- Enable `example.service` on next boot
```
$ sudo systemctl enable example.service 
```

- Enable `example.timer` on next boot
```
$ sudo systemctl enable example.timer
```

- You can use the `--now` flag to enable and start the service or timer at run time
```
$ sudo systemctl enable --now example.service
$ sudo systemctl enable --now example.timer
```
[checkerrors.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/checkerrors.sh)
- If you have installed hyprarch2, you can check for errors that might have occured while enabling some systemd services
```
$ errcheck
```
