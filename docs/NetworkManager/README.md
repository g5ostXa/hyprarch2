## Network Manager
This is the documentation and configuration files for NetworkManager's relation to specific `DNS`, `VPN`, `FIREWALL` and potentially other networking components on `hyprarch2`.

The packages used, vpn propviders, dns managers, and everything in between can change often and will be reflected in their dedicated documentations.

> [!NOTE]
> - These configutations provide both security and functionality between Network Manager and other networking tools that are used on `hyprarch2`
> - For now, only `dnsmasq.d/dnssec.conf` is automatically managed by the installer. It is required to enable `dnssec` with `dnsmasq` along with another file `/etc/dnsmasq.conf`, which is not stored here.
> - `conf.d/` contains configs realated to `wireguard` and `openresolv`, both of which are not yet in the documentation or managed by the installer.
> - When using these configurations, one must make sure they apply to right permissions to files and folders, which are owned by root. For example, `dnssec.conf` needs a permission set of 600, and will not be giving that by default upon being created or moved in `/etc/NetworkManager/dnsmasq.d/`
