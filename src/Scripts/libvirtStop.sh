#!/bin/bash

function_1() {

sudo virsh net-destroy default && killall virt-manager;
sudo systemctl disable --now libvirtd.service;
sudo systemctl disable --now libvirtd.socket;
sudo systemctl disable --now libvirtd-admin.socket;
sudo systemctl disable --now libvirtd-ro.socket;

}

# Call functions
function_1
