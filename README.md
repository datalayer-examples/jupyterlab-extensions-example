[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# JupyterLab Extensions Example

> Extensions example to better understand the options to extend JupyterLab.

Please [read the documentation](https://github.com/datalayer-examples/jupyterlab-extensions-example/blob/main/docs/index.md) to install, use and know more on the internals of these extensions.

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-highlight.png" />
</div>

<hr/>

This repository has been bootstrapped with the JupyterLab extension cookiecutter.

```bash
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout 3.0
```

The following content has been generated by the cookiecutter.

[![Github Actions Status](https://github.com/datalayer-examples/jupyterlab-extensions-example/workflows/Build/badge.svg)](https://github.com/datalayer-examples/jupyterlab-extensions-example/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/datalayer-examples/jupyterlab-extensions-example/main?urlpath=lab)

A JupyterLab extension.

This extension is composed of a Python package named `jupyterlabextensions`
for the server extension and a NPM package named `jupyterlabextensions`
for the frontend extension.

## Requirements

- JupyterLab >= 3.0

## Install

To install the extension, execute:

```bash
pip install jupyterlabextensions
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlabextensions
```

## Troubleshoot

If you are seeing the frontend extension, but it is not working, check
that the server extension is enabled:

```bash
jupyter server extension list
```

If the server extension is installed and enabled, but you are not seeing
the frontend extension, check the frontend extension is installed:

```bash
jupyter labextension list
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlabextensions directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Server extension must be manually installed in develop mode
jupyter server extension enable jupyterlabextensions
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
# Server extension must be manually disabled in develop mode
jupyter server extension disable jupyterlabextensions
pip uninstall jupyterlabextensions
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlabextensions` within that folder.

### Testing the extension

#### Server tests

This extension is using [Pytest](https://docs.pytest.org/) for Python code testing.

Install test dependencies (needed only once):

```sh
pip install -e ".[test]"
```

To execute them, run:

```sh
pytest -vv -r ap --cov jupyterlabextensions
```

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro/) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.

### Packaging the extension

See [RELEASE](RELEASE.md)

<hr/>

## Credits

## ⚖️ License

This repository contains source code taken from following repositories under MIT or BSD-3-Clause license, listed here for copyright.

- https://github.com/deshaw/jupyterlab-execute-time
- https://github.com/ibqn/jupyterlab-codecellbtn
- https://github.com/jtpio/jupyter-resource-usage
- https://github.com/jtpio/jupyterlab-cell-flash
- https://github.com/jtpio/jupyterlab-python-file
- https://github.com/jtpio/jupyterlab-system-monitor
- https://github.com/jtpio/jupyterlab-theme-toggle
- https://github.com/jtpio/jupyterlab-topbar
- https://github.com/jupyterlab/benchmarks
- https://github.com/jupyterlab/benchmarks
- https://github.com/jupyterlab/extension-examples
- https://github.com/jupyterlab/jupyterlab-mp4
- https://github.com/jupyterlab/jupyterlab_xkcd
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab-contrib/jupyterlab-plugin-graph
- https://github.com/nersc/jupyterlab-recents
- https://github.com/voila-dashboards/voila
- https://github.com/yuvipanda/jupyterlab-nbmetadata

Copyright (c) 2022 Datalayer, Inc.

Released under the terms of the BSD-3 license (see [LICENSE](./LICENSE)).
