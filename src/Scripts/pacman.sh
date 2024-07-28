#!/bin/bash

if grep -Fq "#ParallelDownloads" /etc/pacman.conf; then
     sudo sed -i 's/^#ParallelDownloads/ParallelDownloads/' /etc/pacman.conf
fi

if grep -Fxq "#Color" /etc/pacman.conf; then
     sudo sed -i 's/^#Color/Color/' /etc/pacman.conf
fi

if grep -Fxq "#VerbosePkgLists" /etc/pacman.conf; then
      sudo sed -i 's/^#VerbosePkgLists/VerbosePkgLists/' /etc/pacman.conf
fi

if grep -Fxq "ILoveCandy" /etc/pacman.conf; then
    exit
else
     sudo sed -i '/^ParallelDownloads = .*/a ILoveCandy' /etc/pacman.conf
fi