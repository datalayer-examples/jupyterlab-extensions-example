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

- [ ] TODO Add a `Bokeh Plot` example.

## Cell Flash

The `Cell Flash` plugin highlights the cell with CSS each time it is executed.

To achieve that effect, the plugin listens to the `executed` signal `NotebookActions.executed.connect((_, args) => {...}` and update the CSS of the HTML element `cell.editor.host`.

## Code Cell Button

The `Code Cell Button` adds a `Run` button below each cell. A plugin that provides a new `NotebookPanel.IContentFactory` is needed and returns a new `ContentFactoryWithFooterButton` which overrids the `createCellFooter` method.

## Context Menu

This is a example to show how to add a new entry to an existent context menu in the file browser.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/context-menu/preview.gif)

## Exec Time

The `Exec Time` extension displays execution timings under each cell. Before using, activate via `Settings > Advanced Settings Editor > Notebook` {"recordTiming": true}. The executin time is persisted will be persisted as a notebook metadata setting and not a plugin setting. This plugin just displays that data.

![](https://raw.githubusercontent.com/deshaw/jupyterlab-execute-time/master/docs/execute-time-screenshot.png)

## Internals

The `Ìnternals` extension prints in the browser console the registered `file types`, `model factories` and `widget extensions`. This illustrates the explanations found in the documentation (https://jupyterlab.readthedocs.io/en/latest/extension/documents.html and https://jupyterlab.readthedocs.io/en/latest/extension/notebook.html).

```
File Types Array(19)
lib_extension_js.e2cdfe8216284221c2fe.js:929 Model Factories Array(2)
lib_extension_js.e2cdfe8216284221c2fe.js:943 Widget Extensions Array(0)
```

## Kernel Memory

The `Kernel Memory` extension displays an indication of how much resources your current notebook server and its children (kernels, terminals, etc) are using. This is displayed in the main toolbar in the notebook itself, refreshing every 5s.

![](https://raw.githubusercontent.com/jtpio/jupyter-resource-usage/master/screenshot.png)

- [ ] TODO Enable back the `Kernel Memory` extension (disabled for now for CI).

## Kernel Messaging

The `Kernel Messaging` extension allows to start a kernel and send some code to be executed by it.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/kernel-messaging/preview.gif)

## Kernel Output

The `Kernel Output` extension allows to render kernel messages in an OuputArea.

![](https://raw.githubusercontent.com/jupyterlab/extension-examples/master/kernel-output/preview.gif)

## Logo

Tbe `Logo` extension allows shows a new top-right logo for JupyterLab. The definition in `package.json` ensures the default logo plugin is disabled (see also [how to disable an extension](./faq.md#how-to-disable-an-extension)).

## Notebook Auto

The `Notebook Auto` extension creates a new Notebook on JupyterLab startup.

## Notebook Metadata

The `Notebook Metadata` extension show in the right panel the current Notebook metadata.

## Plugins Graph

The `Plugin Dependency Graph` display a graph of the plugins depencies and can be invoked via the command palette.

![](https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-plugins-graph.png)

## Preview

The `Preview` extension opens a new tab in the main area aside the current Notebook. That new tab is for new empty.

## Python File

The `Python File` extension add a new launcher in the launcher panel to open a Python file.

## React.js

The `React.js` extension show a React.js component into a JupyterLab main area tab. For comparison purposes a Lumino implementation is available.

## Recents

The `Recents` extension tracks recent used files and folders and adds a menu in `File > Recents`. You can also clear the recent entries via that menu.

## Run All

The `Run All` adds a button to the notebook toolbar that allows to run all cells of the notebook.

## Server

The `Server` extension connects to a server handler on startup and prints a message in the browser console.

## Theme Toggle

The `Theme Toggle` extension allows the user to switch from the `Light` to the `Dark` theme, and vice-versa. It depends on the `Top Bar` extension to add itself in the main topbar.

- [ ] TODO Enable back the `Theme Toggle` extension (disabled for now for CI).

## Top Bar

The `Top Bar` extension transforms the existing JupyterLab topbar into a draggable area where third party plugins can add their widgets.

- [ ] TODO Enable back the `Theme Toggle` extension (disabled for now for CI).
