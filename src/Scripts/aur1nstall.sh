#!/bin/bash

#----------------------------------------------
### AUR package install script
#----------------------------------------------

# Before using this script, please edit the value of the variable "pkg_name"...  

# Variables
hookdir="/etc/pacman.d/hooks/"
pkg_name=""

function_1() {

    cd "$hookdir";
    sudo cp firejail.hook firejail.hook.bak && sudo rm -rf firejail.hook;
    cd "$HOME"; cd;
    
}        

    sudo firecfg --clean && paru -S "$pkg_name";
    sudo firecfg --clean && paru -S "$pkg_name";

function_2() {
    
    cd "$hookdir";
    sudo cp firejail.hook.bak firejail.hook && sudo rm -rf firejail.hook.bak;
    cd "$HOME"; cd && sudo firecfg;

}

# Call functions
function_1
function_2







