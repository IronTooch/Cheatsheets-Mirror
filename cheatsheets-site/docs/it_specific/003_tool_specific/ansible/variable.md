---
id: ansible-variables
slug: /it/tools/ansible/variables
description: TODO
---

Variables
===============================================================================

Breaking Up Variable files
-------------------------------------------------------------------------------

1. After creating new role, delete `/vars/main.yml` and `/defaults/main.yml`
2. Create `main` folder in each, e.g. `/vars/main/` and `/defaults/main`
3. Each file put into that new `main` folder will be imported, e.g. `/vars/main/myfile1.yml` , `/vars/main/myfile2.yml`


Precedence
-------------------------------------------------------------------------------

a

Checking if result is in list
-------------------------------------------------------------------------------

`my_list: ['cats', 'dogs']`
`{{ 'cats' in my_list }}`


Use template to simplify variable assignment
-------------------------------------------------------------------------------

```yaml
- name: Set fact based on more complicated template data
  ansible.builtin.set_fact:
    my_complex_fact: "{{ lookup('ansible.builtin.template', 'my_template.j2') }}
  var:
    my_template_var: "value of foo"

```

`lookup('ansible.builtin.template', 'my_formating_template.j2')`

Adding result to already created JSON
-------------------------------------------------------------------------------

`my_collection_variable | community.general.lists_mergeby(my_new_data, 'my_merge_key', list_merge='append')`

Use variable at play level
-------------------------------------------------------------------------------

```yaml

- name: My example task within a play
  ansible.builtin.template:
    src: my_sweet.template.yml.j2
    dest: /etc/my_app/config_file
  vars:
    my_first_var: "foo"
    my_second_var: "{{ bar }}"
```