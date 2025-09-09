return {
  "stevearc/aerial.nvim",
  event = "VeryLazy",
  dependencies = {
    "nvim-treesitter/nvim-treesitter",
    "nvim-tree/nvim-web-devicons",
  },
  config = function()
    require("aerial").setup()
    vim.keymap.set("n", "<leader>o", "<cmd>AerialToggle!<CR>", { desc = "Toggle Aerial outline" })
    vim.api.nvim_create_user_command("SymbolsOutline", "AerialToggle", {})
  end,
}
