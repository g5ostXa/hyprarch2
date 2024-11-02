if status is-interactive

# ----------------------------------------------------
# ALIASES
# ----------------------------------------------------
alias ls='eza --icons=always --color=always'
alias ll='ls -al'
alias vpn-connect='sudo protonvpn connect -f'
alias vpn-disconnect='sudo protonvpn disconnect'
alias vpn-reconnect='sudo protonvpn reconnect'
alias vpn-status='sudo protonvpn status'
alias reboot='~/src/Scripts/reboot.sh'
alias poweroff='~/src/Scripts/poweroff.sh'
alias hyprarch2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'
alias libvirtStop='~/src/Scripts/libvirtStop.sh'
alias hyprpush='hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master'
alias hyprstatus='hyprarch2 status' 
alias fire='sudo firecfg'
alias unfire='sudo firecfg --clean'
alias firetop='firejail --top'
alias clean='~/src/Scripts/cleanup.sh'
alias errcheck='~/src/Scripts/checkerrors.sh'
alias cw='cliphist wipe'
alias hyprlist='~/src/Scripts/hyprlist.sh'
alias mirrors-update='~/src/Scripts/mirrors.sh'
alias bwrap-btop='~/src/Scripts/sandboxes/bwrap-btop.sh'
end
