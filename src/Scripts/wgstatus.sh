#!/bin/bash

# --------------------------------
# wgstatus.sh
# --------------------------------
if [[ $(wg show | grep -c "peer:") -gt 0 ]]; then
	echo ""
	echo "VPN status:"
	echo "connected"
	echo ""
	wg show
else
	echo ""
	echo "VPN status:"
	echo "disconnected"
	echo ""
	wg show
fi
