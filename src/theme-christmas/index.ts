import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization for the christmas theme extension.
 */
const theme: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:theme:christmas',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, themeManager: IThemeManager) => {
    const style = 'jupyterlabextensions/index.css';
    themeManager.register({
      name: 'Christmas',
      isLight: true,
      load: () => themeManager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default theme;
