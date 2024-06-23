#!/bin/bash

# This is a simple and fancy reboot script :)
# Requires figlet and lolcat

main_function() {

echo "Reboot in..." | figlet | lolcat; 
echo "5..." | figlet | lolcat; 
sleep 1; 
echo "4..." | figlet | lolcat; 
sleep 1; 
echo "3..." | figlet | lolcat; 
sleep 1;
echo "2..." | figlet | lolcat;
sleep 1;
echo "1..." | figlet | lolcat;
sleep 1;  echo "See You Soon!" | figlet | lolcat; 
sleep 1; systemctl reboot

}

main_function
