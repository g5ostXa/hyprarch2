if status is-interactive

# -----------------------------------------------------------------------------------------
# Maintainer's specific aliases
# -----------------------------------------------------------------------------------------
alias hyprarch2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'
alias hyprpush='hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master'
alias h2status='hyprarch2 status'
alias h2push='hyprarch2 push'
alias h2pull='hyprarch2 pull'

# -----------------------------------------------------------------------------------------
# Main aliases
# -----------------------------------------------------------------------------------------
alias ls='eza --icons=always --color=always'
alias ll='ls -a'
alias N='$EDITOR'
alias reboot='~/src/Scripts/reboot.sh'
alias poweroff='~/src/Scripts/poweroff.sh'
alias fire='sudo firecfg'
alias unfire='sudo firecfg --clean'
alias clean='~/src/Scripts/cleanup.sh'
alias virtkill='~/src/Scripts/virtkill.sh'
alias errcheck='~/src/Scripts/checkerrors.sh'
alias cw='cliphist wipe'
alias mirrors-update='~/src/Scripts/mirrors.sh'
alias bwrap-btop='~/src/Scripts/sandboxes/bwrap-btop.sh'
alias start-hypr='~/src/Scripts/hypr/start-hypr.sh'
alias lumine='~/src/Scripts/lumine.sh'
alias r4in='unimatrix -n -s 96 -l o'
alias sys-info='~/src/Scripts/sys-info.sh'
end

# ------------------------------------------------------------------------------------------
# STARSHIP INIT
# ------------------------------------------------------------------------------------------
starship init fish | source
