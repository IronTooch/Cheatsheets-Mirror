---
id: ansible-dothis
slug: /it/tools/ansible/dothis
description: TODO
---


Do This, Not That
===============================================================================

Setting Flags based on a List
-------------------------------------------------------------------------------


Don't do this:

```yaml

# my_flag_list is ['my_flag_1','my_flag_3']

# my_main.yml
- name: Set all Flags
  include_tasks: set_flags.yml
  loop: "{{ my_flag_list }}"
  loop_control:
    loop_var: flag

# set_flags.yml
- name: Set Flag 1
  set_fact:
    my_flag_1: true
  when: flag == "my_flag_1"

- name: Set Flag 2
  set_fact:
    my_flag_2: true
  when: flag == "my_flag_2"

...

```

Do this instead:

```yaml

# my_flag_list is ['my_flag_1','my_flag_3']

# my_main.yml
- name: Set all Flags
  set_fact:
    my_flag_1: "{{ 'my_flag_1' in my_flag_list }}"
    my_flag_2: "{{ 'my_flag_2' in my_flag_list }}"

...

```

Other Things to check
-------------------------------------------------------------------------------

* Use fact caching whenever posisble
* Use run_once to retrieve API tokens that will be used for multiple servers
* Use webhook notification endpoints in AAP
* Use Module Defaults if appropriate
* Use Imports instead of Includes if possible
* Consideration: Lots of skipped tasks are not necessary
  * Skips mean "Don't do it"
  * Ansible's idempotent pattern means you should be able to re-run tasks more often than not
* Consideration: Use template module to build API payloads, rather than build a payload through set_facts process
* Use default and ternary variable evaulation to minimize set_fact/when patterns

Variable Assignment Locations
-------------------------------------------------------------------------------

* Does the same job template always have the same variable assignment?
  * Use extra_vars in job_templates.yml instead, or defaults
* Is the variable the same no matter what template is calling it, or what environment is being used?
  * Use defaults/mian.yml inside the role
* Does the variable only effect a given operating system or version?
  * Use vars folder inside role, and import_vars the operating system or version
* Does the variable only effect a given environment?
  * Use vars folder inside role, and import_vars the environment variables 
* Are you using multiple set_facts in a row?
  * Consider consolidating them, unless they are explicitly dependent on something the previous set_fact is doing that operates externally, or it over
* Are you setting a fact one way if a value is true, and another if a value is undefined?
  * Use Jinja default
* Are you setting a fact one way if the value is true, and another if the value is false?
  * Use ternary operator
* Are you setting a value one way if true, another if false, and a third way if undefined?
  * Use ternary operator with three options

