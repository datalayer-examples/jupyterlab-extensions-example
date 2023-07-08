# The Base Environment

Before developing, ensure you have an environment with the needed libraries.

## Clone the repository

```bash
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example
```

## Create a conda environment

```bash
conda deactivate && \
  conda remove -y --all -n jupyterlabextensions
conda create -y \
  -n jupyterlabextensions \
  python=3.9 \
  nodejs=18.16.1 \
  jupyter_packaging \
  twine
conda activate jupyterlabextensions
```

## Install the Jupyter packages

Install JupyterLab 4 and Notebook 7.

```bash
pip install \
  jupyterlab==4.0.0 \
  notebook==7.0.0a12
```

Alternatively, clone and build JupyterLab from source.

```bash
git clone https://github.com/jupyterlab/jupyterlab --depth 1 -b v4.0.0 && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build
```

Install IpyWidgets 8, this is needed by some of the extension examples.

```bash
pip install ipywidgets==8.0.4
```
