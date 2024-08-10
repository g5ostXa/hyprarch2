# wallpaper

### Install wallpapers 
> [!NOTE]
> If you have installed hyprarch2, the wallpaper repo was automatically installed with the install script.

Otherwise, run the following to install manually

```
$ cd ~/Downloads
$ git clone --depth 1 https://github.com/g5ostXa/wallpaper.git
```

### Change default wallpaper
Edit `src/Scripts/wallpaper.sh` and modify the "default_wall" variable value at line 11

[wallpaper.sh](https://github.com/g5ostXa/hyprarch2/tree/master/src/Scripts/wallpaper.sh)

```
#!/bin/bash
#                _ _                              
# __      ____ _| | |_ __   __ _ _ __   ___ _ __  
# \ \ /\ / / _` | | | '_ \ / _` | '_ \ / _ \ '__| 
#  \ V  V / (_| | | | |_) | (_| | |_) |  __/ |    
#   \_/\_/ \__,_|_|_| .__/ \__,_| .__/ \___|_|    
#                   |_|         |_|               
#  
# ----------------------------------------------------- 

default_wall="$HOME/wallpaper/dracula-arch.jpg"

case $1 in

    # Load wallpaper 
    "init")
        if [ -f "$default_wall" ]; then
            wal -q -i "$default_wall"
        elif [ -f ~/.cache/current_wallpaper.jpg ]; then
            wal -q -i ~/.cache/current_wallpaper.jpg
        else
            wal -q -i ~/wallpaper/
        fi

    ;;
```

