import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization for the christmas theme extension.
 */
const christmasTheme: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:theme:christmas-tree',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, themeManager: IThemeManager) => {
    const style = 'jupyterlabextensions/index.css';
    themeManager.register({
      name: 'JupyterLab Christmas',
      isLight: true,
      load: () => themeManager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default christmasTheme;
