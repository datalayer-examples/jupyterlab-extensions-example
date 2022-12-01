# Test the Server

This extension is using [Pytest](https://docs.pytest.org/) for server side Python code testing.

Install test dependencies (needed only once).

```bash
pip install -e .[test]
```

To execute the server tests, run the following command.

```bash
pytest -vv -r ap --cov jupyterlabextensions
```

This should return an output like this.

```
...
---------- coverage: platform darwin, python 3.9.13-final-0 ----------
Name                                          Stmts   Miss  Cover
-----------------------------------------------------------------
jupyterlabextensions/__init__.py                 15      1    93%
jupyterlabextensions/_version.py                  2      0   100%
jupyterlabextensions/handlers.py                 14      0   100%
jupyterlabextensions/kernel_memory.py            46     46     0%
jupyterlabextensions/tests/__init__.py            0      0   100%
jupyterlabextensions/tests/test_handlers.py       6      0   100%
-----------------------------------------------------------------
TOTAL                                            83     47    43%

============================================================ short test summary info =============================================================
PASSED jupyterlabextensions/tests/test_handlers.py::test_get_example
========================================================= 1 passed, 3 warnings in 0.58s ==========================================================
```
