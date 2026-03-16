Enumerations
===============================================================================

Aliases (like simple strucs)
-------------------------------------------------------------------------------


```python

  # Instead of this...
  def process_data(data: dict[str, list[int]]) -> None:

  # Do this:
  DataDict = Dict[str, List[int]]
  def process_data(data: DataDict) -> None:

```

Tools
-------------------------------------------------------------------------------


<!-- * https://www.pythontutorial.net/python-oop/python-enum-auto/ -->
* 




Declaring Enums
-------------------------------------------------------------------------------

```python

from enum import Enum

class DaysOfWeek(Enum):
    SUNDAY = 1
    MONDAY = 2
    TUESDAY = 3


```

You can declare multiple keys to have the same value as well:

```python

from enum import Enum

class HttpCodes(Enum):

    OK = 2
    CREATED = 2
    ACCEPTED = 2

    ERROR = 4
    UNAUTHORIZED = 4
    FORBIDDEN = 4

```

Using Enums
-------------------------------------------------------------------------------

> print(DaysOfWeek.MONDAY.name) ---> "Monday"
> print(DaysOfWeek.MONDAY.value) ---> "2"
> print(DaysOfWeek['Monday']) --> DaysOfWeek.MONDAY
> DaysOfWeek(2) = DaysOfWeek.MONDAY

Iterating Over Enums
-------------------------------------------------------------------------------

```python

for day in DaysOfWeek:
  print(day)

```

Enum Decorator
-------------------------------------------------------------------------------

@enum.unique - Ensures two different enums don't have the same value
auto() - sets values, starting at 1 and creating a sequence

References
-------------------------------------------------------------------------------

<!-- * [Python enum auto]([https://my_page.com](https://www.pythontutorial.net/python-oop/python-enum-auto/)) -->
* [Customize and Extend Python Enum Class](https://www.pythontutorial.net/python-oop/python-enum-class/)
