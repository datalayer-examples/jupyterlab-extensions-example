import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

import { IDocumentManager } from '@jupyterlab/docmanager';

import { DocumentRegistry } from '@jupyterlab/docregistry';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:internals:plugin',
  autoStart: true,
  requires: [ IDocumentManager ],
  activate: (
    app: JupyterFrontEnd,
    docManager: IDocumentManager,
  ) => {
    const fileTypes = docManager.registry.fileTypes();
    let ft: DocumentRegistry.IFileType;
    const fts = [];
    // eslint-disable-next-line no-cond-assign
    while (ft = fileTypes.next().value) {
      fts.push({'ft': ft, 'mimeTypes': ft.mimeTypes, 'widgetFactory': docManager.registry.defaultWidgetFactory('test.' + ft.extensions[0]) });
    }
    console.log('File Types', fts);
    const modelFactories = docManager.registry.modelFactories();
    const mfs = [];
    let modelFactory: DocumentRegistry.IModelFactory<any>;
    // eslint-disable-next-line no-cond-assign
    while (modelFactory = modelFactories.next().value) {
      mfs.push(modelFactory);
    }
    console.log('Model Factories', mfs);
    const widgetFactories = docManager.registry.widgetFactories();
    const wes = [];
    let wf: DocumentRegistry.WidgetFactory;
    // eslint-disable-next-line no-cond-assign
    while (wf = widgetFactories.next().value) {
      console.log('widgetFactory', wf, wf.fileTypes);
      const widgetExtensions = docManager.registry.widgetExtensions(wf.name);
      let we: DocumentRegistry.WidgetExtension;
      // eslint-disable-next-line no-cond-assign
      while (we = widgetExtensions.next().value) {
        wes.push(we);
      }
    }
    console.log('Widget Extensions', wes);
  }

};

export default plugin;
