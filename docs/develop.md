# Develop

```bash
# If not yet done, clone this repository.
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example &&
  conda activate jupyterlabextensions 
```

```bash
# Build the extension and link for dev in shell 1.
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
