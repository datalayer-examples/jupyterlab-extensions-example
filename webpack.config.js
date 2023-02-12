// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const webpack = require('webpack');
const Build = require('@jupyterlab/builder').Build;
const miniSVGDataURI = require('mini-svg-data-uri');

const extensions = [
  "@jupyterlab/application-extension",
  "@jupyterlab/apputils-extension",
  "@jupyterlab/codemirror-extension",
  "@jupyterlab/completer-extension",
  "@jupyterlab/console-extension",
  "@jupyterlab/docmanager-extension",
  "@jupyterlab/filebrowser-extension",
  "@jupyterlab/fileeditor-extension",
  "@jupyterlab/launcher-extension",
  "@jupyterlab/json-extension",
  "@jupyterlab/mainmenu-extension",
  "@jupyterlab/notebook-extension",
  "@jupyterlab/rendermime-extension",
  "@jupyterlab/shortcuts-extension",
  "@jupyterlab/statusbar-extension",
  "@jupyterlab/theme-light-extension",
  "@jupyterlab/translation-extension",
  "@jupyterlab/ui-components-extension"
]

// Generate webpack config to copy extension assets to the build directory,
// such as setting schema files, theme assets, etc.
const extensionAssetConfig = Build.ensureAssets({
  packageNames: extensions,
  output: './build'
});

module.exports = [
  {
    entry: ['whatwg-fetch', './src/jupyterlab.js'],
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js'
    },
    bail: true,
    devtool: 'source-map',
    mode: 'development',
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.html$/, type: 'asset/resource' },
        { test: /\.md$/, type: 'asset/source' },
        { test: /\.(jpg|png|gif)$/, type: 'asset/resource' },
        { test: /\.js.map$/, type: 'asset/resource' },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset'
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset'
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, type: 'asset/resource' },
        {
          // In .css files, svg is loaded as a data URI.
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          issuer: /\.css$/,
          type: 'asset/inline',
          generator: {
            dataUrl: content => miniSVGDataURI(content.toString())
          }
        },
        {
          // In .ts and .tsx files (both of which compile to .js), svg files
          // must be loaded as a raw string instead of data URIs.
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          issuer: /\.js$/,
          type: 'asset/source'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        // Needed for various packages using cwd(), like the path polyfill
        process: { cwd: () => '/' }
      })
    ]
  }
].concat(extensionAssetConfig);
