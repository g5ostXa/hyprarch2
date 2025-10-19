#      __            __
#     / /  ___ ____ / /  ________
#    / _ \/ _ `(_-</ _ \/ __/ __/
# (_)_.__/\_,_/___/_//_/_/  \__/
# 
# ~/.bashrc
#

# ---------------------------------------------------------------------------------------------
# Colors
# ---------------------------------------------------------------------------------------------
PS1='[\u@\h \W]\$ '
MAGENTA='\033[1;35m'
RC='\033[0m'

# ---------------------------------------------------------------------------------------------
# Maintainer's specific aliases
# ---------------------------------------------------------------------------------------------
alias hyprarch2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"
alias hyprpush="hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master"
alias h2status="hyprarch2 status"
alias h2push="hyprarch2 push"
alias h2pull="hyprarch2 pull"
alias virtkill="~/src/Scripts/virtkill.sh"

# ---------------------------------------------------------------------------------------------
# Main aliases
# ---------------------------------------------------------------------------------------------
alias ls="eza --icons=always --color=always"
alias ll="ls -a"
alias N="$EDITOR"
alias bwrap-btop="~/src/Scripts/sandboxes/bwrap-btop.sh"
alias fire="sudo firecfg"
alias unfire="sudo firecfg --clean"
alias clean="~/src/Scripts/cleanup.sh"
alias errcheck="~/src/Scripts/checkerrors.sh"
alias cw="cliphist wipe"
alias mirrors-update="~/src/Scripts/mirrors.sh"
alias reboot="~/src/Scripts/reboot.sh"
alias poweroff="~/src/Scripts/poweroff.sh"
alias start-hypr="~/src/Scripts/hypr/start-hypr.sh"
alias lumine="~/src/Scripts/lumine.sh"
alias sys-info="~/src/Scripts/sys-info.sh"

# --------------------------------------------------------------------------------------------
# General
# --------------------------------------------------------------------------------------------
export PATH=$PATH:"$HOME/.local/bin/"
export PATH="/usr/lib/ccache/bin/:$PATH"
export HYPRARCH2_VERSION=$(cat "$HOME/.version/latest")
export BROWSER="firefox-nightly"
export EDITOR="nvim"

eval "$(starship init bash)"
cat ~/.cache/wal/sequences

if [[ $(tty) == *"pts"* ]]; then
	echo -e "${MAGENTA}"
	figlet -f smslant "hyprarch2"
	echo ""
	echo "$HYPRARCH2_VERSION"
	echo -e "${RC}"
fi

# --------------------------------------------------------------------------------------------
# Set fish interactively
# --------------------------------------------------------------------------------------------
if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi

# -------------------------------------------------------------------------------------------
# Start hyprland using uwsm
# -------------------------------------------------------------------------------------------
if uwsm check may-start && uwsm select; then
	exec systemd-cat -t uwsm_start uwsm start default
fi
