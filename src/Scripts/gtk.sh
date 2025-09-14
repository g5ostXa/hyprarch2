#!/bin/sh

# -------------------------------------------------
# gtk.sh
# -------------------------------------------------
config="$HOME/.config/gtk-3.0/settings.ini"
if [ ! -f "$config" ]; then exit 1; fi

gnome_schema="org.gnome.desktop.interface"
gsettings set "$gnome_schema" gtk-theme "Tokyonight-Dark"
gsettings set "$gnome_schema" icon-theme "Dracula"
gsettings set "$gnome_schema" cursor-theme "Bibata-Modern-Ice"
gsettings set "$gnome_schema" font-name "Cantarell 11"
gsettings set "$gnome_schema" color-scheme "prefer-dark"
