#!/usr/bin/env bash

# Remove existing Go directories

godirs=(
	"$HOME/go"
	"$HOME/.config/go"
	"$HOME/local/go"
)
for godirs in ${godirs[0]}; do
	if [ -d "$godirs" ]; then
		sudo rm -rf "$godirs"
		echo ";; Removed $godirs"
	else
		echo ";; Nothing to be removed..."
	fi
done

# Clean install Go dirs, packages and libraries
sudo pacman -Rns go && sudo pacman -Sc
paru && sudo pacman -S go

# Set GOPATH
echo ";; Important: Set GOPATH in ~/.bashrc:"
echo ";; Add these:\n"
echo ";; export GOPATH=$HOME/go\n"
echo ";; export PATH=$PATH:$GOPATH/bin"
sleep 2.5

# Install / Update toolchain
go install go.uber.org/mock/mockgen@latest
go install honnef.co/go/tools/cmd/staticcheck@latest
go install github.com/air-verse/air@latest
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
go install golang.org/x/tools/cmd/stringer@latest
go install golang.org/x/tools/cmd/goimports@latest
go mod tidy
