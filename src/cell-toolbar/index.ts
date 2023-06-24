import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * The plugin registration information.
 */
const cellToolbar: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:cell-toolbar',
  description: 'A JupyterLab extension changing the Cell Toolbar.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: async (_: JupyterFrontEnd, settingRegistry: ISettingRegistry) => {
    console.log('The Cell Toolbar extension is activated.');
    // Nothing is needed, this is done by config.
    // The following is just to show in the browser console the loaded setting.
    if (settingRegistry) {
      const setting = await settingRegistry.load(cellToolbar.id);
      console.log('--- cellToolbar setting', setting);
    }
  }
};

export default cellToolbar;
