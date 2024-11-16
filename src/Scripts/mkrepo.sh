#!/bin/bash

# --------------------------------------------------
# mkrepo.sh | By g5ostXa (2024)
# --------------------------------------------------

# IMPORTANT:
# Run this script in the same directory you want your new repository.
# DO NOT run as root.
# Arguments: --repo-name
#            --repo-url
#            --git-user
#            --git-client
#
# Usage examples:
# 	./mkrepo.sh --repo-name=repo123 --repo-url=https://gitlab.com/alexa/repo123.git --git-user=alexa --git-client=gitlab
#   ./mkrepo.sh --repo-name=firefox --repo-url=https://github.com/erika/firefox.git --git-user=erika --git-client=github

for ARG in "$@"; do
	case $ARG in
	--repo-name=*)
		REPO_NAME="${ARG#*=}"
		shift
		;;
	--repo-url=*)
		REPO_URL="${ARG#*=}"
		shift
		;;
	--git-user=*)
		GIT_USER="${ARG#*=}"
		shift
		;;
	--git-client=*)
		GIT_CLIENT="${ARG#*=}"
		shift
		;;
	*)
		echo "Unknown argument: $ARG"
		echo "Usage: $0 --repo-name=NEWREPO --repo-url=REPO_URL --git-user=USERNAME --git-client=GIT_CLIENT"
		exit 1
		;;
	esac
done

if ! command -v git >/dev/null 2>&1; then
	echo "git is not installed..."
	exit 1
fi

if [ -z "$REPO_NAME" ] || [ -z "$REPO_URL" ] || [ -z "$GIT_USER" ] || [ -z "$GIT_CLIENT" ]; then
	echo "Usage: $0 --repo-name=NEWREPO --repo-url=REPO_URL --git-user=USERNAME --git-client=GIT_CLIENT"
	exit 1
fi

set -e

mkdir "$REPO_NAME"
cd "$REPO_NAME"

git init
git branch -M main

touch README.md
echo "$REPO_NAME" >>README.md

git add .
git commit -S -m "initial"
git remote add origin "$REPO_URL"
git push --set-upstream git@"$GIT_CLIENT".com:"$GIT_USER"/"$REPO_NAME".git
