#!/usr/bin/env bash

# // ======= cleanup.sh =======

set -euo pipefail

dry_run=false

case "${1:-}" in
-n | --dry-run)
	dry_run=true
	;;
"")
	;;
*)
	echo "Usage: $0 [--dry-run]"
	exit 2
	;;
esac

run() {
	printf '+'
	printf ' %q' "$@"
	printf '\n'

	if ! "$dry_run"; then
		"$@"
	fi
}

cat <<'EOF'
  ____ _                                
 / ___| | ___  __ _ _ __    _   _ _ __  
| |   | |/ _ \/ _` | '_ \  | | | | '_ \ 
| |___| |  __/ (_| | | | | | |_| | |_) |
 \____|_|\___|\__,_|_| |_|  \__,_| .__/ 
                                 |_|    
EOF

if ! command -v pacman >/dev/null 2>&1; then
	echo "error: pacman not found"
	exit 1
fi

sudo -v

echo ":: Cleaning package cache"

if command -v paccache >/dev/null 2>&1; then
	run sudo paccache -rk2
	run sudo paccache -ruk0
else
	echo ":: paccache not found; falling back to pacman -Sc"
	run sudo pacman -Sc
fi

echo ":: Checking for orphaned packages"

mapfile -t orphaned_packages < <(pacman -Qtdq 2>/dev/null || true)

if ((${#orphaned_packages[@]} > 0)); then
	printf '  %s\n' "${orphaned_packages[@]}"
	run sudo pacman -Rns -- "${orphaned_packages[@]}"
else
	echo ":: No orphaned packages found"
fi

if pgrep -x dunst >/dev/null 2>&1 && command -v notify-send >/dev/null 2>&1; then
	notify-send --urgency=normal "Cleanup done!"
fi
