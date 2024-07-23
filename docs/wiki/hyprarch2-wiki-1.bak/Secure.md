## ⚙️ UFW config

First, we need to install ufw 
```
$ sudo pacman -Syu && sudo pacman -S --noconfirm ufw
```
Then, run the following commands to add basic rules
```
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
$ sudo ufw allow ssh
```
Finally, enable UFW
```
$ sudo ufw enable && sudo systemctl enable ufw.service
```

## ⚙️ Sysctl hardening

If reusing those sysctl configurations, do not forget to put them in `/etc/sysctl.d/` and make sure root owns them.
On the other hand, the `install.sh` script will do this automatically but if not using the script, please run the following...

- Clone the repository in `~/Downloads`
```
$ cd ~/Downloads && git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
```
- Copy sysctl files to `/etc/sysctl.d/` (Note that you might need to create the directory with `sudo mkdir -p /etc/sysctl.d/`)
```
$ sudo cp -r "$HOME"/Downloads/hyprarch2/sysctl/* /etc/sysctl.d/
```
- Give root permissions to the directory and all it's content
```
$ sudo chown -R root:root /etc/sysctl.d/*
```
- Remove `README.md`
```
$ sudo rm -rf /etc/sysctl.d/README.md
```
- Remove the hyprarch2 directory if you dont need it
```
$ rm -rf ~/Downloads/hyprarch2/
```
- Apply kernel parameters
```
$ sudo sysctl --system
```



