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
vim.cmd "Alpha"
vim.cmd "Neotree"
vim.opt.relativenumber = true

-- Theme
vim.cmd.colorscheme "tokyonight-night"

-- Set cursor back to "Beam" in alacritty when exiting nvim
vim.api.nvim_create_autocmd('VimLeave', {
	pattern = '*',
	command = 'set guicursor=a:ver25'
})

local capabilities = require('cmp_nvim_lsp').default_capabilities()
vim.lsp.config('*', { capabilities = capabilities })

vim.lsp.enable('bashls')
vim.lsp.enable('hyprls')
vim.lsp.enable('lua_ls')
vim.lsp.enable('typos_lsp')
vim.lsp.enable('vimls')

-- Both visual and normal mode for each, so you can open with a visual selection or without.
vim.api.nvim_set_keymap('v', '<leader>a', ':GPTModelsCode<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>a', ':GPTModelsCode<CR>', { noremap = true })

vim.api.nvim_set_keymap('v', '<leader>c', ':GPTModelsChat<CR>', { noremap = true })
vim.api.nvim_set_keymap('n', '<leader>c', ':GPTModelsChat<CR>', { noremap = true })

