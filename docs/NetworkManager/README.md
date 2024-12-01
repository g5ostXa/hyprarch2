## Network Manager
> [!NOTE]
> - For now, only `dnsmasq.d/dnssec.conf` is automatically managed by the installer.
> - When using these configurations, one must make sure they apply to right permissions to files and folders, which are owned by root. For example, `dnssec.conf` needs a permission set of 600, and will not be giving that by default upon being created or moved in `/etc/NetworkManager/dnsmasq.d/`
