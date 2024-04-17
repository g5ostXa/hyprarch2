#!/bin/bash

#----------------------------------------------
### AUR UPDATES
#----------------------------------------------

# Variables
hookdir="/etc/pacman.d/hooks/"

function_1() {

    cd "$hookdir";
    sudo cp firejail.hook firejail.hook.bak && sudo rm -rf firejail.hook;
    cd "$HOME";
    
}

    sudo firecfg --clean && paru;
    sudo firecfg --clean && paru;

function_2() {
    
    cd "$hookdir";
    sudo cp firejail.hook.bak firejail.hook && sudo rm -rf firejail.hook.bak;
    cd "$HOME" && sudo firecfg;

}

# Call functions
function_1
function_2
