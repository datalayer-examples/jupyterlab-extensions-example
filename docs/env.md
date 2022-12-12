# The Base Environment

Before developing, ensure you have an environment with the needed libraries.

## Step 1 - Clone the repository

```bash
# If not yet done, clone this repository.
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example
```

## Step 2 - Create a conda environment

Create your conda environment.

```bash
conda deactivate && \
  conda remove -y --all -n jupyterlabextensions
conda create -y \
  -n jupyterlabextensions \
  python=3.9 \
  nodejs=18.7.0 \
  yarn=1.22.19 \
  jupyter_packaging \
  twine
conda activate jupyterlabextensions
```

## Step 3 - Add JupyterLab and IpyWidgets to the environement

Install JupyterLab.

```bash
pip install \
  jupyterlab==4.0.0a31 \
  notebook==7.0.0a9
```

Alternatively, clone and build JupyterLab from source.

```bash
git clone https://github.com/jupyterlab/jupyterlab --depth 1 -b v4.0.0a31 && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build && \
  cd ..
```

Install IpyWidgets, this is needed by some of the extension examples.

```bash
pip install ipywidgets==8.0.3
```
