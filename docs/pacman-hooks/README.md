## Pacman Hooks

_**Required**_: `pacman-contrib` `firejail` 

> [!IMPORTANT]
> - Make sure these hooks are stored in `/etc/pacman.d/hooks/`
> - Do not forget to give the hooks root permissions:
```
sudo chown -R root: /etc/pacman.d/hooks/*
```
