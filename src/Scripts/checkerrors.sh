#!/bin/bash

echo CheckErrors | figlet

check_errors() {
echo "Checking for system errors with root..."
sudo journalctl -p 3 -b | lolcat
echo "Checking for sys errors as user..."
journalctl -p 3 -b | lolcat
echo "Checking systemd for any failed services"
systemctl --failed | lolcat

}

check_errors
