#!/usr/bin/env bash

# // ======= virtkill.sh ========

kill_destroy_disable() {
	sudo virsh net-destroy default
	sudo systemctl disable --now libvirtd.socket
	sudo systemctl disable --now libvirtd-admin.socket
	sudo systemctl disable --now libvirtd-ro.socket
	sudo systemctl disable --now libvirtd.service
	sudo systemctl disable --now virtlogd.service
	sudo systemctl disable --now virtlogd.socket
}

kill_destroy_disable
