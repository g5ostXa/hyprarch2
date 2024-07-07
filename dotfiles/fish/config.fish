if status is-interactive

# ALIASES
alias ls='lsd'
alias ll='lsd -al'
alias vpn-connect='sudo protonvpn connect -f'
alias vpn-disconnect='sudo protonvpn disconnect'
alias vpn-reconnect='sudo protonvpn reconnect'
alias vpn-status='sudo protonvpn status'
alias r3boot='~/src/Scripts/r3boot.sh'
alias powerOff='~/src/Scripts/power0ff.sh'
alias hyprarch2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'
alias libvirtStop='~/src/Scripts/libvirtStop.sh'
alias hyprpush='hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master' 
alias labpush='hyprarch2 push --set-upstream git@gitlab.com:r3dvx/hyprarch2.git master'
alias hyprstatus='hyprarch2 status' 
alias fire='sudo firecfg'
alias unfire='sudo firecfg --clean'
alias firetop='firejail --top'
alias ff='fastfetch'
alias clean='~/dotfiles/scripts/cleanup.sh'
alias errcheck='~/src/Scripts/checkerrors.sh'
alias cw='cliphist wipe'
end
