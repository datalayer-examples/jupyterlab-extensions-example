import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

import { showDialog, Dialog } from '@jupyterlab/apputils';

import { buildIcon, runIcon } from '@jupyterlab/ui-components';

const COMMAND_ID = 'jupyterlabextensions/context-menu:open';

const contextMenu: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:context-menu',
  autoStart: true,
  requires: [IFileBrowserFactory],
  optional: [],
  activate: (app: JupyterFrontEnd, factory: IFileBrowserFactory) => {
    app.docRegistry.addFileType({
      name: 'example',
      icon: runIcon,
      displayName: 'Example File',
      extensions: ['.example'],
      fileFormat: 'text',
      contentType: 'file',
      mimeTypes: ['text/plain']
    });
    app.commands.addCommand(COMMAND_ID, {
      label: 'Example',
      caption: "Example context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {
        const file = factory.tracker.currentWidget.selectedItems().next();
        showDialog({
          title: file.name,
          body: 'Path: ' + file.path,
          buttons: [Dialog.okButton()]
        }).catch(e => console.log(e));
      }
    });
    app.contextMenu.addItem({
      command: COMMAND_ID,
      selector: '.jp-DirListing-item[data-file-type="example"]',
      rank: 0
    });
  }
}

export default contextMenu;
