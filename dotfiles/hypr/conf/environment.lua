-- General:
hl.env("XCURSOR_SIZE", "24")
hl.env("QT_QPA_PLATFORM", "wayland") -- Fixed: h1 -> hl
hl.env("GTK_THEME", "Tokyonight-Dark:dark")

-- XDG Desktop Portal:
hl.env("XDG_CURRENT_DESKTOP", "Hyprland")
hl.env("XDG_SESSION_TYPE", "wayland")
hl.env("XDG_SESSION_DESKTOP", "Hyprland")

-- Monitor(s):
hl.env("PRIMARY_MONITOR", "eDP-1")
hl.env("SECONDARY_MONITOR", "HDMI-A-1")
hl.env("VIRTUAL_MONITOR", "Virtual-1")

-- GTK:
hl.env("GDK_SCALE", "1")

-- Default Browser:
hl.env("BROWSER", "firefox-nightly") -- Fixed: BRWOSER -> BROWSER
hl.env("MOZ_ENABLE_WAYLAND", "1")
