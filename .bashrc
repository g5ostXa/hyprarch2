#      __            __
#     / /  ___ ____ / /  ________
#    / _ \/ _ `(_-</ _ \/ __/ __/
# (_)_.__/\_,_/___/_//_/_/  \__/
# 
# ~/.bashrc
#
# =============================================

# // ===== Colors =====
PS1='[\u@\h \W]\$ '
MAGENTA='\033[1;35m'
RC='\033[0m'

# // ===== General aliases =====
alias ls="eza --icons=always --color=always"
alias ll="ls -a"
alias bwrap-btop="~/src/Scripts/sandboxes/bwrap-btop.sh"
alias Hy2clean="~/src/Scripts/cleanup.sh"
alias errcheck="~/src/Scripts/checkerrors.sh"
alias cw="cliphist wipe"
alias mirrors-update="~/src/Scripts/mirrors.sh"
alias reboot="~/src/Scripts/reboot.sh"
alias poweroff="~/src/Scripts/poweroff.sh"
alias Hy2in="~/src/Scripts/hypr/start-hypr.sh"
alias Hy2out="~/src/Scripts/hypr/killhypr.sh"
alias lumine="~/src/Scripts/lumineV2.sh"
alias r4in="unimatrix -n -s 96 -l o"
alias Ghostconf="nvim $HOME/.config/ghostty/config.ghostty"

# Specific to me
alias Hy2="/usr/bin/git --git-dir=$HOME/.hyprarch2/ --work-tree=$HOME"

# // ===== General ======
export PATH=$PATH:"$HOME/.local/bin/"
export PATH="/usr/lib/ccache/bin/:$PATH"
export GOPATH="$HOME/go"
export PATH=$PATH:$GOPATH/bin

export HYPRARCH2_VERSION=$(cat "$HOME/.version/latest")
export EDITOR="nvim"

eval "$(starship init bash)"
cat ~/.cache/wal/sequences

if [[ $(tty) == *"pts"* ]]; then
	echo -e "${MAGENTA}"
	cat <<"EOF"
   __                              __   ___
  / /  __ _____  _______ _________/ /  |_  |
 / _ \/ // / _ \/ __/ _ `/ __/ __/ _ \/ __/
/_//_/\_, / .__/_/  \_,_/_/  \__/_//_/____/
     /___/_/
EOF
	echo ""
	echo "$HYPRARCH2_VERSION"
	echo -e "${RC}"
fi

# // ===== Set fish interactively =====
if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi

# // ===== Set UWSM for hyprland management =====
if uwsm check may-start && uwsm select; then
	exec systemd-cat -t uwsm_start uwsm start default
fi
