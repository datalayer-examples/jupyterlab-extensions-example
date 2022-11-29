# Application Plugins

Application plugins are the fundamental building block of JupyterLab functionality. Application plugins interact with JupyterLab and other plugins by requiring services provided by other plugins, and optionally providing their own service to the system.

Application plugins in core JupyterLab include the main menu system, the file browser, and the notebook, console, and file editor components.

## Apod Main

This extension is taken from the [jupyterlab_apod](https://github.com/jupyterlab/jupyterlab_apod) example ([read more](https://jupyterlab.readthedocs.io/en/latest/extension/extension_tutorial.html) and displays a random image fetched from the public NASA API (https://api.nasa.gov https://api.nasa.gov/planetary/apod.

The image is shown in a main panel.

![](https://jupyterlab.readthedocs.io/en/latest/_images/extension_tutorial_complete.png)

## Apod Left

The `Apod Left` extension implements the same feature as the `Apod Main` but is displayed in a left side panel.

- [ ] TODO `Apod Left` should reuse code from and depend on `Apod Main`.

## Bokeh Plot

- [ ] TODO Add bokeh plot example

## Cell Flash

The `Cell Flash` plugin highlights the cell with CSS each time it is executed.

To achieve that effect, the plugin listens to the `executed` signal `NotebookActions.executed.connect((_, args) => {...}` and update the CSS of the HTML element `cell.editor.host`.

## Code Cell Button

The `Code Cell Button` adds a `Run` button below each cell. A plugin that provides a new `NotebookPanel.IContentFactory` is needed and returns a new `ContentFactoryWithFooterButton` which overrids the `createCellFooter` method.

## Context Menu

This is a example to show how to add a new entry to an existent context menu in the file browser.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/context-menu/preview.gif)

## Exec Time

The `Exec Time` extension displays execution timings under each cell.

Before using, activate via `Settings > Advanced Settings Editor > Notebook` {"recordTiming": true}. The executin time is persisted will be persisted as a notebook metadata setting and not a plugin setting. This plugin just displays that data.

![](https://raw.githubusercontent.com/deshaw/jupyterlab-execute-time/master/docs/execute-time-screenshot.png)

## Internals

The `Ìnternals` extension prints in the browser console the registered `file types` and `model factories`. This illustrates the explanations found in the documentation (https://jupyterlab.readthedocs.io/en/latest/extension/documents.html and https://jupyterlab.readthedocs.io/en/latest/extension/notebook.html).

```
fileType ObjectcontentType: "file"displayName: "Text"extensions: ['.txt']fileFormat: "text"icon: LabIcon {_props: {…}, _svgReplaced: Signal, _svgElement: undefined, _svgInnerHTML: undefined, _svgReactAttrs: undefined, …}mimeTypes: ['text/plain']name: "text"[[Prototype]]: Object Array(1)0: "text/plain"length: 1[[Prototype]]: Array(0) undefined
index.js:10 fileType Object Array(1)0: "application/x-ipynb+json"length: 1[[Prototype]]: Array(0) undefined
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
...
index.js:10 fileType Object Array(1) undefined
index.js:10 fileType Object Array(1) undefined
index.js:15 modelFactory TextModelFactory_isDisposed: falsecontentType: (...)fileFormat: (...)isDisposed: (...)name: (...)[[Prototype]]: Object
index.js:15 modelFactory Base64ModelFactory_isDisposed: falsecontentType: (...)fileFormat: (...)isDisposed: (...)name: (...)[[Prototype]]: TextModelFactory
```

## IpyWidget Resource Usage

The `IpyWidget Resource Usage` extension allows ... TODO

## Kernel Memory

The `Kernel Memory` extension allows ... TODO

## Kernel Messaging

The `Kernel Messaging` extension allows to start a kernel and send some code to be executed by it.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/kernel-messaging/preview.gif)

## Kernel Output

The `Kernel Output` extension allows to render kernel messages in an OuputArea.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/kernel-output/preview.gif)

## Logo

Tbe `Logo` extension allows ... TODO

## Notebook Auto

The `Notebook Auto` extension allows ... TODO

## Notebook Metadata

The `Notebook Metadata` extension allows ... TODO

## Plugins Graph

The `Plugin Dependency Graph` display a graph of the plugins depencies and can be invoked via the command palette.

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-plugins-graph.png" />
</div>

## Preview

The `Preview` extension allows ... TODO

## Python File

The `Python File` extension allows ... TODO

## React.js

The `React.js` extension allows ... TODO

## Recents

The `Recents` extension tracks recent used files and folders and adds a menu in `File > Recents`. You can also clear the recent entries via that menu.

## Run All

The `Run All` adds a button to the notebook toolbar that allows to run all cells of the notebook.

## Server

The `Server` extension connects to a server handler on startup and prints a message in the browser console.

## Theme Toggle

The `Theme Toggle` extension allows the use to swith from the `Ligth` to the `Dark` theme, and vice-versa. It depends on the `Top Bar` extension to add itself in the main topbar.

## Top Bar

The `Top Bar` extension allows ... TODO
