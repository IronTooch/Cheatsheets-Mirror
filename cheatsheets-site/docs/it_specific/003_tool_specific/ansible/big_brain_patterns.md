---
id: ansible-patterns
slug: /it/tools/ansible/patterns
description: TODO
---

Cheatsheets
===============================================================================

Simplify over-complicated expressions
-------------------------------------------------------------------------------

**vars/main.yml**

```yaml
# vars/main.yml
stat_output:
  stdout: ""
dir_exists: "{{ stat_output['stat']['exists'] }}"
```

**tasks/main.yml**

```yaml
# tasks/main.yml
- name: Stat file
  stat:
    path: my_file_1
  register: stat_output

- name: Stat File Output
  ansible.builtin.debug:
    msg: "{{ dir_exists }}"
```
