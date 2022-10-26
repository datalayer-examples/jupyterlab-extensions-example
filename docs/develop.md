# Develop

## Pepare

```bash
# If not yet done, clone this repository.
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example
# Create your environment, see environment.md.
# Activate your environment
conda activate jupyterlabextensions
```

```bash
# Build the extension and link for development.
pip install -e .[test]
jupyter labextension develop --overwrite
```

```bash
# List extensions.
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

```bash
# Run and watch the extension in shell 1.
# jupyter labextension watch
jlpm watch
```

```bash
# Run and watch jupyterlab in shell 2.
# Look at the remote entry javascript, a webpack5 feature.
conda activate jupyterlabextensions && \
  jupyter lab \
    --watch \
    --ServerApp.token= \
    --ServerApp.jpserver_extensions="{'jupyterlabextensions': True}" \
    ./content
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
    ./content
```

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
