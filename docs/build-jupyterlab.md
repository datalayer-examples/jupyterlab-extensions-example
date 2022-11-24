# Build

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

Use the following commands to completely rebuild JupyterLab and link the extension Javascript with sourcemaps generation.

```bash
jupyter labextension build --development=True .
jupyter lab build --minimize=False
```

The following options will not generate sourcemaps.

```bash
jupyter labextension build .
jupyter lab build
```
