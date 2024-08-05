#    _               _              
#   | |__   __ _ ___| |__  _ __ ___ 
#   | '_ \ / _` / __| '_ \| '__/ __|
#  _| |_) | (_| \__ \ | | | | | (__ 
# (_)_.__/ \__,_|___/_| |_|_|  \___|
# 
# ~/.bashrc
#

[[ $- != *i* ]] && return
PS1='[\u@\h \W]\$ '

# Aliases
alias ls="eza --icons=always"
alias ll="ls -al"
alias vpn-connect="sudo protonvpn connect -f"
alias vpn-disconnect="sudo protonvpn disconnect"
alias vpn-reconnect="sudo protonvpn reconnect"
alias vpn-status="sudo protonvpn status"
alias r3boot="~/src/Scripts/r3boot.sh"
alias powerOff="~/src/Scripts/power0ff.sh"
alias hyprarch2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"
alias libvirtStop="~/src/Scripts/libvirtStop.sh"
alias hyprpush="hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master"
alias hyprstatus="hyprarch2 status"
alias fire="sudo firecfg"
alias unfire="sudo firecfg --clean"
alias firetop="firejail --top"
alias ff="fastfetch"
alias clean="~/dotfiles/scripts/cleanup.sh"
alias errcheck="~/src/Scripts/checkerrors.sh"
alias cw="cliphist wipe"
alias update-pkgs-lists="~/src/Scripts/update_pkgs_lists.sh"
alias killhypr="~/src/Scripts/killhypr.sh"

# Colors
CYAN='\033[0;36m'
RC='\033[0m'

# General
export PATH="/usr/lib/ccache/bin/:$PATH"
eval "$(starship init bash)"
cat ~/.cache/wal/sequences

# Init banner
if [[ $(tty) == *"pts"* ]]; then
echo -e "${CYAN}"
cat <<"EOF"
 _                                    _     ____
| |__  _   _ _ __  _ __ __ _ _ __ ___| |__ |___ \
| '_ \| | | | '_ \| '__/ _` | '__/ __| '_ \  __) |
| | | | |_| | |_) | | | (_| | | | (__| | | |/ __/
|_| |_|\__, | .__/|_|  \__,_|_|  \___|_| |_|_____|
       |___/|_|
EOF
echo ""
date 
echo -e "${RC}"
fi

# Set fish interactively
if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi
