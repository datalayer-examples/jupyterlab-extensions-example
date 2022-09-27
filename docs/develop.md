# Develop

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
