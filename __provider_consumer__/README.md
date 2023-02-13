# JupyterLab Provider Consumer Extensions

```bash
yarn install
yarn build
# cd provider && yarn dev && cd ..
# cd consumer && yarn dev && cd ..
yarn dev
jupyter lab # Have a look at the browser console
```

The following messages should be printed in the browser console.

```
index.js:11 JupyterLab extension provider is activated!
index.js:10 JupyterLab extension consumer is activated!
index.js:11 Provider token is PROVIDER_STRING
```

- TODO jupyterlab-extensions-example-2 separated repository consuming a plugin of this repository (once released).
