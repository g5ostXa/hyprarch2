<div align="center">
    <img src="https://user-images.githubusercontent.com/25181517/186884156-e63da389-f3e1-4dca-a6c1-d76e886ba22a.png" width="200" height="200"/>
</div>

<div align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Iosevka+Nerd+Font&weight=900&pause=1000&color=6791C9&background=0C0E0F00&center=true&vCenter=true&width=435&lines=Welcome to Arch Linux !"/>
</div>

<div align="center">
By g5ostXa :ghost:
</div>

<div align="left">

## Table of contents
- [Preparation](#preparation)
- [Partitions](#partitions)
- [Formatting](#formatting)
- [Base Installation](#base-installation)
- [Fstab and Enter installation](#fstab-and-enter-installation)
- [Locales](#locales)
- [Hosts and hostname](#hosts-and-hostname)
- [Root password and system install](#root-password-and-system-install)
- [Kernel hooks and grub configuration](#kernel-hooks-and-grub-configuration)
- [Systemd services](#systemd-services)
- [Users](#users)
- [Wheel and sudo](#wheel-and-sudo)
- [Exit installation and reboot](#exit-installation-and-reboot)

## Preparation
- Set temporary root password:
```
# passwd
```
- Configure mirrors using reflector:
```
# reflector --country Canada --protocol https --latest 20 --age 6 --sort rate --save /etc/pacman.d/mirrorlist
```
- Refresh/sync repositories:
```
# pacman -Syyy
```
- Enable network time protocol and set timezone:
```
# timedatectl set-ntp true && timedatectl set-timezone America/Toronto
```

## Partitions
- Note: This example assumes `sda` is the disk name. You can verify this with `lsblk` command.
- Wipe the disk properly to later use with Luks encryption:
```
# dd if=/dev/zero of=/dev/sda status=progress
```
```
# sync
```
- Now, let's create the EFI and LVM partitions:
```
# gdisk /dev/sda
```
- `o` (Delete all partitions and create new protective mbr)
- `n` (for new)
- `accept defaults` (1)
- `accept defaults` (first sector)
- `+512M` (last sector)
- `ef00` (EFI code)
- `n` (for new)
- `accept` defaults (all)
- `8e00` (LVM code)
- `w` (for write)
- `y` (for comfirmation)

Expected layout:

| Mount points | Parition | Partition type | Suggested size |
|:-------------|:--------:|:---------------|:---------------|
| /mnt/boot        | /dev/sda1| EFI (ef00)     | 512M           |           
| /mnt            | /dev/sda2| Linux LVM (8e00)| Remainder of the device |
    

## Formatting
```
# cryptsetup luksFormat /dev/sda2

# cryptsetup open /dev/sda2 "name of encrypted disk"

# pvcreate /dev/mapper/"name of encrypted disk"

# vgcreate "name of volume group" /dev/mapper/"name of encrypted disk"

# lvcreate -L 40G "name of volume group" -n root

# lvcreate -L 2G "name of volume group" -n swap

# lvcreate -l 100%FREE "name of volume group" -n home

# mkfs.fat -F32 /dev/sda1

# mkfs.ext4 /dev/"name of volume group"/root

# mkfs.ext4 /dev/"name of volume group"/home

# mkswap /dev/"name of volume group"/swap

# mount /dev/"name of volume group"/root /mnt

# mkdir /mnt/home

# mount /dev/"name of volume group"/home /mnt/home

# mkdir /mnt/boot

# mount /dev/sda1 /mnt/boot

# swapon /dev/"name of volume group"/swap
```

## Base Installation
- Install the system base:
```
# pacstrap -K /mnt base linux linux-firmware vim intel-ucode lvm2
```

## Fstab and Enter installation
- Generate the fstab config file:
```
# genfstab -U /mnt >> /mnt/etc/fstab
```
- Enter Installation:
```
# arch-chroot /mnt
```

## Locales
- Configure time zone:
```
# ln -sf /usr/share/zoneinfo/America/Toronto /etc/localtime
```
- Configure system clock:
```
# hwclock --systohc
```
- To set the locales, edit `/etc/locale.gen` and uncomment the following line:
```
en_US.UTF-8
```
- Generate the locales:
```
# locale-gen
```
- Append to locale.conf:
```
# echo "LANG=en_US.UTF-8" >> /etc/locale.conf
```

## Hosts and hostname
- Set the machine name:
```
# echo HOSTNAME >> /etc/hostname
```
- To configure localhosts, edit `/etc/hosts` and use the following example:

| Addresses |  Hosts       |
|:-------- | :-----------: |
| 127.0.0.1|  localhost    |
| ::1      |  localhost    |
| 127.0.1.1|  "hostname".localdomain  "hostname"

## Root password and system install
- To set root password:
```
# passwd
```
- Install main system:
```
# pacman -S grub efibootmgr networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers git reflector xdg-utils xdg-user-dirs gum dnsmasq lsof htop fastfetch ufw firejail apparmor audit firefox
```

## Kernel hooks and grub configuration
- Edit `/etc/mkinitcpio.conf` to add the `"encrypt"` and `"lvm2"` hooks using the following order:
```
HOOKS=(base udev autodetect modconf block encrypt lvm2 filesystems keyboard fsck)
```
- Now, regenerate the kernel image:
```
# mkinitcpio -p linux
```
- Install the grub bootloader:
```
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```
- Next, we need to edit `/etc/default/grub` to add the following line to GRUB_CMDLINE_LINUX:
```    
GRUB_CMDLINE_LINUX="cryptdevice=UUID=PASTE-UUID-HERE:NAME-OF-ENCRYPTED-DISK root=/dev/NAME-OF-VOLUME-GROUP/root"

Note: Replace "PASTE-UUID-HERE", "NAME-OF-ENCRYPTED-DISK" and "NAME-OF-VOLUME-GROUP" with the correct values.  
```
- Finally, generate the new grub configuration:
```
# grub-mkconfig -o /boot/grub/grub.cfg
```

## Systemd services

- To create user with encrypted isolated home:
```
# systemctl enable systemd-homed.service
```
- Enable NetworkManager at system startup:
```
# systemctl enable NetworkManager.service
```
- Enable file system trim timer:
```
# systemctl enable fstrim.timer
```
- To automatically refresh pacman mirrors once a week, we need to edit `/etc/xdg/reflector/reflector.conf`. Then, enable reflector with the following command:
```
# systemctl enable reflector.timer
```

## Users
- Create new user with encrypted isolated home:
```
# homectl create USER --disk-size=BYTES --storage=luks --umask=0077 --member-of="adm,audio,audit,avahi,dbus,disk,dnsmasq,firejail,git,groups,input,libvirt,log,lp,optical,polkitd,power,users,uucp,uuidd,video,wheel"
```
- Inspect new user:
```
# homectl inspect USER
```

## Wheel and sudo
- Access the sudoers file using vim:
```
# EDITOR=vim visudo
```
Note: To let anyone in the wheel group use sudo, uncomment this line:
`%wheel ALL=(ALL:ALL) ALL`
 
## Exit installation and reboot
```
# exit
```
```
# umount -R /mnt
```
```
# reboot
```
</div>

