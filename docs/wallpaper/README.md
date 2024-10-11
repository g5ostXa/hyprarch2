# wallpaper

### Install wallpapers
- If you have installed [hyprarch2](https://github.com/g5ostXa/hyprarch2), the wallpaper repo is likely already installed in `$HOME/`.
- Otherwise, run the following to install manually:
```
$ cd ~/Downloads
$ git clone --depth 1 https://github.com/g5ostXa/wallpaper.git
```
- To update:
```
$ cd /path/to/wallpaper
$ git pull
```

### Initialize wallpaper and waybar
On the first launch, the wallpaper won't load by default, which will prevent `waybar` from starting as well. 

This occurs because `waypaper` can only restore the wallpaper from the `~/.cache/` directory at each boot. Therefore, it’s essential to initialize the wallpaper on the first launch.

Once the wallpaper initialized, [wallpaper.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/wallpaper.sh) will save the wallpaper name in a file called `current_wallpaper.jpg` in the `~/.cache/` directory.  This allows [autostart.conf](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/hypr/conf/autostart.conf) to restore the wallpaper and launch `waybar` with the appropriate color scheme at every startup.

To initialize the wallpaper, simply launch `waypaper` with `SUPER` + `SHIFT` + `W`, and select a wallpaper.

If `waybar` still doesn't launch after setting the wallpaper, simply reload it with `SUPER` + `SHIFT` + `B`.
