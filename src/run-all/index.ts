import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { NotebookPanel, INotebookModel } from '@jupyterlab/notebook';
import { IDisposable } from '@lumino/disposable';
import { ToolbarButton } from '@jupyterlab/apputils';
import { DocumentRegistry } from '@jupyterlab/docregistry';

class RunAllCellsButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
  private readonly app: JupyterFrontEnd;

  constructor(app: JupyterFrontEnd) {
    this.app = app;
  }

  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
    // Create the on-click callback for the toolbar button.
    const runAllCells = () => {
      this.app.commands.execute('notebook:run-all-cells');
    };
    // Create the toolbar button.
    const button = new ToolbarButton({
      className: 'runAllCellsButton',
      iconClass: 'fa fa-fast-forward',
      onClick: runAllCells,
      tooltip: 'Run All Cells'
    });
    // Add the toolbar button to the notebook.
    panel.toolbar.insertItem(6, 'runAllCells', button);
    // The ToolbarButton class implements `IDisposable`, so the
    // button *is* the extension for the purposes of this method.
    return button;
  }
}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:runall:extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd): void => {
    const runAllExtension = new RunAllCellsButtonExtension(app);
    app.docRegistry.addWidgetExtension('notebook', runAllExtension);
    app.contextMenu.addItem({
      selector: '.jp-Notebook',
      command: 'notebook:run-all-cells',
      rank: -0.5
    });
  }
}

export default plugin;
