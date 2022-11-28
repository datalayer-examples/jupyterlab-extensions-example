import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

import { JSONObject } from '@lumino/coreutils';

import { Widget } from '@lumino/widgets';

/**
 * The default mime type for the plugin.
 */
const MIME_TYPE = 'application/vnd.datalayer.certificate';

/**
 * The class name added to the plugin.
 */
const CLASS_NAME = 'mimerenderer-certificate';

/**
 * A widget for rendering Certificate.
 */
export class OutputWidget extends Widget implements IRenderMime.IRenderer {
  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render Certificate into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {

    const data = model.data[this._mimeType] as JSONObject;
//    this.node.textContent = JSON.stringify(data);
    const given = data['given'];
    const event = data['event'];
    this.node.innerHTML = `
      <div class="certificate">
        <div class="paper">
          <div class="title">Certificate</div>
            <div class="text">${given}</div>
              <div class="text">For mastery of JupyterLab</div>
                <div class="text">${event}</div>
              </div>
            <div class="medal"></div>
          <div class="ribbon ribbon1"></div>
        <div class="ribbon ribbon2"></div>
      </div>
      `
    return Promise.resolve();
  }

  private _mimeType: string;
}

/**
 * A mime renderer factory for Certificate data.
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
  id: 'jupyterlabextensions:rendermime-certificate:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'json',
  fileTypes: [
    {
      name: 'certificate',
      mimeTypes: [MIME_TYPE],
      extensions: ['.cert']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'Certificate Viewer',
    primaryFileType: 'certificate',
    fileTypes: ['certificate'],
    defaultFor: ['certificate']
  }
};

export default renderer;
