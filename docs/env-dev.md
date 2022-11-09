# The Developoment Environement

## Development Install

Activate your environment.

```bash
conda activate jupyterlabextensions
```

Install the python package in development mode.

```bash
pip install -e .[test]
```

Link your development version of the extension with JupyterLab.

```bash
jupyter labextension develop . --overwrite
```

List the JupyterLab extensions.

```bash
jupyter labextension list
# JupyterLab v3.4.7
# /Users/echarles/opt/miniconda3/envs/jupyterlabextensions/share/jupyter/labextensions
#         jupyterlabextensions v0.1.0 enabled OK
#         jupyterlab_pygments v0.2.2 enabled OK (python, jupyterlab_pygments)
#         @jupyter-widgets/jupyterlab-manager v5.0.3 enabled OK (python, jupyterlab_widgets)
#
# Disabled extensions:
#     @jupyterlab/application-extension:logo
```

Server extension can be manually installed in develop mode.

```bash
jupyter server extension enable jupyterlabextensions
# Enabling: jupyterlabextensions
# - Writing config: /Users/echarles/opt/miniconda3/envs/jupyterlabextensions/etc/jupyter
#     - Validating jupyterlabextensions...
#       jupyterlabextensions 0.1.0 OK
#     - Extension successfully enabled.
```

Rebuild extension Typescript source after making changes in `shell 1`.

```bash
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension. With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

Run and watch the extension in shell 1.

```bash
jlpm watch
```

You are now ready to run and watch jupyterlab in `shell 2`.

```bash
# Look at the remote entry javascript, a webpack5 feature.
conda activate jupyterlabextensions && \
  jupyter lab \
    --watch \
    --ServerApp.token= \
    --ServerApp.jpserver_extensions="{'jupyterlabextensions': True}" \
    ./content
```

Open JupyterLab in your browser.

```bash
open http://localhost:8888/lab
```

If you have build jupyterlab from source.

```bash
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
conda activate jupyterlabextensions && \
  jupyter lab \
    --watch \
    --dev-mode \
    --ServerApp.token= \
    --ServerApp.jpserver_extensions="{'jupyterlabextensions': True}" \
    --extensions-in-dev-mode \
    ./content
```

You will need NodeJS to build the extension package. The `jlpm` command is JupyterLab's pinned version of [yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use `yarn` or `npm` in lieu of `jlpm`.

### Development Uninstall

```bash
# Server extension must be manually disabled in develop mode
jupyter server extension disable jupyterlabextensions
pip uninstall jupyterlabextensions
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlabextensions` within that folder.

## Troubleshoot

If you are seeing the frontend extension, but it is not working, check that the server extension is enabled.

```bash
pip list | grep jupyterlabextensions
```

```bash
jupyter server extension list
```

If the server extension is installed and enabled, but you are not seeing
the frontend extension, check the frontend extension is installed:

```bash
jupyter labextension list
```
