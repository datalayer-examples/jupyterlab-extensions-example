# About

The audience of this repository is JupyterLab extension developers.

It aims to complement the existing documentation:

- The [ReadTheDocs](https://jupyterlab.readthedocs.io/en/latest).
- The [extension examples](https://github.com/jupyterlab/extension-examples) repository.

We try to sit in the top-right quadrant "How to guides".

<img src="https://documentation.divio.com/_images/overview.png"/>

(Source: https://documentation.divio.com)

This repository has been bootstrapped with the JupyterLab extension cookiecutter and is composed of a Python package named `jupyterlabextensions` for the server extension and a NPM package named `jupyterlabextensions` for the frontend extension.

```bash
cookiecutter \
  https://github.com/jupyterlab/extension-cookiecutter-ts \
  --checkout 3.0
```

For now, it runs on JupyterLab >= 3.0 <4.0.0, an update to the major breaking-API 4.0.0 is planned depending on the version 4 release timeline.
