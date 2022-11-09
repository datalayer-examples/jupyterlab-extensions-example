# Test the Server

This extension is using [Pytest](https://docs.pytest.org/) for Python code testing.

Install test dependencies (needed only once).

```bash
pip install -e ".[test]"
```

To execute the server tests, run the following command.

```bash
pytest -vv -r ap --cov jupyterlabextensions
```
