import { Token } from '@lumino/coreutils';
import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

export type IProvider = string;

export const IProvider = new Token<IProvider>(
  'provider:plugin'
);

/**
 * Initialization data for the provider extension.
 */
const providerPlugin: JupyterFrontEndPlugin<IProvider> = {
  id: 'provider:plugin',
  provides: IProvider,
  autoStart: true,
  activate: (app: JupyterFrontEnd): IProvider => {
    console.log('JupyterLab plugin provider:plugin is activated.');
    return 'PROVIDER_STRING';
  }
};

export default providerPlugin;
