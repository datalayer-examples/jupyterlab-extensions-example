# Test the Server

This extension is using [Pytest](https://docs.pytest.org/) for Python code testing.

Install test dependencies (needed only once):

```bash
pip install -e ".[test]"
```

To execute them, run:

```bash
pytest -vv -r ap --cov jupyterlabextensions
```
