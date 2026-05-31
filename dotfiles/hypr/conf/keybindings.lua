---------------------------
----- keybindings.lua -----
---------------------------

-- Define your defaults here:
local mainMod        = "SUPER"
local defaultBrowser = "firefox-nightly"
local defaultTerm    = "ghostty"

-- Custom:
hl.bind(mainMod .. " + PRINT", hl.dsp.exec_cmd("~/src/Scripts/screenshot.sh"))
hl.bind(mainMod .. " + SHIFT + B", hl.dsp.exec_cmd("~/src/Scripts/waybar/launch.sh"))
hl.bind(mainMod .. " + CTRL + C", hl.dsp.exec_cmd("~/src/Scripts/cliphist.sh"))
hl.bind(mainMod .. " + CTRL + M", hl.dsp.exec_cmd("~/src/Scripts/hypr/killhypr.sh"))
hl.bind(mainMod .. " + SHIFT + N", hl.dsp.exec_cmd("~/src/Scripts/hypr/hypridle.sh"))
hl.bind(mainMod .. " + SHIFT + V", hl.dsp.exec_cmd("~/src/Scripts/hypr/monitor-toggle.sh"))
hl.bind(mainMod .. " + RETURN", hl.dsp.exec_cmd("uwsm app -- " .. defaultTerm))
hl.bind(mainMod .. " + E", hl.dsp.exec_cmd("uwsm app -- ~/src/Scripts/sandboxes/bwrap-nautilus.sh"))
hl.bind(mainMod .. " + B", hl.dsp.exec_cmd("uwsm app -- " .. defaultBrowser))
hl.bind(mainMod .. " + W", hl.dsp.exec_cmd("uwsm app -- waypaper"))
hl.bind(mainMod .. " + CTRL + RETURN", hl.dsp.exec_cmd("rofi -show drun"))
hl.bind(mainMod .. " + CTRL + Q", hl.dsp.exec_cmd("uwsm app -- wlogout"))

-- General:
hl.bind(mainMod .. " + Q", hl.dsp.window.close())
hl.bind(mainMod .. " + F", hl.dsp.window.fullscreen())
hl.bind(mainMod .. " + T", hl.dsp.window.float({ action = "toggle" }))
hl.bind(mainMod .. " + SHIFT + T", hl.dsp.exec_cmd("hyprctl dispatch workspaceopt allfloat"))
hl.bind(mainMod .. " + left", hl.dsp.focus({ direction = "l" }))
hl.bind(mainMod .. " + right", hl.dsp.focus({ direction = "r" }))
hl.bind(mainMod .. " + up", hl.dsp.focus({ direction = "u" }))
hl.bind(mainMod .. " + down", hl.dsp.focus({ direction = "d" }))

-- Navigate workspaces:
hl.bind(mainMod .. " + 1", hl.dsp.focus({ workspace = 1 }))
hl.bind(mainMod .. " + 2", hl.dsp.focus({ workspace = 2 }))
hl.bind(mainMod .. " + 3", hl.dsp.focus({ workspace = 3 }))
hl.bind(mainMod .. " + 4", hl.dsp.focus({ workspace = 4 }))
hl.bind(mainMod .. " + 5", hl.dsp.focus({ workspace = 5 }))
hl.bind(mainMod .. " + 6", hl.dsp.focus({ workspace = 6 }))
hl.bind(mainMod .. " + 7", hl.dsp.focus({ workspace = 7 }))
hl.bind(mainMod .. " + 8", hl.dsp.focus({ workspace = 8 }))
hl.bind(mainMod .. " + 9", hl.dsp.focus({ workspace = 9 }))
hl.bind(mainMod .. " + 0", hl.dsp.focus({ workspace = 10 }))

-- Move window to any workspace:
hl.bind(mainMod .. " + SHIFT + 1", hl.dsp.window.move({ workspace = 1 }))
hl.bind(mainMod .. " + SHIFT + 2", hl.dsp.window.move({ workspace = 2 }))
hl.bind(mainMod .. " + SHIFT + 3", hl.dsp.window.move({ workspace = 3 }))
hl.bind(mainMod .. " + SHIFT + 4", hl.dsp.window.move({ workspace = 4 }))
hl.bind(mainMod .. " + SHIFT + 5", hl.dsp.window.move({ workspace = 5 }))
hl.bind(mainMod .. " + SHIFT + 6", hl.dsp.window.move({ workspace = 6 }))
hl.bind(mainMod .. " + SHIFT + 7", hl.dsp.window.move({ workspace = 7 }))
hl.bind(mainMod .. " + SHIFT + 8", hl.dsp.window.move({ workspace = 8 }))
hl.bind(mainMod .. " + SHIFT + 9", hl.dsp.window.move({ workspace = 9 }))
hl.bind(mainMod .. " + SHIFT + 0", hl.dsp.window.move({ workspace = 10 }))

-- Misc:
hl.bind(mainMod .. " + mouse_down", hl.dsp.focus({ workspace = "e+1" }))
hl.bind(mainMod .. " + mouse_up", hl.dsp.focus({ workspace = "e-1" }))
hl.bind(mainMod .. " + mouse:272", hl.dsp.window.drag(), { mouse = true })
hl.bind(mainMod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true })
hl.bind(mainMod .. " + SHIFT + right", hl.dsp.window.resize({ x = 100, y = 0, relative = true }))
hl.bind(mainMod .. " + SHIFT + left", hl.dsp.window.resize({ x = -100, y = 0, relative = true }))
hl.bind(mainMod .. " + SHIFT + up", hl.dsp.window.resize({ x = 0, y = -100, relative = true }))
hl.bind(mainMod .. " + SHIFT + down", hl.dsp.window.resize({ x = 0, y = 100, relative = true }))
hl.bind("XF86MonBrightnessUp", hl.dsp.exec_cmd("brightnessctl -q s +20%"), { repeating = true })
hl.bind("XF86MonBrightnessDown", hl.dsp.exec_cmd("brightnessctl -q s 20%-"), { repeating = true })
