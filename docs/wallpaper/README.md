# wallpaper

### Install wallpapers
- If you have installed [hyprarch2](https://github.com/g5ostXa/hyprarch2), the wallpaper repo was automatically installed with the install script. Otherwise, run the following to install manually:
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
- On the first launch, the wallpaper won't load by default, causing `waybar` to not launch as well. 

- This happens because `waypaper` can only restore the wallpaper from `~/.cache/` to reload it at every boot. 
Therefor, we need to initialize one on the first launch. By doing so, the script will copy the wallpaper name and put it in a variable called `current_wallpaper.jpg` in the `~/.cache/` directory. Then, `autostart.conf` will automatically launch the chosen wallpaper and `waybar` with the correct color scheme at every boot. 

- To initialize the wallpaper, simply launch `waypaper` with `SUPER` + `SHIFT` + `W`, and select a wallpaper.

- If `waybar` still doesn't launch after setting the wallpaper, simply reload it with `SUPER` + `SHIFT` + `B`.

### Quick links
- [wallpaper script](https://github.com/g5ostXa/hyprarch2/blob/master/src/Scripts/wallpaper.sh)

- [waypaper config](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/waypaper/config.ini)
- [autostart config](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/hypr/conf/autostart.conf)
- [waybar script](https://github.com/g5ostXa/hyprarch2/blob/master/dotfiles/waybar/launch.sh)
