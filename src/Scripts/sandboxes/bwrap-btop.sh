#!/usr/bin/env bash

# // ===== bwrap-btop.sh =====

exec bwrap \
	--ro-bind /usr /usr \
	--ro-bind /bin /bin \
	--ro-bind /etc /etc \
	--ro-bind /lib /lib \
	--ro-bind /lib64 /lib64 \
	--dev /dev \
	--proc /proc \
	--tmpfs /tmp \
	--dir /run \
	--dir "$HOME" \
	--dir "$HOME/.config" \
	--bind "$HOME/dotfiles/btop" "$HOME/.config/btop" \
	/usr/bin/btop
