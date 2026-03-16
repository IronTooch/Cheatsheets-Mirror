---
id: netplan
slug: /it/general/os/ubuntu/netplan
sidebar_position: 1
description: TODO
---

Networking / Netplan
===============================================================================

Wireless Configuration
-------------------------------------------------------------------------------

`/etc/netplan/03-wireless-init.yaml`
```yaml
network:
  wifis:
    wlan0:
      dhcp4: true
      optional: true
      access-points:
        "My-Sweet-Wifi-Network":
          hidden: true
          password: "My-Sweet-Password"
```

References
-------------------------------------------------------------------------------

* [MY_EASY_TITLE](https://my_page.com)
