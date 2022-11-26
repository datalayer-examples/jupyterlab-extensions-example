# Mime Renderer Plugins

Mime renderer plugins are simplified, restricted ways to extend JupyterLab to render custom mime data in notebooks and files. These plugins are automatically converted to equivalent application plugins by JupyterLab when they are loaded. Examples of mime renderer plugins that come in core JupyterLab are the pdf viewer, the JSON viewer, and the Vega viewer.

A mime menderer is typically associated with one or many mime types. A mime type can be associated with many mime renderers.

## Certificate Mime Renderer

Based on a `.cert` JSON file, the certificate mimer renderer will display a representation of its content.

For example, the following content

```json
{
    "given": "Datalayer", 
    "event": "Yeah!"
}
```

will be rendred as the following images.

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-certificate.png)

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime-table.png)

![](https://raw.githubusercontent.com/datalayer-examples/jupyterlab-extensions-example/main/img/jupyterlab-rendermime.png)

## Mp4 Mime Renderer

Any `.mp4` will be rendered with the native HTML `<video/>` tag. 

## Table Mime Renderer

A file with mimetype `text/csv` (typically a CSV file) will be rendered as a table based on the `fixed-data-table-2` React component.
