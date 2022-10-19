import apodLeft from './apod-left';
import apodMain from './apod-main';
import architecture from './architecture';
import cellFlash from './cell-flash';
import codeCellButton from './codecell-btn';
import contextMenu from './context-menu';
import execTime from './exec-time';
import ipyresusePlugin from './kernel-memory/pluginIpywidget';
import kernelMemory from './kernel-memory/plugin';
import kernelMessaging from './kernel-messaging';
import kernelOutput from './kernel-output';
import logo from './logo';
import notebookAuto from './notebook-auto';
import notebookMetadata from './notebook-metadata';
import plugins from './plugins';
import preview from './preview';
import pythonFile from './python-file';
import react from './react';
import recents from './recents';
import runAll from './run-all';
import server from './server';
import themeChristmas from './theme-christmas';
import themeToggle from './theme-toggle';
import topBar from './topbar';

import '../style/index.css';

export default [
    ...codeCellButton,
    apodLeft,
    apodMain,
    architecture,
    cellFlash,
    contextMenu,
    execTime,
    ipyresusePlugin,
    kernelMemory,
    kernelMessaging,
    kernelOutput,
    logo,
    notebookAuto,
    notebookMetadata,
    plugins,
    preview,
    pythonFile,
    react,
    recents,
    runAll,
    server,
    themeChristmas,
    themeToggle,
    topBar,
];
