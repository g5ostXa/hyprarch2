if status is-interactive

# // ===== General aliases =====
alias ls='eza --icons=always --color=always'
alias ll='ls -a'
alias bwrap-btop='~/src/Scripts/sandboxes/bwrap-btop.sh'
alias Hy2clean='~/src/Scripts/cleanup.sh'
alias errcheck='~/src/Scripts/checkerrors.sh'
alias cw='cliphist wipe'
alias mirrors-update='~/src/Scripts/mirrors.sh'
alias reboot='~/src/Scripts/reboot.sh'
alias poweroff='~/src/Scripts/poweroff.sh'
alias Hy2in='~/src/Scripts/hypr/start-hypr.sh'
alias Hy2out='~/src/Scripts/hypr/killhypr.sh'
alias lumine='~/src/Scripts/lumineV2.sh'
alias r4in='unimatrix -n -s 96 -l o'
alias Ghostconf='nvim ~/.ccnfig/ghostty/config.ghostty'

# Specific to me
alias Hy2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'
end

# // ===== STARSHIP INIT =====
starship init fish | source
