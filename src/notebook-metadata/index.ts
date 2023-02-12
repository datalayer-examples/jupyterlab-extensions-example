import { 
  JupyterFrontEnd, 
  JupyterFrontEndPlugin, 
  ILayoutRestorer 
} from '@jupyterlab/application';

import { 
  ICommandPalette,
  WidgetTracker 
} from '@jupyterlab/apputils';

import { 
  IEditorServices,
  JSONEditor,
  IEditorFactoryService
} from '@jupyterlab/codeeditor';

import { JSONExt } from '@lumino/coreutils';

import { Message } from '@lumino/messaging';

import { PanelLayout, Widget } from '@lumino/widgets';

import { INotebookTracker } from '@jupyterlab/notebook';

import { codeIcon } from '@jupyterlab/ui-components';

class MetadataEditorWidget extends Widget {
  readonly containerDiv: HTMLDivElement
  readonly editorDiv: HTMLDivElement;
  readonly notebookTracker: INotebookTracker;
  readonly editor: JSONEditor;

  constructor(notebookTracker: INotebookTracker, editorFactoryService: IEditorFactoryService) {
    super();
    this.notebookTracker = notebookTracker;
    this.id = 'notebook-metadata-editor';
    this.title.label = 'Notebook Metadata';
    this.title.icon = codeIcon;
    this.title.closable = true;
    this.addClass('jp-MetadataEditorWidget')
    this.containerDiv = document.createElement('div');
    this.node.appendChild(this.containerDiv);
    this.editorDiv = document.createElement('div');
    this.containerDiv.appendChild(this.editorDiv);
    this.editor = new JSONEditor({
        editorFactory: editorFactoryService.newDocumentEditor,
    });
    this.editor.title.label = 'Notebook Metadata';
    // FIXME: JSON serialization seems to use 4space indent, so this doesn't actually work.
    this.editor.editor.setOption('tabSize', 2);
    this.editor.editor.setOption('lineWrap', 'off');
    const layout = new PanelLayout()
    layout.insertWidget(0, this.editor);
    this.layout = layout;
    this.notebookTracker.currentChanged.connect(() => { this.update() });
  }

  onUpdateRequest(msg: Message) {
    const notebook = this.notebookTracker.currentWidget;
    if (notebook !== null && notebook.isAttached) {
        /*
        const metadata = notebook.content.model.metadata;
        this.editor.model = metadata; // TODO Fix this.
        */
        this.editor.title.label =  'Notebook Metadata (' + notebook.title.label + ')'; 
    }
    return true;
  }
}

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabextensions:nbmetadata',
  autoStart: true,
  requires: [
    ICommandPalette, 
    ILayoutRestorer, 
    INotebookTracker, 
    IEditorServices
  ],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette, 
    restorer: ILayoutRestorer, 
    notebookTracker: INotebookTracker, 
    editorServices: IEditorServices
  ) => {
    const widget = new MetadataEditorWidget(notebookTracker, editorServices.factoryService);
    const command = 'nbmetadata:edit';
    app.commands.addCommand(command, {
      label: 'Notebook Metadata Editor',
      execute: () => {
        widget.update();
        app.shell.activateById(widget.id);
      },
    })
    palette.addItem({command, category: 'Notebook Operations'});
    const tracker = new WidgetTracker<Widget>({ namespace: 'nbmetadata-editor' });
    if (!tracker.has(widget)) {
      tracker.add(widget);
    }
    if (!widget.isAttached) {
      app.shell.add(widget, 'right', { rank: 1000 });
    }
    restorer.restore(tracker, {
      command,
      args: () => JSONExt.emptyObject,
      name: () => 'nbmetadata-editor'
    });
  }
}

export default plugin;
