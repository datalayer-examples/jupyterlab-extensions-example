# Extension

## Definitions

An [extension](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#overview-of-extensions) is composed of many [plugins](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#plugins).

A single `extension` like the one implemented in this repository ships many `plugins`:

- [Application plugins](./plugin-application).
- [Theme plugins](./plugin-theme).
- [Mime renderer plugins](./plugin-mime-renderer).

## Source vs Prebuilt Extensions

A special care should be given to fully understand the difference between Source and Prebuilt extensions. The following definitions are taken from the official documentation:

- [Source Extensions](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#source-extensions): A source extension is a JavaScript (npm) package that exports one or more plugins. Installing a source extension requires a user to rebuild JupyterLab. This rebuilding step requires Node.js and may take a lot of time and memory, so some users may not be able to install a source extension. However, the total size of the JupyterLab code delivered to a user’s browser may be reduced compared to using prebuilt extensions. See Deduplication of Dependencies for the technical reasons for rebuilding JupyterLab when a source extension is installed.
- [Prebuilt Extensions](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#prebuilt-extensions): A prebuilt extension (new in JupyterLab 3.0) distributes a bundle of JavaScript code prebuilt from a source extension that can be loaded into JupyterLab without rebuilding JupyterLab. In this case, the extension developer uses tools provided by JupyterLab to compile a source extension into a JavaScript bundle that includes the non-JupyterLab JavaScript dependencies, then distributes the resulting bundle in, for example, a Python pip or conda package. Installing a prebuilt extensions does not require Node.js.

## Definitions in package.json

When you implementation extensions, you need to define important information in the `package.json` file under the `jupyterlab` key. The following snippet gives you representative examples.

```json
...
  "jupyterlab": {
    "discovery": {
        "server": {
          "managers": [
            "pip"
          ],
          "base": {
            "name": "jupyterlabextensions"
          }
        }
    },
    "extension": "./lib/extension.js",
    "mimeExtension": "./lib/mimeExtension.js",
    "schemaDir": "schema",
    "themePath": "style/themes/theme-christmas.css",
    "outputDir": "jupyterlabextensions/labextension",
    "sharedPackages": {
      "jupyterlab-topbar": {
        "requiredVersion": "0.6.0", 
        "bundled": false, 
        "singleton": true
      }
    },
    "disabledExtensions": [
      "@jupyterlab/application-extension:logo"
    ]
  },
...
```
