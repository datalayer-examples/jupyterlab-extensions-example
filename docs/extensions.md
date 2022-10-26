# Extensions

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

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-certificate.png)

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-table.png)

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime.png)

## TODO

- [ ] Update the Launcher page to launch the extensions
- [ ] Strip down the variables.css to only the needed css?
- [ ] Bring more fancy ui like in https://github.com/timkpaine/jupyterlab_miami_nights: Search tool + neon billboard + Collapser + neon light + Scrollbar + FM-84's "Atlas" (compatible with webKit browsers) + A surprise in the presentation mode (Top menu --> View --> Presention mode)
