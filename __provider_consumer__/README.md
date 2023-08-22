# JupyterLab Provider Consumer Extensions

```bash
yarn install
yarn build
cd provider && yarn dev && cd ..
cd consumer && yarn dev && cd ..
# yarn dev
jupyter lab # Have a look at the browser console.
```

The following messages should be printed in the browser console on JupyterLab loading.

```
index.js:11 JupyterLab extension provider is activated!
index.js:10 JupyterLab extension consumer is activated!
index.js:11 The token instance provided by the provider is PROVIDER_STRING
```

## 

The `consumer` should define in its `package.json` the `sharedPackages` to ensure [Deduplication of Dependencies](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#deduplication-of-dependencies).

```json
  "jupyterlab": {
    "extension": true,
    "outputDir": "consumer/labextension",
    "sharedPackages": {
      "@datalayer/example-ext-provider": {
        "bundled": false,
        "singleton": true
      }
    }
  }
```

- https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html#deduplication-of-dependencies
- https://jupyterlab.readthedocs.io/en/stable/extension/extension_dev.html#requiring-a-service
- https://discourse.jupyter.org/t/minimal-plugin-provides-not-working/13136

TODO Create a `jupyterlab-extensions-example-2` separated repository consuming a plugin of this repository (once released).
