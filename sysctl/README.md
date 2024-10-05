## ⚙️ Sysctl hardening

#### If you want to use the sysctl config without installing `hyprarch2`, run the following:

- Clone the repository in `~/Downloads`
```
$ cd ~/Downloads && git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
```
- Copy sysctl files to `/etc/sysctl.d/` (Note that you might need to create the directory first)
```
$ sudo mkdir /etc/sysctl.d/; sudo cp -r "$HOME"/Downloads/hyprarch2/sysctl/* /etc/sysctl.d/
```
- Give root permissions to the directory and all it's content
```
$ sudo chown -R root:root /etc/sysctl.d/; sudo chown -R root:root /etc/sysctl.d/*
```
- Remove `README.md` and `hyprarch2` directory if not needed
```
$ sudo rm -rf /etc/sysctl.d/README.md; rm -rf ~/Downloads/hyprarch2/
```
- Apply kernel parameters
```
$ sudo sysctl --system
```

