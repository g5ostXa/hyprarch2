## Network Manager
> [!NOTE]
> - For now, only `dnsmasq.d/dnssec.conf` will be set in your new install and is needed for `dnssec anchors` to work.
> - If you do not want to use `dnsmasq`, you can remove `/etc/NetworkManager/dnsmasq.d/dnssec.conf` later on.
> - When using these configurations, one must make sure they apply to right permissions to files and folders, which are owned by root.
>   - For example, `dnssec.conf` needs a permission set of 600, and won't be giving that by default upon being created or moved in `/etc/NetworkManager/dnsmasq.d/`
