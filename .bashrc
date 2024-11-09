#    _               _              
#   | |__   __ _ ___| |__  _ __ ___ 
#   | '_ \ / _` / __| '_ \| '__/ __|
#  _| |_) | (_| \__ \ | | | | | (__ 
# (_)_.__/ \__,_|___/_| |_|_|  \___|
# 
# ~/.bashrc
#

# --------------------------------------------------------------------
# Defaults
# --------------------------------------------------------------------
[[ $- != *i* ]] && return
PS1='[\u@\h \W]\$ '

# --------------------------------------------------------------------
# Aliases
# --------------------------------------------------------------------
alias ls="eza --icons=always --color=always"
alias ll="ls -al"

# Sandboxes
alias bwrap-btop="~/src/Scripts/sandboxes/bwrap-btop.sh"

# ProtonVPN / Wireguard
alias wgstatus="~/src/Scripts/wgstatus.sh"

# hyprarch2 repo control
alias hyprarch2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"
alias hyprpush="hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master"
alias hyprlist="~/src/Scripts/hyprlist.sh"
alias hstatus="hyprarch2 status"
alias hpush="hyprarch2 push"

# System tools
alias libvirtStop="~/src/Scripts/libvirtStop.sh"
alias fire="sudo firecfg"
alias unfire="sudo firecfg --clean"
alias clean="~/src/Scripts/cleanup.sh"
alias errcheck="~/src/Scripts/checkerrors.sh"
alias cw="cliphist wipe"
alias mirrors-update="~/src/Scripts/mirrors.sh"
alias reboot="~/src/Scripts/reboot.sh"
alias poweroff="~/src/Scripts/poweroff.sh"
alias st4rtX="~/src/Scripts/hypr/st4rtX.sh"

# --------------------------------------------------------------------
# General
# --------------------------------------------------------------------
export PATH="/usr/lib/ccache/bin/:$PATH"
eval "$(starship init bash)"
cat ~/.cache/wal/sequences

HYPRARCH2_VERSION="$HOME/.version/latest"

CYAN='\033[0;36m'
RC='\033[0m'

# --------------------------------------------------------------------
# Shell init
# --------------------------------------------------------------------
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

cat "$HYPRARCH2_VERSION"
echo -e "${RC}"
fi

# Set fish interactively
if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi
