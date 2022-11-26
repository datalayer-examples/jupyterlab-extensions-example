import React from 'react';

import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

import { ReactWidget } from '@jupyterlab/apputils';

import { Table, Cell, Column } from 'fixed-data-table-2';

import 'fixed-data-table-2/dist/fixed-data-table.css';

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'text/csv';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-table';

/**
 * A widget for rendering table.
 */
export class OutputWidget extends ReactWidget implements IRenderMime.IRenderer {

  private rows: string[][];

  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.rows = [];
    this.addClass(CLASS_NAME);
  }

  /**
   * Render table into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    const data = model.data[this._mimeType] as string;
    const rows = data.split('\n').map(row => row.split(';'));
    this.node.textContent = rows.join('|');
    this.rows = rows;
    return Promise.resolve();
  }

  render(): JSX.Element {
    const colCount = this.rows.length > 0 ? this.rows[0].length : 0;
    if (colCount === 0) {
      return <div>No data found!</div>;
    }
    const columns = [];
    for (let i = 0; i < colCount; ++i) {
      columns.push(
        <Column
          header={<Cell>Col {i}</Cell>}
          columnKey={i}
          cell={({
            rowIndex,
            columnKey,
            ...props
          }: {
            rowIndex: number;
            columnKey?: string;
          }) => <Cell {...props}>{this.rows[rowIndex][Number(columnKey)]}</Cell>}
          width={100}
        />
      );
    }

    return (
      /* , containIntrinsicSize: '400px' */ 
      <div style={{contentVisibility: 'auto'}}>
        <Table
          rowHeight={50}
          rowsCount={this.rows.length}
          width={800}
          height={500}
          headerHeight={50}
        >
          {columns}
        </Table>
      </div>
    );
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for table data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};

/**
 * Extension definition.
 */
const renderer: IRenderMime.IExtension = {
  id: 'jupyterlabextensions:rendermime-extensions:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'string',
  fileTypes: [
    {
      name: 'table',
      mimeTypes: [MIME_TYPE],
      extensions: ['.csv']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'Table Viewer',
    primaryFileType: 'table',
    fileTypes: ['table'],
    defaultFor: ['table']
  }
};

export default renderer;
