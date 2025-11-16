if status is-interactive

# // ===== Maintainer's specific aliases (hyprarch2) =====
alias Hy2='/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME'

# :: Initialize and set SSH for github, first run only:
# alias H2PUSSH='hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master'

# :: Murder virt-manager and all libvirt services:
alias virtkill='~/src/Scripts/virtkill.sh'

# :: Set firejail globally
alias setfire='sudo firecfg'

# :: Unset firejail globally
alias unsetfire='sudo firecfg --clean'

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
alias lumine='~/src/Scripts/lumine.sh'
alias r4in='unimatrix -n -s 96 -l o'
end

# // ===== STARSHIP INIT =====
starship init fish | source
