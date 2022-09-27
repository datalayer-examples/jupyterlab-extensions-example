# Environment

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
git clone https://github.com/jupyterlab/jupyterlab --depth 1 -b 3.4.x && \
  cd jupyterlab && \
  pip install -e . && \
  jupyter lab build && \
  cd ..
```

```bash
pip install ipywidgets==8.0.2
```
