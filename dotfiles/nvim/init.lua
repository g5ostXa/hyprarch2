-- init manager 
require("core.PluginManager")

--init settings
require("settings.Tabs")
require("settings.mason")
require("settings.cmp")
require("settings.lualine")
require("settings.alpha")
require("settings.ibl")
require("settings.autoclose")
vim.cmd.colorscheme "catppuccin-mocha"
vim.cmd "Alpha"
vim.cmd "Neotree"
vim.opt.relativenumber = true

-- Both visual and normal mode for each, so you can open with a visual selection or without.
vim.api.nvim_set_keymap('v', '<leader>a', ':GPTModelsCode<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>a', ':GPTModelsCode<CR>', { noremap = true })

vim.api.nvim_set_keymap('v', '<leader>c', ':GPTModelsChat<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>c', ':GPTModelsChat<CR>', { noremap = true })

