---------------------------
----- windowrules.lua -----
---------------------------

-- Pavucontrol
hl.window_rule({
    name  = "pavucontrol",
    match = {
        class = "^(pavucontrol)$",
    },
    float = true,
    pin   = true,
    size  = { 900, 600 },
})

-- Waypaper
hl.window_rule({
    name  = "waypaper",
    match = {
        class = "^(waypaper)$",
    },
    float = true,
    pin   = true,
    size  = { 900, 600 },
})

-- nm-connection-editor
hl.window_rule({
    name  = "nm-connection-editor",
    match = {
        class = "^(nm-connection-editor)$",
    },
    float = true,
    pin   = true,
    size  = { 900, 600 },
})
