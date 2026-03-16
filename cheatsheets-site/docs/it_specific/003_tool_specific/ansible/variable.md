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


Getting results after pushing a variable into a template
-------------------------------------------------------------------------------

`lookup('ansible.builtin.template', 'my_formating_template.j2')`

Adding result to already created JSON
-------------------------------------------------------------------------------

`my_collection_variable | community.general.lists_mergeby(my_new_data, 'my_merge_key', list_merge='append')`