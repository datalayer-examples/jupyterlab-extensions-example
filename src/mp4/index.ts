import { IRenderMime } from '@jupyterlab/rendermime-interfaces';

import { Widget } from '@lumino/widgets';

/**
 * The default mime type for the extension.
 */
const MIME_TYPE = 'video/mp4';

/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'mimerenderer-mp4';

/**
 * A widget for rendering mp4.
 */
export class VideoWidget extends Widget implements IRenderMime.IRenderer {

  private _video: HTMLVideoElement;
  private _mimeType: string;

  /**
   * Construct a new output widget.
   */
  constructor(options: IRenderMime.IRendererOptions) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
    this._video = document.createElement('video');
    this._video.setAttribute('controls', '');
    this.node.appendChild(this._video);
  }

  /**
   * Render mp4 into this widget's node.
   */
  renderModel(model: IRenderMime.IMimeModel): Promise<void> {
    const data = model.data[this._mimeType] as string;
    this._video.src = `data:${MIME_TYPE};base64,${data}`;
    return Promise.resolve();
  }

}

/**
 * A mime renderer factory for mp4 data.
 */
export const rendererFactory: IRenderMime.IRendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new VideoWidget(options)
};

/**
 * Extension definition.
 */
const mp4: IRenderMime.IExtension = {
  id: 'jupyterlabextensions:mp4:plugin',
  rendererFactory,
  rank: 0,
  dataType: 'string',
  fileTypes: [
    {
      name: 'mp4',
      iconClass: 'jp-Icon mimerenderer-mp4-icon',
      fileFormat: 'base64',
      mimeTypes: [MIME_TYPE],
      extensions: ['.mp4']
    }
  ],
  documentWidgetFactoryOptions: {
    name: 'JupyterLab mp4 viewer',
    primaryFileType: 'mp4',
    modelName: 'base64',
    fileTypes: ['mp4'],
    defaultFor: ['mp4']
  }
};

export default mp4;
