import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

import { NotebookActions } from '@jupyterlab/notebook';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jupyterlab-cell-flash extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:cell-flash',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: async (_: JupyterFrontEnd, settingRegistry: ISettingRegistry) => {
    if (settingRegistry) {
      const setting = await settingRegistry.load(plugin.id);
      const root = document.documentElement;
      const updateSettings = (): void => {
        const color = setting.get('color').composite as string;
        const duration = setting.get('duration').composite as number;
        root.style.setProperty('--jp-cell-flash-color', color);
        root.style.setProperty('--jp-cell-flash-duration', `${duration}s`);
      };
      updateSettings();
      setting.changed.connect(updateSettings);
    }
    NotebookActions.executed.connect((_, args) => {
      const { cell } = args;
      const element = cell.editor.host;
      element.classList.remove('flash-effect');
      element.offsetWidth;
      const onAnimationEnd = (): void => {
        element.removeEventListener('animationcancel', onAnimationEnd);
        element.removeEventListener('animationend', onAnimationEnd);
        element.classList.remove('flash-effect');
      };
      requestAnimationFrame(() => {
        element.addEventListener('animationend', onAnimationEnd);
        element.addEventListener('animationcancel', onAnimationEnd);
        element.classList.add('flash-effect');
      });
    });
  }
};

export default plugin;
