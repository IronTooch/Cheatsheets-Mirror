---
id: extensions
slug: /it/tools/linux/issue
description: TODO
---

/etc/issue File
===============================================================================

```
    4 or 4{interface}
           Insert the IPv4 address of the specified network interface
           (for example: \4{eth0}). If the interface argument is not
           specified, then select the first fully configured (UP,
           non-LOCALBACK, RUNNING) interface. If no configured interface
           is found, fall back to the IP address of the machine’s
           hostname.

       6 or 6{interface}
           The same as \4 but for IPv6.

       b
           Insert the baudrate of the current line.

       d
           Insert the current date.

       e or e{name}
           Translate the human-readable name to an escape sequence and
           insert it (for example: \e{red}Alert text.\e{reset}). If the
           name argument is not specified, then insert \033. The
           currently supported names are: black, blink, blue, bold,
           brown, cyan, darkgray, gray, green, halfbright, lightblue,
           lightcyan, lightgray, lightgreen, lightmagenta, lightred,
           magenta, red, reset, reverse, yellow and white. All unknown
           names are silently ignored.

       s
           Insert the system name (the name of the operating system).
           Same as 'uname -s'. See also the \S escape code.

       S or S{VARIABLE}
           Insert the VARIABLE data from /etc/os-release. If this file
           does not exist then fall back to /usr/lib/os-release. If the
           VARIABLE argument is not specified, then use PRETTY_NAME from
           the file or the system name (see \s). This escape code can be
           used to keep /etc/issue distribution and release independent.
           Note that \S{ANSI_COLOR} is converted to the real terminal
           escape sequence.

       l
           Insert the name of the current tty line.

       m
           Insert the architecture identifier of the machine. Same as
           uname -m.

       n
           Insert the nodename of the machine, also known as the
           hostname. Same as uname -n.

       o
           Insert the NIS domainname of the machine. Same as hostname
           -d.

       O
           Insert the DNS domainname of the machine.

       r
           Insert the release number of the OS. Same as uname -r.

       t
           Insert the current time.

       u
           Insert the number of current users logged in.

       U
           Insert the string "1 user" or "<n> users" where <n> is the
           number of current users logged in.

       v
           Insert the version of the OS, that is, the build-date and
           such.
```