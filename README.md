[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# JupyterLab Extension Examples

This repository has been bootstrapped with the JupyterLab extension cookiecutter.

```bash
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout 3.0
```

## Environment

```bash
conda deactivate && \
  conda remove -y --all -n jupyterlabextensions
# Create your conda environment.
conda create -y \
  -n jupyterlabextensions \
  python=3.9 \
  twine \
  nodejs=18.7.0 \
  yarn=1.22.19 \
  jupyter_packaging
conda activate jupyterlabextensions
```

```bash
# Install jupyterlab.
pip install jupyterlab==3.4.7
# ...or alternatively, clone and build jupyterlab from source.
git clone https://github.com/jupyterlab/jupyterlab --depth 1 -b master && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build && \
  cd ..
```

```bash
pip install ipywidgets==8.0.2
```

## Develop

```bash
# If not yet done, clone this repository.
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example
```

```bash
# Build the extension and link for dev in shell 1.
pip install -e .
jupyter labextension develop --overwrite
```

```bash
# List extensions.
jupyter labextension list
pip list | grep jupyterlabextensions
```

```bash
# Run and watch the extension in shell 1.
# jupyter labextension watch
yarn watch
```

```bash
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
conda activate jupyterlabextensions && \
  jupyter lab \
    --watch \
    --ServerApp.token= \
    --ServerApp.jpserver_extensions="{'jupyterlabextensions': True}" \
    ./examples
```

```bash
# If you have build jupyterlab from source.
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
conda activate jupyterlabextensions && \
  jupyter lab \
    --watch \
    --dev-mode \
    --ServerApp.token= \
    --ServerApp.jpserver_extensions="{'jupyterlabextensions': True}" \
    --extensions-in-dev-mode \
    ./examples
```

## Build

```bash
# Generate sourcemaps.
jupyter labextension build --development=True .
jupyter lab build --minimize=False
```

```bash
# Do not generate sourcemaps.
jupyter labextension build .
jupyter lab build
```

## Disable

```bash
# Read https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html#disabledextensions
# https://github.com/jupyterlab/jupyterlab/blob/d6c3857ac6ff27811f49fd63fcd529b763024f1f/packages/application-extension/src/index.tsx#L956-L972
jupyter labextension disable @jupyterlab/application-extension:logo
cat $(dirname $(which jupyter))/../etc/jupyter/labconfig/page_config.json
```

You can also deactivate a complete extension or a specific plugin with a definition in `package.json`.

```json
...
  "jupyterlab": {
    ...
    "disabledExtensions": [
      "@jupyterlab/application-extension:logo"
    ],
    ...
  }
...
```

## Publish

```bash
cd jupyterlabextensions && \
  yarn build:lib && \
  npm publish --access public
```

```bash
cd jupyterlabextensions && \
  pip install -e . && \
  python setup.py sdist bdist_wheel && \
  twine upload dist/*
```

## Use a Published Release

```bash
conda deactivate && \
  conda remove -y --all -n jupyterlabextensions-user
# Create your conda environment.
conda create -y \
  -n jupyterlabextensions-user \
  python=3.8 \
  nodejs=14.5.0
conda activate jupyterlabextensions-user
pip install --pre jupyterlab==3.0.5
```

```bash
pip install jupyterlab_widgets==1.0.0a6
jupyter labextension list
# Check the Extension Manager.
jupyter lab --notebook-dir=~/notebooks
```

```bash
# https://pypi.org/project/jupyterlab-geojs/#history
pip search "jupyterlab extension"
pip search "JupyterLab3"
```

```bash
pip install jupyterlabextensions
jupyter labextension list
jupyter lab --notebook-dir=~/notebooks
```

# Launch JupyterLab with a Theme

```bash
# See https://jupyterlab.readthedocs.io/en/stable/user/directories.html#overridesjson
cat << EOF >>~/.jupyter/lab/user-settings/overrides.json
{
  "@jupyterlab/apputils-extension:themes": {
    "theme": "JupyterLab Christmas"
  }
}
EOF
```

```bash
# Optionally.
mkdir -p ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension && \
  CONF="{ \"theme\": \"JupyterLab Christmas\" }" && \
  cat > ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension/themes.jupyterlab-settings  <<EOF
${CONF}
EOF
```

```bash
# JupyterLab will start with the defined theme.
jupyter lab
```

## TODO

- [ ] Update the Launcher page with something like e.g. https://github.com/fcollonval/jupyterlab-enhanced-launcher
- [ ] Strip down the variables.css to only the needed css?
- [ ] Bring more fancy ui like in https://github.com/timkpaine/jupyterlab_miami_nights: Search tool + neon billboard + Collapser + neon light + Scrollbar + FM-84's "Atlas" (compatible with webKit browsers) + A surprise in the presentation mode (Top menu --> View --> Presention mode)

## Credits

This folder contains souce code taken from following repositories under MIT or BSD-3-Clause license:

- https://github.com/deshaw/jupyterlab-execute-time
- https://github.com/ibqn/jupyterlab-codecellbtn
- https://github.com/jtpio/jupyterlab-cell-flash
- https://github.com/jtpio/jupyterlab-python-file
- https://github.com/jtpio/jupyterlab-theme-toggle
- https://github.com/jtpio/jupyterlab-topbar
- https://github.com/jupyterlab/extension-examples
- https://github.com/nersc/jupyterlab-recents
- https://github.com/voila-dashboards/voila
- https://github.com/yuvipanda/jupyterlab-nbmetadata
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab/benchmarks
- https://github.com/jupyterlab/jupyterlab-mp4
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab/benchmarks
- https://github.com/jtpio/jupyter-resource-usage
- https://github.com/jtpio/jupyterlab-system-monitor

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-certificate.png "")

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-table.png "")

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime.png "")

## JupyterLab Extensions Example

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
