# The Base Environment

Before developing, ensure you have an environment with the needed libraries.

## Step 1 - Clone the repository

```bash
# If not yet done, clone this repository.
git clone https://github.com/datalayer-examples/jupyterlab-extensions-example && \
  cd jupyterlab-extensions-example
```

## Step 2 - Create a conda environment

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

## Step 3 - Add JupyterLab and IpyWidgets to the environement

Install JupyterLab.

```bash
pip install jupyterlab==3.4.7
```

...or alternatively, clone and build jupyterlab from source.

```bash
git clone https://github.com/jupyterlab/jupyterlab --depth 1 -b 3.4.x && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build && \
  cd ..
```

Install IpyWidgets.

```bash
pip install ipywidgets==8.0.2
```
