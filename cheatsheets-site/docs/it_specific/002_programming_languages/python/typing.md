Typing Nuances
===============================================================================

Self Type
-------------------------------------------------------------------------------

Supported
Use the Self type to reference a class name within the class
First, `from typing import Any, Self`

Then, to use

```python

from typing import Any, Self

class MyClass:

  def my_func(self, item: Any) -> Self:
    self.item.append(item)
    return self

```

Cleaning Up Types
-------------------------------------------------------------------------------

You can just declare types that ar esimplificatoins of other types

```python

MyComplexType = Iterable[Map[str,str]]

```

```python

type ListOrSet[T] = list[T] | set[T]

```

You can use TypeVar to clean up typing

```python

from typing import TypeVar

TMyWeirdType = TypeVar("TMyWeirdType", bound="MyWeirdType")

@dataclass
class MyWeirdType:
  first_var: int
  second_var: int

  def my_func(self: TMyWeirdType) -> TMyWeirdType:
    print (self.first_var)
    return self

```

Use this for empty or something

```python

def foo(x: str | int) -> None: ...
def foo(x: str | None) -> int | None: ...

```

Named Tuples
-------------------------------------------------------------------------------

```python

from typing import NamedTuple

class MyClass(NamedTuple):
  first_var: str
  second_var: str

```

TypedDict
-------------------------------------------------------------------------------

```python

from typing import TypedDict

class MyClass(NamedTuple):
  first_var: str
  second_var: int

```

References
-------------------------------------------------------------------------------

* [Self Class](https://typing.readthedocs.io/en/latest/spec/generics.html#self)
* [Type Aliases](https://typing.readthedocs.io/en/latest/spec/aliases.html)
