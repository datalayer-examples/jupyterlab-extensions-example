# Theme Plugins

Theme plugins provide a way to customize the appearance of JupyterLab by changing themeable values (i.e., CSS variable values) and providing additional fonts and graphics to JupyterLab. JupyterLab comes with light and dark theme plugins.

- [ ] TODO Add one more theme like [jupyterlab_miami_nights](https://github.com/timkpaine/jupyterlab_miami_nights).

## Christmas Theme

The `Christmas` theme is implemented in the `src/theme-christmas/index.ts` file. You typically require `IThemeManager` and invoke the `register` function with the needed CSS.

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

- [ ] TODO Strip down the christmas theme variables.css file to only the needed CSS.
