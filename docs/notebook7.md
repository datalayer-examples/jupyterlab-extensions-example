# Notebook 7 Compatibility

An extension for JupyterLab can also be loaded by Notebook 7. However, Notebook 7 does not support all the features of the full JupyterLab, like a main panel, a status bar.

Therfore, as an extension developer, you may implement specific code to ensure your extension is not loaded if it is run within Notebook 7. To achieve that goal, you will declare a dependency on `@jupyter-notebook/application` and declare `INotebookShell` as an optional requirement to your plugin. Depending on the presence or absence of that `INotebookShell`, you can take adhoc actions like shown in the following snippet.

```ts
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:react',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  optional: [INotebookShell],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu,
    notebookShell?: INotebookShell
    ) => {

      if (notebookShell) {
        console.log(
          '%cjupyterlabextensions:react can not run in Notebook and will not be activated',
          'font-size: 14px'
        );
        return;  
      }

      // ...

    }
}
```
