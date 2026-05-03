#!/usr/bin/env bash

# // ======= gtk.sh =======

config="${XDG_CONFIG_HOME:-$HOME/.config}/gtk-3.0/settings.ini"
gnome_schema="org.gnome.desktop.interface"

[ -f "$config" ] || exit 1

gtk_theme="$(grep '^gtk-theme-name=' "$config" | cut -d '=' -f2-)"
icon_theme="$(grep '^gtk-icon-theme-name=' "$config" | cut -d '=' -f2-)"
cursor_theme="$(grep '^gtk-cursor-theme-name=' "$config" | cut -d '=' -f2-)"
cursor_size="$(grep '^gtk-cursor-theme-size=' "$config" | cut -d '=' -f2-)"
font_name="$(grep '^gtk-font-name=' "$config" | cut -d '=' -f2-)"
prefer_dark_theme="$(grep '^gtk-application-prefer-dark-theme=' "$config" | cut -d '=' -f2-)"

[ -n "$gtk_theme" ] && gsettings set "$gnome_schema" gtk-theme "$gtk_theme"
[ -n "$icon_theme" ] && gsettings set "$gnome_schema" icon-theme "$icon_theme"
[ -n "$cursor_theme" ] && gsettings set "$gnome_schema" cursor-theme "$cursor_theme"
[ -n "$cursor_size" ] && gsettings set "$gnome_schema" cursor-size "$cursor_size"
[ -n "$font_name" ] && gsettings set "$gnome_schema" font-name "$font_name"

if [ "$prefer_dark_theme" = "0" ]; then
	gsettings set "$gnome_schema" color-scheme prefer-light
elif [ "$prefer_dark_theme" = "1" ]; then
	gsettings set "$gnome_schema" color-scheme prefer-dark
fi
