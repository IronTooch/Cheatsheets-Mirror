Troubleshooting
===============================================================================

Imports
-------------------------------------------------------------------------------

* Remember each folder needs an `__init__.py`, even if it's blank
* from src.folder1.folder2.file3Class import file3Class
  * ./tests/TestFile.py importing from ./src/folder1/folder2/file3Class.py

Troubleshooting Import Issues
-------------------------------------------------------------------------------

* Is there an `__init__.py` in each directory?
* Is the PYTHONPATH environment set to include the `.` path?
  * e.g. `export PYTHONPATH=.` or `PYTHONPATH=.:/usr/local/lib/python`

Testing Import Issues
-------------------------------------------------------------------------------



References
-------------------------------------------------------------------------------

* [MY_EASY_TITLE](https://my_page.com)
