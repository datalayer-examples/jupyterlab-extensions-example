[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# JupyterLab Extensions Example

> Extensions example to better understand the options to extend JupyterLab.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/datalayer-examples/jupyterlab-extensions-example/main?urlpath=lab) [![Github Actions Status](https://github.com/datalayer-examples/jupyterlab-extensions-example/workflows/Build/badge.svg)](https://github.com/datalayer-examples/jupyterlab-extensions-example/actions/workflows/build.yml)

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-highlight.png" />
</div>

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-christmas-theme.png" />
</div>

The audience of this repository is JupyterLab extension developers and is a complement (not a replacement) to these other resources:

- The official [Read The Docs](https://jupyterlab.readthedocs.io/en/latest) documentation. The complete reading of that documentation is a prerequisite before digging more into the content present here. A special attention should be given to the [Develop Extension](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html) section.
- The [extension examples](https://github.com/jupyterlab/extension-examples) repository. That repository contains many different extensions which cover each one specific feature, whereas this repository contains one extension that provides many features.
- The [astrononmy picture of the day extension](https://github.com/jupyterlab/jupyterlab_apod) documented on [this page](https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html).

Please also note the [examples folder](https://github.com/jupyterlab/jupyterlab/tree/master/examples) of the main JupyterLab repository contains other ways to use the JupyterLab packages, which are not the extensions we are adressing in this repository. We also do not address custom Lumino/JupyterLab `applications` are developed (examples of such custom `Application` be found in JupyterLab itself, Notebook 7, JupyerLite, JupyterLab Rise extension).

To avoid duplicate content, we try to sit in the top-right quadrant of the `HOW TO GUIDES`.

<img src="https://documentation.divio.com/_images/overview.png"/>

_Source of the image: https://documentation.divio.com_

This repository has been bootstrapped with the [JupyterLab extension cookiecutter](https://github.com/jupyterlab/extension-cookiecutter-ts) with the following command.

```bash
cookiecutter \
  https://github.com/jupyterlab/extension-cookiecutter-ts \
  --checkout 3.0
```

It is composed of a Python package named `jupyterlabextensions` for the server extension and a NPM package named `jupyterlabextensions` for the frontend extension. For now, it runs on JupyterLab >= 3.0 <4.0.0. An update to the major breaking-API 4.0.0 is planned depending on the version 4 release timeline.

## Documentation

Follow the documentation to use and learn more on the internals of this extension.

- [Concepts](./docs/concepts.md)
- [Setup the Base Environment](./docs/env-base.md)
- [Develop the Extensions](./docs/dev.md)
- [Application Plugins](./docs/plugins-application.md)
- [Theme Plugins](./docs/plugins-theme.md)
- [Mime Renderer Plugins](./docs/plugins-mime-renderer.md)
- [Lint the Source](./docs/lint.md)
- [Test the JavaScript](./docs/test-js.md)
- [Test the Server](./docs/test-server.md)
- [Integration Tests](./docs/test-integration.md)
- [Continuous Integration](./docs/ci.md)
- [Build JupyterLab](./docs/build-jupyterlab.md)
- [Release](./docs/release.md)
- [FAQ](./docs/faq.md)

## ⚖️ License

Copyright (c) 2022 Datalayer, Inc.

Released under the terms of the BSD-3 license (see [LICENSE](./LICENSE)).
