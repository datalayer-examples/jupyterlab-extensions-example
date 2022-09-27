# Publish

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

# Use a Published Release

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
jupyter lab
```

```bash
pip search "jupyterlab extension"
pip search "JupyterLab3"
```

```bash
pip install jupyterlabextensions
jupyter labextension list
jupyter lab --notebook-dir=~/notebooks
```
