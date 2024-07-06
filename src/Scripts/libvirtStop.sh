#!/bin/bash

kill_destroy_disable_fire() {
sudo virsh net-destroy default
killall virt-manager
sudo systemctl disable --now libvirtd.service
sudo systemctl disable --now libvirtd.socket
sudo systemctl disable --now libvirtd-admin.socket
sudo systemctl disable --now libvirtd-ro.socket
sudo firecfg

}

kill_destroy_disable_fire
