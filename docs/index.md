# JupyterLab Extensions Example

## Environment

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

## Develop

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

## Build

```bash
# Generate sourcemaps.
jupyter labextension build --development=True .
jupyter lab build --minimize=False
```

```bash
# Do not generate sourcemaps.
jupyter labextension build .
jupyter lab build
```

## Disable an Extension

```bash
# Read https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html#disabledextensions
# https://github.com/jupyterlab/jupyterlab/blob/d6c3857ac6ff27811f49fd63fcd529b763024f1f/packages/application-extension/src/index.tsx#L956-L972
jupyter labextension disable @jupyterlab/application-extension:logo
cat $(dirname $(which jupyter))/../etc/jupyter/labconfig/page_config.json
```

You can also deactivate a complete extension or a specific plugin with a definition in `package.json`.

```json
  "jupyterlab": {
    "disabledExtensions": [
      "@jupyterlab/application-extension:logo"
    ],
  }
```

## Publish

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

## Launch JupyterLab with a Theme

```bash
# See https://jupyterlab.readthedocs.io/en/stable/user/directories.html#overridesjson
cat << EOF >>~/.jupyter/lab/user-settings/overrides.json
{
  "@jupyterlab/apputils-extension:themes": {
    "theme": "JupyterLab Christmas"
  }
}
EOF
```

```bash
# Optionally.
mkdir -p ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension && \
  CONF="{ \"theme\": \"JupyterLab Christmas\" }" && \
  cat > ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension/themes.jupyterlab-settings  <<EOF
${CONF}
EOF
```

```bash
# JupyterLab will start with the defined theme.
jupyter lab
```

## Architecture Extensions

This extension will print in the browser console the registered file types and model factories.

```
fileType ObjectcontentType: "file"displayName: "Text"extensions: ['.txt']fileFormat: "text"icon: LabIcon {_props: {…}, _svgReplaced: Signal, _svgElement: undefined, _svgInnerHTML: undefined, _svgReactAttrs: undefined, …}mimeTypes: ['text/plain']name: "text"[[Prototype]]: Object Array(1)0: "text/plain"length: 1[[Prototype]]: Array(0) undefined
index.js:10 fileType Object Array(1)0: "application/x-ipynb+json"length: 1[[Prototype]]: Array(0) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(2) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:15 modelFactory TextModelFactory_isDisposed: falsecontentType: (...)fileFormat: (...)isDisposed: (...)name: (...)[[Prototype]]: Object
index.js:15 modelFactory Base64ModelFactory_isDisposed: falsecontentType: (...)fileFormat: (...)isDisposed: (...)name: (...)[[Prototype]]: TextModelFactory
```

TODO Explain.

## TODO Add more extensions

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-certificate.png "")

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-table.png "")

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime.png "")

## TODO

- [ ] Update the Launcher page to launch the extensions
- [ ] Strip down the variables.css to only the needed css?
- [ ] Bring more fancy ui like in https://github.com/timkpaine/jupyterlab_miami_nights: Search tool + neon billboard + Collapser + neon light + Scrollbar + FM-84's "Atlas" (compatible with webKit browsers) + A surprise in the presentation mode (Top menu --> View --> Presention mode)
