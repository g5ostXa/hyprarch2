#!/bin/bash

# This is a simple and fancy poweroff script :)
# Requires figlet and lolcat

main_function() {

echo "PowerOff in..." | figlet | lolcat; 
echo "5..." | figlet | lolcat; 
sleep 1; 
echo "4..." | figlet | lolcat; 
sleep 1; 
echo "3..." | figlet | lolcat; 
sleep 1;
echo "2..." | figlet | lolcat;
sleep 1;
echo "1..." | figlet | lolcat;
sleep 1;  echo "Good Bye!" | figlet | lolcat; 
sleep 1; systemctl poweroff

}

# Call functions
main_function 
