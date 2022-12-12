import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { buildIcon } from '@jupyterlab/ui-components';

import { Model } from './model';

import { GraphContainer } from './widget';

/**
 * Initialization data for the jupyterlab-plugin-graph extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:plugin-graph',
  autoStart: true,
  optional: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette | null) => {
    const { commands, shell } = app;
    app.restored.then(() => {
      const plugins = app['_plugins'];
      const model = new Model({ plugins });
      const command = 'jupyterlab-plugin-graph:open';
      commands.addCommand(command, {
        label: 'Dependency Graph Plugin',
        caption: 'Open the plugin dependency graph',
        execute: () => {
          const widget = new GraphContainer({ model });
          widget.title.label = 'Plugin Graph';
          widget.title.icon = buildIcon;
          shell.add(widget, 'main');
          widget.content.update();
        },
      });
      if (palette) {
        palette.addItem({ command, category: 'Developer' });
      }
    });
  },
};

export default plugin;
