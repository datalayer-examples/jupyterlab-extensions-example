# Frequently Asked Questions

## How to disable an extension?

As [documented](https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html#disabledextensions), run the following command to disable one specific plugin or extension.

```bash
# https://github.com/jupyterlab/jupyterlab/blob/d6c3857ac6ff27811f49fd63fcd529b763024f1f/packages/application-extension/src/index.tsx#L956-L972
jupyter labextension disable @jupyterlab/application-extension:logo
```

You should see the configuration persisted in `page_config.json`.

```bash
cat $(dirname $(which jupyter))/../etc/jupyter/labconfig/page_config.json
```

You can also deactivate a complete extension or a specific plugin with a definition in `package.json`.

```json
   ...
  "jupyterlab": {
    "disabledExtensions": [
      "@jupyterlab/application-extension:logo"
    ],
  }
  ...
```

## How to launch with a theme?

See https://jupyterlab.readthedocs.io/en/stable/user/directories.html#overridesjson

```bash
cat << EOF >>~/.jupyter/lab/user-settings/overrides.json
{
  "@jupyterlab/apputils-extension:themes": {
    "theme": "Christmas"
  }
}
EOF
```

Optionally.

```bash
mkdir -p ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension && \
  CONF="{ \"theme\": \"JupyterLab Christmas\" }" && \
  cat > ~/.jupyter/lab/user-settings/\@jupyterlab/apputils-extension/themes.jupyterlab-settings  <<EOF
${CONF}
EOF
```

Check now that JupyterLab starts with the defined theme.

```bash
jupyter lab
```
