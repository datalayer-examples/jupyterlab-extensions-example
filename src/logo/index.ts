import {
  ILabShell,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { circleIcon } from '@jupyterlab/ui-components';

import { Widget } from '@lumino/widgets';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:logo',
  autoStart: true,
  requires: [ILabShell],
  activate: (_: JupyterFrontEnd, shell: ILabShell) => {
    console.log('jupyterlabextensions:logo is activated.');
    const logo = new Widget();
    circleIcon.element({
      container: logo.node,
      elementPosition: 'center',
      margin: '2px 2px 2px 8px',
      height: 'auto',
      width: '16px'
    });
    logo.id = 'jp-MainLogo';
    shell.add(logo, 'top', { rank: 0 });
    console.log('The new logo is added.');
  }
};

export default plugin;
