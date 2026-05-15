local mocha = {
    rosewater = 0xfff5e0dc,
    flamingo  = 0xfff2cdcd,
    pink      = 0xfff5c2e7,
    mauve     = 0xffcba6f7,
    red       = 0xfff38ba8,
    maroon    = 0xffeba0ac,
    peach     = 0xfffab387,
    yellow    = 0xfff9e2af,
    green     = 0xffa6e3a1,
    teal      = 0xff94e2d5,
    sky       = 0xff89dceb,
    sapphire  = 0xff74c7ec,
    blue      = 0xff89b4fa,
    lavender  = 0xffb4befe,
    text      = 0xffcdd6f4,
    subtext1  = 0xffbac2de,
    subtext0  = 0xffa6adc8,
    overlay2  = 0xff9399b2,
    overlay1  = 0xff7f849c,
    overlay0  = 0xff6c7086,
    surface2  = 0xff585b70,
    surface1  = 0xff45475a,
    surface0  = 0xff313244,
    base      = 0xff1e1e2e,
    mantle    = 0xff181825,
    crust     = 0xff11111b,
}

hl.monitor({
    output = "eDP-1",
    mode = "1920x1080@120",
    position = "2048x0",
    scale = 1
})

hl.monitor({
    output = "HDMI-A-1",
    mode = "2048x1080@60",
    position = "0x0",
    scale = 1
})

hl.env("XCURSOR_SIZE", "24")
hl.env("QT_QPA_PLATFORM", "wayland")
hl.env("GTK_THEME", "Tokyonight-Dark:dark")
hl.env("XDG_CURRENT_DESKTOP", "hyprland")
hl.env("XDG_SESSION_TYPE", "wayland")
hl.env("XDG_SESSION_DESKTOP", "hyprland")
hl.env("PRIMARY_MONITOR", "eDP-1")
hl.env("SECONDARY_MONITOR", "HDMI-A-1")
hl.env("GTK_SCALE", "1")
hl.env("BROWSER", "firefox-nightly")
hl.env("MOZ_ENABLE_WAYLAND", "1")

hl.on("hyprland.start", function()
    hl.exec_cmd("systemctl --user start hyprpolkitagent")
    hl.exec_cmd("uwsm app -- dunst")
    hl.exec_cmd("~/src/Scripts/gtk.sh")
    hl.exec_cmd("uwsm app -- hypridle")
    hl.exec_cmd("uwsm app -- wl-paste --watch cliphist store")
    hl.exec_cmd("uwsm app -- swww-daemon --format argb")
    hl.exec_cmd("uwsm app -- waypaper --restore")
    hl.exec_cmd("hyprctl setcursor Bibata-Modern-Ice 24")
end)

hl.config({
    general = {
        gaps_in = 4.5,
        gaps_out = 8.5,
        border_size = 2,
        layout = "dwindle",
        col = {
            active_border = mocha.mauve,
            inactive_border = mocha.surface0,
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
            color = mocha.crust,
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

    misc = {
        disable_hyprland_logo = true,
        disable_splash_rendering = true,
    },
})

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

hl.config({
    animations = {
        enabled = true,
        bezier = {
            "wind, 0.05, 0.9, 0.1, 1.05",
            "winIn, 0.1, 1.1, 0.1, 1.1",
            "winOut, 0.3, -0.3, 0, 1",
            "linear, 1, 1, 1, 1",
        },
        animation = {
            "windows, 1, 6, wind, slide",
            "windowsIn, 1, 6, winIn, slide",
            "windowsOut, 1, 5, winOut, slide",
            "windowsMove, 1, 5, wind, slide",
            "border, 1, 1, linear",
            "borderangle, 1, 30, linear, loop",
            "fade, 1, 10, default",
            "workspaces, 1, 5, wind",
        },
    },
})

hl.windowrule({
    class = "^Pavucontrol$",
    float = true,
    pin = true,
    size = {900, 600}
})

hl.windowrule({
    class = "^waypaper$",
    float = true,
    pin = true,
    size = {900, 600}
})

hl.windowrule({
    class = "^nm%-connection%-editor$",
    float = true,
    pin = true,
    size = {900, 600}
})

hl.windowrule({
    class = "^localsend$",
    float = true,
    pin = true,
    size = {900, 600}
})

hl.windowrule({
    class = "^proton%-authenticator$",
    float = true,
    pin = true,
    size = {900, 600}
})

local mainMod = "SUPER"

hl.bind(mainMod .. " CTRL", "H", "exec", "~/src/Scripts/hypr/keybindings.sh")
hl.bind(mainMod, "PRINT", "exec", "~/src/Scripts/screenshot.sh")
hl.bind(mainMod .. " SHIFT", "B", "exec", "~/src/Scripts/waybar/launch.sh")
hl.bind(mainMod .. " CTRL", "C", "exec", "~/src/Scripts/cliphist.sh")
hl.bind(mainMod .. " CTRL", "M", "exec", "~/src/Scripts/hypr/killhypr.sh")
hl.bind(mainMod .. " SHIFT", "N", "exec", "~/src/Scripts/hypr/hypridle.sh")
hl.bind(mainMod .. " SHIFT", "V", "exec", "~/src/Scripts/hypr/monitor-toggle.sh")
hl.bind(mainMod, "RETURN", "exec", "uwsm app -- ghostty")
hl.bind(mainMod, "E", "exec", "uwsm app -- ~/src/Scripts/sandboxes/bwrap-nautilus.sh")
hl.bind(mainMod, "B", "exec", "uwsm app -- firefox-nightly")
hl.bind(mainMod, "W", "exec", "uwsm app -- waypaper")
hl.bind(mainMod .. " CTRL", "O", "exec", "uwsm app -- firejail --apparmor obsidian")
hl.bind(mainMod .. " CTRL", "RETURN", "exec", "rofi -show drun")
hl.bind(mainMod .. " CTRL", "Q", "exec", "uwsm app -- wlogout")
hl.bind(mainMod .. " SHIFT", "P", "exec", "uwsm app -- firejail --apparmor proton-authenticator")

hl.bind(mainMod, "Q", "killactive")
hl.bind(mainMod, "F", "fullscreen")
hl.bind(mainMod, "T", "togglefloating")
hl.bind(mainMod .. " SHIFT", "T", "exec", "hyprctl dispatch workspaceopt allfloat")
hl.bind(mainMod, "left", "movefocus", "l")
hl.bind(mainMod, "right", "movefocus", "r")
hl.bind(mainMod, "up", "movefocus", "u")
hl.bind(mainMod, "down", "movefocus", "d")

for i = 1, 9 do
    hl.bind(mainMod, tostring(i), "workspace", tostring(i))
    hl.bind(mainMod .. " SHIFT", tostring(i), "movetoworkspace", tostring(i))
end
hl.bind(mainMod, "0", "workspace", "10")