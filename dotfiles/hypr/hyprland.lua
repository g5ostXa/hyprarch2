-- [MONITORS]:
-- eDP-1:
hl.monitor({
    output = "eDP-1",
    mode = "1920x1080@120.035",
    position = "2048x0",
    scale = 1
})

-- HDMI-A-1:
hl.monitor({
    output = "HDMI-A-1",
    mode = "2048x1080@59.998",
    position = "0x0",
    scale = 1
})

-- Virtual-1:
-- hl.monitor({
-- output = "Virtual-1",
-- mode = "2048x1080@59.998",
-- position = "0x0",
-- scale = 1
-- })

-- [ENVIRONMENT]:
-- General:
hl.env("XCURSOR_SIZE", "24")
hl.env("QT_QPA_PLATFORM", "wayland")
hl.env("GTK_THEME", "Tokyonight-Dark:dark")

-- XDG desktop portal:
hl.env("XDG_CURRENT_DESKTOP", "hyprland")
hl.env("XDG_SESSION_TYPE", "wayland")
hl.env("XDG_SESSION_DESKTOP", "hyprland")

-- Monitors:
hl.env("PRIMARY_MONITOR", "eDP-1")
hl.env("SECONDARY_MONITOR", "HDMI-A-1")
-- hl.env("VIRTUAL_MONITOR", "Virtual-1")

-- GTK:
hl.env("GKD_SCALE", "1")

-- Default browser:
hl.env("BROWSER", "firefox-nightly")
hl.env("MOZ_ENABLE_WAYLAND", "1")

-- [AUTOSTART]:
hl.on("hyprland.start", function()
    hl.exec_cmd("systemctl --user start hyprpolkitagent")
    hl.exec_cmd("uwsm app -- dunst &")
    hl.exec_cmd("~/src/Scripts/gtk.sh")
    hl.exec_cmd("uwsm app -- hypridle")
    hl.exec_cmd("uwsm app -- wl-paste --watch cliphist store")
    hl.exec_cmd("uwsm app -- swww-daemon --format argb")
    hl.exec_cmd("uwsm app -- waypaper --restore")
    hl.exec_cmd("hyprctl setcursor Bibata-Modern-Ice 24")
end)

-- [WINDOW & INPUT]:
hl.config({
    general = {
        gaps_in = 4.5,
        gaps_out = 8.5,
        border_size = 2,
        layout = "dwindle",
        col = {
            active_border = 0xFF000000,
            inactive_border = 0x00000000,
        },
        resize_on_border = true,
    },

    decoration = {
        rounding = 4,
        active_opacity = 1.0,
        inactive_opacity = 1.0,
        fullscreen_opacity = 1.0,

        blur = {
            enabled = true,
            size = 6,
            passes = 2,
            new_optimizations = true,
            ignore_opacity = true,
            xray = true,
        },

        shadow = {
            enabled = true,
            range = 30,
            render_power = 4,
            color = 0x66000000,
        }
    },

    input = {
        kb_layout = "us",
        follow_mouse = 1,
        touchpad = {
            natural_scroll = false,
        },
        sensitivity = 0,
    },

    gestures = {
        workspace_swipe = true,
    },
})

-- [LAYOUTS & BINDS]:
hl.config({
    dwindle = {
        pseudotile = true,
        preserve_split = true,
    },

    master = {
        new_status = "master",
    },

    binds = {
        workspace_back_and_forth = false,
        allow_workspace_cycles = true,
        pass_mouse_when_bound = false,
    },
})

-- [ANIMATIONS]:
hl.config({
    animations = {
        enabled = true,
        bezier = {
            "wind, 0.05, 0.9, 0.1, 1.05",
            "winIn, 0.1, 1.1, 0.1, 1.1",
            "winOut, 0.3, -0.3, 0, 1",
            "liner, 1, 1, 1, 1",
        },
        animation = {
            "windows, 1, 6, wind, slide",
            "windowsIn, 1, 6, winIn, slide",
            "windowsOut, 1, 5, winOut, slide",
            "windowsMove, 1, 5, wind, slide",
            "border, 1, 1, liner",
            "borderangle, 1, 30, liner, loop",
            "fade, 1, 10, default",
            "workspaces, 1, 5, wind",
        },
    },
})

--[[
hl.config({
    animations = {
        enabled = true,
        bezier = {
            "myBezier, 0.05, 0.9, 0.1, 1.05",
        },
        animation = {
            "windows, 1, 7, myBezier",
            "windowsOut, 1, 7, default, popin 80%",
            "border, 1, 10, default",
            "borderangle, 1, 8, default",
            "fade, 1, 7, default",
            "workspaces, 1, 6, default",
        },
    },
})
--]]
