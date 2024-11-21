if status is-interactive

# ----------------------------------------------------
# ALIASES
# ----------------------------------------------------
# hyprpush is meant to re-initialize the repo or rebase it locally. 
# To push normally, use h2push.

# hyprarch2
alias hyprarch2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'
alias hyprpush='hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master'
alias hyprlist='~/src/Scripts/hyprlist.sh'
alias h2status='hyprarch2 status'
alias h2push='hyprarch2 push'
alias h2pull='hyprarch2 pull'

# General
alias ls='eza --icons=always --color=always'
alias ll='ls -al'
alias wgstatus='sudo ~/src/Scripts/wgstatus.sh'
alias reboot='~/src/Scripts/reboot.sh'
alias poweroff='~/src/Scripts/poweroff.sh'
alias fire='sudo firecfg'
alias unfire='sudo firecfg --clean'
alias clean='~/src/Scripts/cleanup.sh'
alias libvirtStop='~/src/Scripts/libvirtStop.sh'
alias errcheck='~/src/Scripts/checkerrors.sh'
alias cw='cliphist wipe'
alias mirrors-update='~/src/Scripts/mirrors.sh'
alias bwrap-btop='~/src/Scripts/sandboxes/bwrap-btop.sh'
alias st4rtX='~/src/Scripts/hypr/st4rtX.sh'

# Misc
alias r4in='unimatrix -n -s 96 -l o'
alias myarch='~/b4shL4nd/scripts/myarch.sh'
end
