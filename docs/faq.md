# FAQ

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

## Launch with a Theme

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
