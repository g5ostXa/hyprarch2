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

export PATH="/usr/lib/ccache/bin/:$PATH"
eval "$(starship init bash)"
cat ~/.cache/wal/sequences

if [[ $(tty) == *"pts"* ]]; then
    
    echo "Vrch7inuX" | figlet | lolcat   
    date | lolcat

fi

# Set fish interactively

if [[ $(ps --no-header --pid=$PPID --format=comm) != "fish" && -z ${BASH_EXECUTION_STRING} ]]
then
	shopt -q login_shell && LOGIN_OPTION='--login' || LOGIN_OPTION=''
	exec fish $LOGIN_OPTION
fi
