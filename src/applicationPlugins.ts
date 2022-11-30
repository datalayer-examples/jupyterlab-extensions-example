import apodLeft from './apod-left';
import apodMain from './apod-main';
import cellFlash from './cell-flash';
import codeCellButton from './code-cell-button';
import contextMenu from './context-menu';
import execTime from './exec-time';
import internals from './internals';
// import ipywidgetResourceUsagePlugin from './kernel-memory/pluginIpyWidget';
// import kernelMemory from './kernel-memory/plugin';
import kernelMessaging from './kernel-messaging';
import kernelOutput from './kernel-output';
import logo from './logo';
import notebookAuto from './notebook-auto';
import notebookMetadata from './notebook-metadata';
import pluginsGraph from './plugins-graph';
import preview from './preview';
import pythonFile from './python-file';
import react from './react';
import recents from './recents';
import runAll from './run-all';
import server from './server';
import themeToggle from './theme-toggle';
import topBar from './topbar';

export default [
  ...codeCellButton,
  apodLeft,
  apodMain,
  cellFlash,
  contextMenu,
  execTime,
  internals,
//  ipywidgetResourceUsagePlugin,
//  kernelMemory,
  kernelMessaging,
  kernelOutput,
  logo,
  notebookAuto,
  notebookMetadata,
  pluginsGraph,
  preview,
  pythonFile,
  react,
  recents,
  runAll,
  server,
  themeToggle,
  topBar,
];
