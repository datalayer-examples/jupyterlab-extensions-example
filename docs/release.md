# Release

TODO Release manually in Npm.js.
TODO Release manually in PyPI and fix `the name 'jupyterlabextensions' is too similar to an existing project. See https://pypi.org/help/#project-name for more information`.
TODO Release with jupyter-releaser.

The extension can be published to `PyPI` and `NPM.js` manually or using the [Jupyter Releaser](https://github.com/jupyter-server/jupyter_releaser).

## Manual release

### Python package

This extension can be distributed as Python `PyPI` packages. All of the Python packaging instructions in the `pyproject.toml` file to wrap your extension in a Python package. Before generating a package, we first need to install `build`.

```bash
pip install build twine hatch
```

Bump the version using `hatch`. By default this will create a tag. See the docs on [hatch-nodejs-version](https://github.com/agoose77/hatch-nodejs-version#semver) for details.

```bash
hatch version <new-version>
```

To create a Python source package (`.tar.gz`) and the binary package (`.whl`) in the `dist/` directory, do:

```bash
python -m build
# Verify that the dist folder contains a whl and tar.gz files.
ls dist/*
```

> `python setup.py sdist bdist_wheel` is deprecated and will not work for this package.

Then to upload the package to PyPI, do:

```bash
twine upload dist/*
```

### NPM package

To publish the frontend part of the extension as a `NPM` package, do:

```bash
jlpm build:lib
npm login
npm publish --access public
```

## Automated Releases with the Jupyter Releaser

The extension repository should already be compatible with the Jupyter Releaser. Check out the [workflow documentation](https://github.com/jupyter-server/jupyter_releaser#typical-workflow) for more information.

Check out also the definitions in `package.json``

```json
  ...
  "jupyter-releaser": {
    "hooks": {
      "before-build-npm": [
        "python -m pip install jupyterlab~=3.1",
        "jlpm"
      ],
      "before-build-python": [
        "jlpm clean:all"
      ]
    }
  }
  ...
```

Here is a summary of the steps to cut a new release:

- Fork the [`jupyter-releaser` repo](https://github.com/jupyter-server/jupyter_releaser)
- Add `ADMIN_GITHUB_TOKEN`, `PYPI_TOKEN` and `NPM_TOKEN` to the Github Secrets in the fork
- Go to the Actions panel
- Run the "Draft Changelog" workflow
- Merge the Changelog PR
- Run the "Draft Release" workflow
- Run the "Publish Release" workflow

## Publishing to `conda-forge`

If the package is not on conda forge yet, check the documentation to learn how to add it: https://conda-forge.org/docs/maintainer/adding_pkgs.html

Otherwise a bot should pick up the new version publish to PyPI, and open a new PR on the feedstock repository automatically.

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
pip install --pre jupyterlab==4.0.0b1
```

```bash
pip install ipywidgets
jupyter labextension list
# Check the Extension Manager.
jupyter lab
```

```bash
pip search "jupyterlab extension"
# pip search "JupyterLab3"
```

```bash
pip install jupyterlabextensions
jupyter labextension list
# Check the Extension Manager.
jupyter lab
```

To remove the extension, execute:

```bash
pip uninstall jupyterlabextensions
```
