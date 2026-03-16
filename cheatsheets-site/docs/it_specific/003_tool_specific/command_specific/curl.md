---
id: curl
slug: /it/tools/command_specific/curl
description: TODO
---

Curl
===============================================================================

a

Description
-------------------------------------------------------------------------------

a

Options
--------------------------------------------------------------------------------

| Option                          | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `--basic`                       | TODO   |
| `-d, --data \<data>`            | TOOD     |
| `--digest`                      |                                                |
| `-f, --fail`                    |                                                |
| `-G, --get`                     |                                                |
| `-I, --head`                    |                                                |
| `-H, --header <header/@file>`   |                                                |
| `-i, --include`                 |                                                |
| `-k, --insecure`                |                                                |
| `--interface <name>`            |                                                |
| `--json <data>`                 |                                                |
| `--key <key>`                   |                                                |
| `--location-trusted`            |                                                |
| `-L, --location`                |                                                |
| `-N, --no-buffer`               |                                                |
| `--no-clobber`                  |                                                |
| `--no-progress-meter`           |                                                |
| `--ntlm`                        |                                                |
| `--oauth2-bearer <token>`       |                                                |
| `-o, --output <file>`           |                                                |
| `-#, --progress-bar`            |                                                |
| `--proxy-insecure`              |                                                |
| `--raw`                         |                                                |
| `-e, --referer <URL>`           |                                                |
| `-X, --request <method>`        |                                                |
| `-s, --silent`                  |                                                |
| `--stderr <file>`               |                                                |
| `--styled-output`               |                                                |
| `--url <url>`                   |                                                |
| `-u, --user <user:password>`    |                                                |
| `-v, --verbose`                 |                                                |
| `-w, --write-out <format>`      |                                                |

Authenticated Curl call in Bash
-------------------------------------------------------------------------------

```bash

export un='my_username';
export pw='my_password';
alias curl_post='curl -k -s -X POST -H '\''Content-Type: application/json'\'''

curl_post -d "$basic_auth_payload" 'http://my.server/api_endpoint'
export my_token=$(curl_post -d "$basic_auth_payload" 'http://my.server/token_endpoint')
export token_auth_payload='{"token": "'$my_token'"}'

```


References
-------------------------------------------------------------------------------

* [Curl Manpage](https://curl.se/docs/manpage.html)
