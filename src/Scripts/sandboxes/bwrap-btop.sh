#!/usr/bin/env bash

# // ======= bwrap-btop.sh =======

exec bwrap \
	--ro-bind /usr /usr \
	--ro-bind /bin /bin \
	--ro-bind /lib /lib \
	--ro-bind /lib64 /lib64 \
	--ro-bind /sbin /sbin \
	--ro-bind /etc /etc \
	--dev /dev \
	--proc /proc \
	--tmpfs /tmp \
	--ro-bind "$HOME" "$HOME" \
	--bind "$HOME/.config/btop" "$HOME/.config/btop" \
	--unshare-net \
	--dir /run \
	/usr/bin/btop
