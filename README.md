[![Datalayer](https://assets.datalayer.design/datalayer-25.svg)](https://datalayer.io)

# JupyterLab Extensions Example

> Extensions example to better understand the options to extend JupyterLab.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/datalayer-examples/jupyterlab-extensions-example/main?urlpath=lab) [![Github Actions Status](https://github.com/datalayer-examples/jupyterlab-extensions-example/workflows/Build/badge.svg)](https://github.com/datalayer-examples/jupyterlab-extensions-example/actions/workflows/build.yml)

<div align="center" style="text-align: center">
  <img alt="Jupyter Extensions Example" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-extensions-example-highlight.png" />
</div>

The audience of this repository is JupyterLab extension developers and is a complement (not a replacement) to these other resources:

- The official [Read The Docs](https://jupyterlab.readthedocs.io/en/latest) documentation. The complete reading of that documentation is a prerequisite before digging more into the content present here. A special attention should be given to the [Develop Extension](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html) section.
- The [extension examples](https://github.com/jupyterlab/extension-examples) repository. That repository contains many different extensions which cover each one specific feature, whereas this repository contains one extension that provides many features.

An [Extension](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#overview-of-extensions) is composed of many [Plugins](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#plugins). A single extension like this can ship many plugins (application, mime renderes and theme plugins).

A special care should be given to fully understand the difference between [Source Extensions](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#source-extensions) and [Source Extensions](https://jupyterlab.readthedocs.io/en/latest/extension/extension_dev.html#source-extensions).

Please also note the [examples folder](https://github.com/jupyterlab/jupyterlab/tree/master/examples) of the main JupyterLab repository contains other ways to use the JupyterLab packages, which are not the extensions we are adressing in this repository. We also do not address custom Lumino/JupyterLab `applications` are developed (examples of such custom `Application` be found in JupyterLab itself, Notebook 7, JupyerLite, JupyterLab Rise extension). To avoid dupclicate content, we try to sit in the top-right quadrant `HOW TO GUIDES`

<img src="https://documentation.divio.com/_images/overview.png"/>

_Source of the image: https://documentation.divio.com_

This repository has been bootstrapped with the [JupyterLab extension cookiecutter](https://github.com/jupyterlab/extension-cookiecutter-ts) with the following command.

```bash
cookiecutter \
  https://github.com/jupyterlab/extension-cookiecutter-ts \
  --checkout 3.0
```

It is composed of a Python package named `jupyterlabextensions` for the server extension and a NPM package named `jupyterlabextensions` for the frontend extension.

For now, it runs on JupyterLab >= 3.0 <4.0.0. An update to the major breaking-API 4.0.0 is planned depending on the version 4 release timeline.

Follow the documentation to use and learn more on the internals of this extension.

- [Setup the environment](./docs/environment.md)
- [Develop](./docs/develop.md)
- [Extensions](./docs/extensions.md)
- [Install](./docs/install.md)
- [Lint](./docs/lint.md)
- [Test the JavaScript](./docs/test-js.md)
- [Test the server](./docs/test-server.md)
- [Integration test](./docs/test-integration.md)
- [Build JupyterLab](./docs/build-jupyterlab.md)
- [Release](./docs/release.md)
- [Continuous integration](./docs/ci.md)
- [FAQ](./docs/faq.md)

<hr/>

## To Do

- [ ] Fix CI
- [ ] Add more unit tests
- [ ] Add more integration tests
- [ ] Release manually in PyPI - Resolve The name 'jupyterlabextensions' is too similar to an existing project. See https://pypi.org/help/#project-name for more information.   
- [ ] Release manually in NPM
- [ ] Release with jupyter-releaser

<hr/>

## ⚖️ License

Copyright (c) 2022 Datalayer, Inc.

Released under the terms of the BSD-3 license (see [LICENSE](./docs/LICENSE)).

This repository contains source code taken from following repositories under MIT or BSD-3-Clause license, listed here for copyright.

- https://github.com/deshaw/jupyterlab-execute-time
- https://github.com/ibqn/jupyterlab-codecellbtn
- https://github.com/jtpio/jupyter-resource-usage
- https://github.com/jtpio/jupyterlab-cell-flash
- https://github.com/jtpio/jupyterlab-python-file
- https://github.com/jtpio/jupyterlab-system-monitor
- https://github.com/jtpio/jupyterlab-theme-toggle
- https://github.com/jtpio/jupyterlab-topbar
- https://github.com/jupyterlab/benchmarks
- https://github.com/jupyterlab/benchmarks
- https://github.com/jupyterlab/extension-examples
- https://github.com/jupyterlab/jupyterlab-mp4
- https://github.com/jupyterlab/jupyterlab_xkcd
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab/scipy2019-jupyterlab-tutorial
- https://github.com/jupyterlab-contrib/jupyterlab-plugin-graph
- https://github.com/nersc/jupyterlab-recents
- https://github.com/voila-dashboards/voila
- https://github.com/yuvipanda/jupyterlab-nbmetadata
