#!/bin/bash

# --------------------------------
# wgstatus.sh
# --------------------------------

# Get wireguard status and basic info
sudo -v
if [[ $(wg show | grep -c "peer:") -gt 0 ]]; then
	echo "connected"
    echo ""
    wgstatus
else
	echo "disconnected"
    echo ""
    wgstatus
fi

