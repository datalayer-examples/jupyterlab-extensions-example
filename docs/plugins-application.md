# Application Plugins

Application plugins are the fundamental building block of JupyterLab functionality. Application plugins interact with JupyterLab and other plugins by requiring services provided by other plugins, and optionally providing their own service to the system.

Application plugins in core JupyterLab include the main menu system, the file browser, and the notebook, console, and file editor components.

## Apod Main

This example is taken from the [jupyterlab_apod](https://github.com/jupyterlab/jupyterlab_apod) example ([read more](https://jupyterlab.readthedocs.io/en/latest/)extension/extension_tutorial.html) and displays a random image from the NASA API (https://api.nasa.gov https://api.nasa.gov/planetary/apod.

The image is shown in a main panel.

![](https://jupyterlab.readthedocs.io/en/latest/_images/extension_tutorial_complete.png)

## Apod Left

The `Apod Left` plugins implements the same feature as the `Apod Main` but is displayed in a left side panel.

- [ ] TODO `Apod Left` should reuse code from and depend on `Apod Main`.

## Bokeh Plot

- [ ] TODO Add bokeh plot example

## Cell Flash

The `Cell Flash` plugin highlights the cell with CSS each time it is executed.

To achieve that effect, the plugin listens to the `executed` signal `NotebookActions.executed.connect((_, args) => {...}` and update the CSS of the HTML element `cell.editor.host`.

## Code Cell Button

The `Code Cell Button` adds a `Run` button below each cell. A plugin that provides a new `NotebookPanel.IContentFactory` is needed and returns a new `ContentFactoryWithFooterButton` which overrids the `createCellFooter` method.

## Context Menu

Context menu.

## Exec Time

This extension displays execution timings under each cell.

![](https://raw.githubusercontent.com/deshaw/jupyterlab-execute-time/master/docs/execute-time-screenshot.png)

By default, if this extension is enabled, it should automatically change your settings to record timing in the notebook metadata when it is loaded. If this fails, you can do this manually via `Settings -> Advanced Settings Editor -> Notebook` {"recordTiming": true}. This is a notebook metadata setting and not a plugin setting. The plugin just displays that data.

## Internals

The `Ìnternals` extension prints in the browser console the registered `file types` and `model factories`. This illustrates the explanations found in the documentation (https://jupyterlab.readthedocs.io/en/latest/extension/documents.html and https://jupyterlab.readthedocs.io/en/latest/extension/notebook.html).

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

## IpyWidget Resource Usage

IpyWidget resource usage.

## Kernel Memory

Kernel memory.

## Kernel Messaging

Kernel messaging.

## Kernel Output

Kernel output.

## Logo

Logo.

## Notebook Auto

Notebook auto.

## Notebook Metadata

Notebook metadata.

## Plugins Graph

Invoke the `Plugin Dependency Graph` via the command palette.

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-plugins-graph.png" />
</div>

## Preview

Preview

## Python File

Python file.

## React.js

React.js

## Recents

Recents.

## Run All

Run all.

## Server

Server

## Theme Toggle

Theme toggle.

## Top Bar

Top bar.
