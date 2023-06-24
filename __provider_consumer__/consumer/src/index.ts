import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

import { IProvider } from '@datalayer-examples/ext-provider';

/**
 * Initialization data for the consumer extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'consumer',
  autoStart: true,
  requires: [ IProvider ],
  activate: (app: JupyterFrontEnd, provider: IProvider) => {
    console.log('JupyterLab extension consumer is activated!');
    console.log(`Provider token is ${provider}`);
  }
};

export default extension;
