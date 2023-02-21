# Continuous Integration

The CI workflows are listed on https://github.com/datalayer-examples/jupyterlab-extensions-example/tree/main/.github/workflows.

## Build

This workflow builds JupyterLab, runs a few sanity checks and then packages.

```bash
python -m pip install .[test]
pytest -vv -r ap --cov jupyterlabextensions
jupyter server extension list
jupyter server extension list 2>&1 | grep -ie "jupyterlabextensions.*OK"
jupyter labextension list
jupyter labextension list 2>&1 | grep -ie "jupyterlabextensions.*OK"
python -m jupyterlab.browser_check
set -eux
pip install build
python -m build
pip uninstall -y "jupyterlabextensions" jupyterlab
```

## Check Release

Check Release.

TODO Fix CI `Check Release` workflow.

## Binder on Pull Request

Binder on Pull Request.

## Update Integration Tests

Update Integration Tests.
