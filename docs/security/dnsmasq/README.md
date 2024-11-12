## dnsmasq and dnssec
This documentation is about how `secure.sh` configures `dnsmasq` and `dnssec` on new install.

#### Configuration
First, it looks for a file called `dnsmasq.conf` and uncomments the `dnssec` and `bind-interfaces` options
both for security and usability reasons.
Then, it creates a file `/etc/NetworkManager/dnsmasq.d/dnssec.conf` with a permission set of 600
and enables `dnsmasq.service`.

- The `dnssec.conf` file is stored in `docs/NetworkManager/dnsmasq.d/` and is meant for `/etc/NetworkManager/dnsmasq.d/`
- The `dnsmasq.conf` is stored in `/etc/`

#### Quick links
- [dnssec.conf](https://github.com/g5ostXa/hyprarch2/blob/master/docs/NetworkManager/dnsmasq.d/dnssec.conf)
- [secure.sh](https://github.com/g5ostXa/hyprarch2/blob/master/src/.install/secure.sh)

