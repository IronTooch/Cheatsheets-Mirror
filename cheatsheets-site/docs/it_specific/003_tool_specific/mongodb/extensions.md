---
id: extensions
slug: /it/tools/mongodb/installation
description: TODO
---


Installation
===============================================================================

Ubuntu
-------------------------------------------------------------------------------


Troubleshooting
-------------------------------------------------------------------------------

If MongoDb doesn't start on a virtualized platform

Check to see if AVX support is enabled

```bash
cat /proc/cpuinfo | grep avx
```

If it is not, in Proxmox, change the processor type to `host` or `x86-64-v3`