## ➜ Preparation and Install
> [!IMPORTANT]
> - If installing in virt-manager, please verify that `3D acceleration` is enabled in `Video Virtio` and the `Listen type` is set to `None` in `Display Spice`

> [!NOTE]
> - [arch-lvm-luks.md](https://github.com/g5ostXa/hyprarch2/blob/master/docs/archbase/arch-lvm-luks.md) will guide you through installing Arch manually, or you can simply run `archinstall` from the archiso for a best effort automated Arch install 
> - After installing Arch, download the [Repo](https://github.com/g5ostXa/hyprarch2) in the `~/Downloads` directory and run the install script
```
$ cd Downloads
$ git clone --depth 1 git@github.com:g5ostXa/hyprarch2.git
$ cd hyprarch2 && ./install.sh
```