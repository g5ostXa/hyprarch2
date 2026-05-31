------------------------
----- hyprland.lua -----
------------------------

-- Set programs that you use:
local terminal    = "ghostty"
local fileManager = "nautilus"
local menu        = "rofi"

-- Initialization:
require("conf.monitor")
require("conf.autostart")

-- General:
require("conf.environment")
require("conf.keyboard")
require("conf.window")
require("conf.layouts")
require("conf.misc")
require("conf.keybindings")
require("conf.windowrules")
require("conf.animations-high")

-- Virtual machine environment:
-- require("conf.kvm")

-- Environment for xdg-desktop-portal-hyprland:
hl.on("hyprland.start", function()
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP")
end)
