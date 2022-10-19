import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IDocumentManager } from '@jupyterlab/docmanager';

import { DocumentRegistry } from '@jupyterlab/docregistry';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:internals:plugin',
  autoStart: true,
  requires: [ IDocumentManager],
  activate: (
    app: JupyterFrontEnd,
    docManager: IDocumentManager,
  ) => {
    const fileTypes = docManager.registry.fileTypes();
    let ft: DocumentRegistry.IFileType;
    // eslint-disable-next-line no-cond-assign
    while (ft = fileTypes.next()) {
      console.log('fileType', ft, ft.mimeTypes, docManager.registry.defaultWidgetFactory('test.' + ft.extensions[0]));      
    }
    const modelFactories = docManager.registry.modelFactories();
    let mf: DocumentRegistry.IModelFactory<any>;
    // eslint-disable-next-line no-cond-assign
    while (mf = modelFactories.next()) {
      console.log('modelFactory', mf);
    }
    const widgetFactories = docManager.registry.widgetFactories();
    let wf: DocumentRegistry.WidgetFactory;
    // eslint-disable-next-line no-cond-assign
    while (wf = widgetFactories.next()) {
      console.log('widgetFactory', wf, wf.fileTypes);
      const widgetExtensions = docManager.registry.widgetExtensions(wf.name);
      let we: DocumentRegistry.WidgetExtension;
      // eslint-disable-next-line no-cond-assign
      while (we = widgetExtensions.next()) {
        console.log('--- widgetExtension', we);
      }
    }
  }

};

export default extension;
