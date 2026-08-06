#!/usr/bin/env bash

function check_dependencies() {

	local -a commands=(
		"uwsm"
		"hyprland"
	)
	for depends in "${commands[@]}"; do
		if ! command -v >/dev/null 2>&1; then
			echo ":: Command not found: $depends"
			exit 1
		fi
	done
}

check_dependencies
uwsm start hyprland
