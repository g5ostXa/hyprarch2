#    _               _              
#   | |__   __ _ ___| |__  _ __ ___ 
#   | '_ \ / _` / __| '_ \| '__/ __|
#  _| |_) | (_| \__ \ | | | | | (__ 
# (_)_.__/ \__,_|___/_| |_|_|  \___|
# 
# ~/.bashrc
#

# -----------------------------------------------------------------------------------------
# Defaults
# -----------------------------------------------------------------------------------------
PS1='[\u@\h \W]\$ '
MAGENTA='\033[1;35m'
RC='\033[0m'
HYPRARCH2_VERSION="$HOME/.version/latest"

# -----------------------------------------------------------------------------------------
# Aliases
# -----------------------------------------------------------------------------------------

# hyprarch2 repository owner specific -----------------------------------------------------
alias hyprarch2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"
alias hyprpush="hyprarch2 push --set-upstream git@github.com:g5ostXa/hyprarch2.git master"
alias hyprlist="~/src/Scripts/hyprlist.sh"
alias h2status="hyprarch2 status"
alias h2push="hyprarch2 push"
alias h2pull="hyprarch2 pull"
alias wgstatus='sudo ~/src/Scripts/wgstatus.sh'
if [ -f "$HOME/b4shL4nd/ghostware.sh" ]; then
	alias ghostware="bash -c ~/b4shL4nd/ghostware.sh"
fi
# ----------------------------------------------------------------------------------------

# System ---------------------------------------------------------------------------------
alias ls="eza --icons=always --color=always"
alias ll="ls -al"
alias bwrap-btop="~/src/Scripts/sandboxes/bwrap-btop.sh"
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
alias lumine="~/src/Scripts/lumine.sh"
alias r4in="unimatrix -n -s 96 -l o"
# ----------------------------------------------------------------------------------------

# ----------------------------------------------------------------------------------------
# General
# ----------------------------------------------------------------------------------------
export PATH="/usr/lib/ccache/bin/:$PATH"
eval "$(starship init bash)"
cat ~/.cache/wal/sequences

# Set UWSM env variable
export UWSM_USE_SESSION_SLICE=true

# ----------------------------------------------------------------------------------------
# Shell init
# ----------------------------------------------------------------------------------------
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
