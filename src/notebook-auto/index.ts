import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IDocumentManager } from '@jupyterlab/docmanager';

/**
 * Initialization for the autoCreate extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:auto-create',
  autoStart: true,
  requires: [IDocumentManager],
  activate: (
    app: JupyterFrontEnd,
    docManager: IDocumentManager,
  ) => {
    const notebook = docManager.createNew('tmp.ipynb', 'notebook');
    if (notebook) {
      app.shell.add(notebook, 'main');
    }
  }
}

export default extension;
