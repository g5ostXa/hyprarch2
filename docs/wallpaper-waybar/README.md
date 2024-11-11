### Documentation for hyprarch2's wallpaper / waybar engine
> [!NOTE]
> - This documentation is about wallpaper and `waybar` setup when `hyprland` is launched only. Involving the `autostart.conf` file.
> - During session time, other scripts and keybindings are responsible for managing the wallpaper and `waybar`.
> - `waypaper` is a GUI app for selecting wallpapers. It can be launched from the keybind `SUPER` + `CTRL` + `W` during session time.
> - `waybar` can also be reloaded during session time at any momment with the keybind `SUPER` + `SHIFT` + `B`

**How it works**

When launching `hyprland` from the tty, one of the first configuration file to be sourced by `hyprland.conf` is `autostart.conf`.
This file is responsible for a lot of things, but it's also responsible for launching the wallpaper and `waybar` at startup.

The backend for the wallpaper engine is `swww` and is the first daemon to be started to initiate the wallpaper. then, `waypaper --restore` is the command that follows the initialization of `swww`.
When `autostart.conf` runs `waypaper --restore`, it triggers a file called `dotfiles/waypaper/config.ini`, which is set to run the wallpaper script (`wallpaper.sh`).

- `config.ini`
```
[Settings]
language = en
folder = ~/wallpaper
wallpaper = ~/wallpaper/some-wallpaper.jpg
backend = swww
monitors = All
fill = Fill
sort = name
color = #ffffff
subfolders = True
show_hidden = True
show_gifs_only = False
post_command = ~/src/Scripts/wallpaper.sh $wallpaper
number_of_columns = 3
swww_transition_type = outer
swww_transition_step = 90
swww_transition_angle = 0
swww_transition_duration = 0
```
You can see in the file above that the post command is `~/src/Scripts/wallpaper.sh $wallpaper`.
This will run `wallpaper.sh` and set `$wallpaper` as the wallpaper. The wallpaper folder is defined as well for `waypaper` to know where to find them.

Finally, `wallpaper.sh` is set to create a color scheme using `pywal` then launch waybar based on the wallpaper colors.

If for any reason `wallpaper.sh` fails to run, causing `waybar` to not launch as well, another script called `waybar.sh` will check if `waybar` is running and launch it if needed.

**Quick links**
- [wallpaper.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/wallpaper.sh)
- [autostart.conf](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/hypr/conf/autostart.conf)
- [waybar.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/waybar/waybar.sh)
