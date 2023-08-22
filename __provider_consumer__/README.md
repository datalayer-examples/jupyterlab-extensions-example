# JupyterLab Provider Consumer Extensions

```bash
yarn install
yarn build
cd provider && yarn dev && cd ..
cd consumer && yarn dev && cd ..
# yarn dev
jupyter lab # Have a look at the browser console.
```

The `consumer` defines in its `package.json` the `sharedPackages` to ensure [Deduplication of Dependencies](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#deduplication-of-dependencies).

```json
  "jupyterlab": {
    "extension": true,
    "outputDir": "consumer/labextension",
    "sharedPackages": {
      "provider": {
        "requiredVersion": "0.1.0",
        "bundled": false,
        "singleton": true
      }
    }
  }
```

The following messages should be printed in the browser console on JupyterLab loading.

```
index.js:11 JupyterLab extension provider is activated!
index.js:10 JupyterLab extension consumer is activated!
index.js:11 Provider token is PROVIDER_STRING
```

TODO Create a `jupyterlab-extensions-example-2` separated repository consuming a plugin of this repository (once released).
