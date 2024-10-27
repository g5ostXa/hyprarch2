#!/bin/bash

bwrap --ro-bind /usr /usr --ro-bind /bin /bin --ro-bind /lib /lib --ro-bind /lib64 /lib64 --ro-bind /sbin /sbin --ro-bind /etc /etc --dev /dev --proc /proc --tmpfs /tmp --ro-bind /home/$USER /home/$USER --unshare-net --dir /run /usr/bin/btop
