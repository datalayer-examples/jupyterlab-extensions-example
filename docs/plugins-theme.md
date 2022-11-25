# Theme Plugins

## Christmas Theme

The `JupyterLab Christmas` is implemented in the `src/theme-christmas/index.ts` file. You typically require `IThemeManager` and invoke the `register` function with the needed CSS.

```js
    const style = 'jupyterlabextensions/index.css';
    themeManager.register({
      name: 'Christmas',
      isLight: true,
      load: () => themeManager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
```

You also need to define in `package.json` the location of the static theme artifacts (CSS, images...).

```json
  ...
  "jupyterlab": {
    "themePath": "style/themes/christmas/index.css",
  }
  ...
```

Select the menu `Settings > Theme > Christmas` and enjoy.

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-christmas-theme.png" />
</div>
