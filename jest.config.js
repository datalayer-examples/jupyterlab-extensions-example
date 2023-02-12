/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

const func = require('@jupyterlab/testing/lib/jest-config');
const jlabConfig = func(__dirname);

const esModules = [
  '@codemirror',
  '@jupyterlab',
  '@jupyter',
  'lib0',
  'nanoid',
  'vscode\\-ws\\-jsonrpc',
  'y\\-protocols',
  'y\\-websocket',
  'yjs'
].join('|');

module.exports = {
  ...jlabConfig,
//  testRegex: 'src/.*/.*.spec.ts[x]?$',
  transformIgnorePatterns: [`/node_modules/(?!${esModules}).+`]
//  transformIgnorePatterns: ['/node_modules/(?!@codemirror|@jupyterlab|@jupyter/ydoc|lib0|nanoid|vscode-ws-jsonrpc|y-protocols|y-websocket|yjs).+' ]
}
