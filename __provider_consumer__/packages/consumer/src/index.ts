import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IProvider } from '@datalayer/example-ext-provider';

/**
 * Initialization data for the consumer extension.
 */
const consumerPlugin: JupyterFrontEndPlugin<void> = {
  id: 'consumer',
  autoStart: true,
  requires: [ IProvider ],
  activate: (app: JupyterFrontEnd, provider: IProvider) => {
    console.log('JupyterLab extension consumer is activated!');
    console.log(`The token instance provided by the provider is ${provider}`);
  }
};

export default consumerPlugin;
