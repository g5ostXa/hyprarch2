hl.on("hyprland.start", function()
    -- Start hyprpolkitagent
    hl.exec_cmd("systemctl --user start hyprpolkitagent")
    -- Start dunst
    hl.exec_cmd("uwsm app -- dunst &")
    -- Set cursor
    hl.exec_cmd("hyprctl setcursor Bibata-Modern-Ice 24")
    -- Load GTK settings
    hl.exec_cmd("~/src/Scripts/gtk.sh")
    -- Init hypridle (hyprlock)
    hl.exec_cmd("uwsm app -- hypridle")
    -- Init cliphist
    hl.exec_cmd("uwsm app -- wl-paste --watch cliphist store")
    -- Init awww
    hl.exec_cmd("uwsm app -- awww-daemon --format argb")
    -- Wallpaper and waybar
    hl.exec_cmd("uwsm app -- waypaper --restore")
    -- Startup notification
    -- hl.exec_cmd("notify-send --urgency=normal "You are now logged in as $USER" --icon=user-identity")
end)
