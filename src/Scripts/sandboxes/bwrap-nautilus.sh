#!/bin/bash
bwrap --ro-bind /usr /usr --ro-bind /bin /bin --ro-bind /lib /lib --ro-bind /lib64 /lib64 --ro-bind /sbin /sbin --ro-bind /etc /etc --dev /dev --proc /proc --tmpfs /tmp --bind /home/$USER /home/$USER --bind /run /run --bind /var /var --ro-bind /run/dbus/system_bus_socket /run/dbus/system_bus_socket --unshare-net --new-session /usr/bin/nautilus
