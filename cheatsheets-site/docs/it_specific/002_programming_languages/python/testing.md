---
id: python-testing
slug: /it/programming/python/testing
description: TODO
---

Testing / TDD
===============================================================================

Tools
-------------------------------------------------------------------------------

* Pytest
  * Test Classes must be in ./tests directory
  * Test Filenames must be have the `_test.py` suffix, e.g. `MyBigTestSuite_test.py`
  * Test Classes must be prefixed with `Test`
  * Tests themselves must be functions, prefixed with `test_`

```python
# test_with_unittest.py

import pytest
from src.settings_comparator.FileOperations.QueueBackupReader import QueueBackupReader

class TestQueueBackupReader:

    def test_isLastBackupLineEmpty(self):
        strTestStr: str = ""
        bolResult: bool = QueueBackupReader.isLastBackupLine(strTestStr)
        assert bolResult == False
```

Exceptions


```python

import pytest

def test_zero_division():
    with pytest.raises(ZeroDivisionError):
        1 / 0

import pytest


def myfunc():
    raise ValueError("Exception 123 raised")


def test_match():
    with pytest.raises(ValueError, match=r".* 123 .*"):
        myfunc()

```

Output
```
capfd

Tutorial: How to capture stdout/stderr output

capfd()[source]

    Enable text capturing of writes to file descriptors 1 and 2.

    The captured output is made available via capfd.readouterr() method calls, which return a (out, err) namedtuple. out and err will be text objects.

    Returns an instance of CaptureFixture[str].

    Example:

    def test_system_echo(capfd):
        os.system('echo "hello"')
        captured = capfd.readouterr()
        assert captured.out == "hello\n"

capsys

Tutorial: How to capture stdout/stderr output

capsys()[source]

    Enable text capturing of writes to sys.stdout and sys.stderr.

    The captured output is made available via capsys.readouterr() method calls, which return a (out, err) namedtuple. out and err will be text objects.

    Returns an instance of CaptureFixture[str].

    Example:

    def test_output(capsys):
        print("hello")
        captured = capsys.readouterr()
        assert captured.out == "hello\n"

```

References
-------------------------------------------------------------------------------

* [MY_EASY_TITLE](https://my_page.com)
