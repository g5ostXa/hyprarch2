## ⚙️ Sysctl hardening

- If reusing those sysctl configurations, do not forget to put them in `/etc/sysctl.d/` and make sure root owns them.
- On the other hand, the `install.sh` script will do this automatically but if not using the script, please run the following...

```
$ cd ~/Downloads
$ git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
$ sudo cp -r "$HOME"/Downloads/hyprarch2/sysctl/* /etc/sysctl.d/
$ sudo chown -R root:root /etc/sysctl.d/*
$ sudo rm -rf /etc/sysctl.d/README.md
$ rm -rf ~/Downloads/hyprarch2/
$ sudo sysctl --system
```
