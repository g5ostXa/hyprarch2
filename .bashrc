#      __            __
#     / /  ___ ____ / /  ________
#    / _ \/ _ `(_-</ _ \/ __/ __/
# (_)_.__/\_,_/___/_//_/_/  \__/
# 
# ~/.bashrc
#

# -----------------------------------------------------------------------------------------
# Colors
# -----------------------------------------------------------------------------------------
PS1='[\u@\h \W]\$ '
MAGENTA='\033[1;35m'
RC='\033[0m'

# -----------------------------------------------------------------------------------------
# Maintainer's specific aliases
# -----------------------------------------------------------------------------------------
alias hyprarch2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"
alias hyprpush="hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master"
alias h2status="hyprarch2 status"
alias h2push="hyprarch2 push"
alias h2pull="hyprarch2 pull"

# -----------------------------------------------------------------------------------------
# Main aliases
# -----------------------------------------------------------------------------------------
alias ls="eza --icons=always --color=always"
alias ll="ls -al"
alias bwrap-btop="~/src/Scripts/sandboxes/bwrap-btop.sh"
alias virtkill="~/src/Scripts/virtkill.sh"
alias fire="sudo firecfg"
alias unfire="sudo firecfg --clean"
alias clean="~/src/Scripts/cleanup.sh"
alias errcheck="~/src/Scripts/checkerrors.sh"
alias cw="cliphist wipe"
alias mirrors-update="~/src/Scripts/mirrors.sh"
alias reboot="~/src/Scripts/reboot.sh"
alias poweroff="~/src/Scripts/poweroff.sh"
alias st4rtX="~/src/Scripts/hypr/st4rtX.sh"
alias lumine="~/src/Scripts/lumine.sh"

# ----------------------------------------------------------------------------------------
# General
# ----------------------------------------------------------------------------------------
export PATH=$PATH:~/.local/bin/
export PATH="/usr/lib/ccache/bin/:$PATH"
export GH_PROJECTS="$HOME/gh-projects/"
export HYPRARCH2_VERSION="$HOME/.version/latest"

eval "$(starship init bash)"
cat ~/.cache/wal/sequences

if [[ $(tty) == *"pts"* ]]; then
	echo -e "${MAGENTA}"
	figlet -f smslant "hyprarch2"
	echo ""
	cat "$HYPRARCH2_VERSION"
	echo -e "${RC}"
fi

# ----------------------------------------------------------------------------------------
# Set fish interactively
# ----------------------------------------------------------------------------------------
if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi

# ---------------------------------------------------------------------------------------
# Start hyprland using uwsm
# ---------------------------------------------------------------------------------------
if uwsm check may-start && uwsm select; then
	exec systemd-cat -t uwsm_start uwsm start default
fi
