// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import {expect} from '@jest/globals';

import { Application } from '@lumino/application';
import { Widget } from '@lumino/widgets';
// import { ContextMenu, Widget } from '@lumino/widgets';
// import { CommandRegistry } from '@lumino/commands';
import { Token } from '@lumino/coreutils';

describe('@lumino/application', () => {
  describe('Application', () => {
    describe('#constructor', () => {
      it('should instantiate an application', () => {
        const shell = new Widget();
        const app = new Application({
          shell
        });

//        expect(app).toBe.instanceOf(Application);
//        expect(app.commands).toBe.instanceOf(CommandRegistry);
//        expect(app.contextMenu).toBe.instanceOf(ContextMenu);
        expect(app.shell).toEqual(shell);
      });
    });

    describe('#getPluginDescription', () => {
      it('should return the plugin description', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        const description = 'Plugin 1 description';
        app.registerPlugin({
          id,
          description,
          activate: () => {
            // no-op
          }
        });

        expect(app.getPluginDescription(id)).toEqual(description);
      });

      it('should return an empty string if plugin has no description', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        expect(app.getPluginDescription(id)).toEqual('');
      });

      it('should return an empty string if plugin does not exist', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';

        expect(app.getPluginDescription(id)).toEqual('');
      });
    });

    describe('#hasPlugin', () => {
      it('should be true for registered plugin', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        expect(app.hasPlugin(id)).toBe(true);
      });

      it('should be false for unregistered plugin', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        expect(app.hasPlugin('plugin2')).toBe(false);
      });
    });

    describe('#isPluginActivated', () => {
      it('should be true for activated plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });
        await app.activatePlugin(id);
        expect(app.isPluginActivated(id)).toBe(true);
      });

      it('should be true for an autoStart plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          },
          autoStart: true
        });
        await app.start();
        expect(app.isPluginActivated(id)).toBe(true);
      });

      it('should be false for not activated plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });
        expect(app.isPluginActivated(id)).toBe(false);
      });

      it('should be false for unregistered plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });
        await app.activatePlugin(id);
        expect(app.isPluginActivated('no-registered')).toBe(false);
      });
    });

    describe('#listPlugins', () => {
      it('should list the registered plugin', () => {
        const app = new Application({ shell: new Widget() });
        const ids = ['plugin1', 'plugin2'];
        ids.forEach(id => {
          app.registerPlugin({
            id,
            activate: () => {
              // no-op
            }
          });
        });

//        expect(app.listPlugins()).to.deep.equal(ids);
      });
    });

    describe('#registerPlugin', () => {
      it('should register a plugin', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        expect(app.hasPlugin(id)).toBe(true);
      });

      it('should not register an already registered plugin', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        expect(function () {
          app.registerPlugin({
            id,
            activate: () => {
              // no-op
            }
          });
        }).toThrow();
      });

      it('should not register a plugin introducing a cycle', () => {
        const app = new Application({ shell: new Widget() });
        const id1 = 'plugin1';
        const token1 = new Token<any>(id1);
        const id2 = 'plugin2';
        const token2 = new Token<any>(id2);
        const id3 = 'plugin3';
        const token3 = new Token<any>(id3);
        app.registerPlugin({
          id: id1,
          activate: () => {
            // no-op
          },
          requires: [token3],
          provides: token1
        });
        app.registerPlugin({
          id: id2,
          activate: () => {
            // no-op
          },
          requires: [token1],
          provides: token2
        });

        expect(function () {
          app.registerPlugin({
            id: id3,
            activate: () => {
              // no-op
            },
            requires: [token2],
            provides: token3
          });
        }).toThrow();
      });

      it('should register a plugin defined by a class', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        const plugin = new (class {
          readonly id = id;
          activate = () => {
            // Check this.id is accessible as expected
            // as we are tearing a part the plugin object.
            expect(this.id).toEqual(id);
          };
        })();
        app.registerPlugin(plugin);

        expect(app.hasPlugin(id)).toBe(true);
      });
    });

    describe('#deregisterPlugin', () => {
      it('should deregister a deactivated registered plugin', () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        app.deregisterPlugin(id);

        expect(app.hasPlugin(id)).toBe(false);
      });

      it('should not deregister an activated registered plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        await app.activatePlugin(id);

        expect(() => {
          app.deregisterPlugin(id);
        }).toThrow();
        expect(app.hasPlugin(id)).toBe(true);
      });

      it('should force deregister an activated registered plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        await app.activatePlugin(id);

        app.deregisterPlugin(id, true);
        expect(app.hasPlugin(id)).toBe(false);
      });
    });

    describe('#activatePlugin', () => {
      it('should activate a registered plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });
        await app.activatePlugin(id);
        expect(app.isPluginActivated(id)).toBe(true);
      });

      it('should throw an error when activating a unregistered plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        try {
          await app.activatePlugin('other-id');
        } catch (reason) {
          return;
        }

        expect(false).toBe(true);
      });

      it('should tolerate activating an activated plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });
        await app.activatePlugin(id);

        await app.activatePlugin(id);

        expect(app.isPluginActivated(id)).toBe(true);
      });

      it('should activate all required services', async () => {
        const app = new Application({ shell: new Widget() });
        const id1 = 'plugin1';
        const token1 = new Token<any>(id1);
        const id2 = 'plugin2';
        const token2 = new Token<any>(id2);
        const id3 = 'plugin3';
        const token3 = new Token<any>(id3);
        app.registerPlugin({
          id: id1,
          activate: () => {
            // no-op
          },
          provides: token1
        });
        app.registerPlugin({
          id: id2,
          activate: () => {
            // no-op
          },
          requires: [token1],
          provides: token2
        });
        app.registerPlugin({
          id: id3,
          activate: () => {
            // no-op
          },
          requires: [token2],
          provides: token3
        });

        await app.activatePlugin(id3);

        expect(app.isPluginActivated(id3)).toBe(true);
        expect(app.isPluginActivated(id1)).toBe(true);
        expect(app.isPluginActivated(id2)).toBe(true);
      });

      it('should try activating all optional services', async () => {
        const app = new Application({ shell: new Widget() });
        const id1 = 'plugin1';
        const token1 = new Token<any>(id1);
        const id2 = 'plugin2';
        const token2 = new Token<any>(id2);
        const id3 = 'plugin3';
        const token3 = new Token<any>(id3);
        app.registerPlugin({
          id: id1,
          activate: () => {
            // no-op
          },
          provides: token1
        });
        app.registerPlugin({
          id: id2,
          activate: () => {
            throw new Error(`Force failure during '${id2}' activation`);
          },
          provides: token2
        });
        app.registerPlugin({
          id: id3,
          activate: () => {
            // no-op
          },
          optional: [token1, token2],
          provides: token3
        });

        await app.activatePlugin(id3);

        expect(app.isPluginActivated(id3)).toBe(true);
        expect(app.isPluginActivated(id1)).toBe(true);
        expect(app.isPluginActivated(id2)).toBe(false);
      });
    });

    describe('#deactivatePlugin', () => {
      it('should call deactivate on the plugin', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        let deactivated: boolean | null = null;
        app.registerPlugin({
          id,
          activate: () => {
            deactivated = false;
          },
          deactivate: () => {
            deactivated = true;
          }
        });

        await app.activatePlugin(id);

        expect(deactivated).toBe(false);

        const others = await app.deactivatePlugin(id);

        expect(deactivated).toBe(true);
        expect(others.length).toEqual(0);
      });

      it('should throw an error if the plugin does not support deactivation', async () => {
        const app = new Application({ shell: new Widget() });
        const id = 'plugin1';
        app.registerPlugin({
          id,
          activate: () => {
            // no-op
          }
        });

        await app.activatePlugin(id);

        try {
          await app.deactivatePlugin(id);
        } catch (r) {
          return;
        }

        expect(true).toBe(false);
      });

      it('should throw an error if the plugin has dependants not support deactivation', async () => {
        const app = new Application({ shell: new Widget() });
        const id1 = 'plugin1';
        const token1 = new Token<any>(id1);
        const id2 = 'plugin2';
        const token2 = new Token<any>(id2);
        const id3 = 'plugin3';
        const token3 = new Token<any>(id3);
        app.registerPlugin({
          id: id1,
          activate: () => {
            // no-op
          },
          deactivate: () => {
            // no-op
          },
          provides: token1
        });
        app.registerPlugin({
          id: id2,
          activate: () => {
            // no-op
          },
          deactivate: () => {
            // no-op
          },
          requires: [token1],
          provides: token2
        });
        app.registerPlugin({
          id: id3,
          activate: () => {
            // no-op
          },
          requires: [token2],
          provides: token3
        });

        await app.activatePlugin(id3);

        try {
          await app.deactivatePlugin(id1);
        } catch (r) {
          return;
        }

        expect(true).toBe(false);
      });

      it('should deactivate all dependents (optional or not)', async () => {
        const app = new Application({ shell: new Widget() });
        let deactivated: boolean | null = null;
        const id1 = 'plugin1';
        const token1 = new Token<any>(id1);
        const id2 = 'plugin2';
        const token2 = new Token<any>(id2);
        const id3 = 'plugin3';
        const token3 = new Token<any>(id3);
        app.registerPlugin({
          id: id1,
          activate: () => {
            deactivated = false;
          },
          deactivate: () => {
            deactivated = true;
          },
          provides: token1
        });
        app.registerPlugin({
          id: id2,
          activate: () => {
            // no-op
          },
          deactivate: () => {
            // no-op
          },
          requires: [token1],
          provides: token2
        });
        app.registerPlugin({
          id: id3,
          activate: () => {
            // no-op
          },
          deactivate: () => {
            // no-op
          },
          optional: [token2],
          provides: token3
        });

        await app.activatePlugin(id3);

//        const others = await app.deactivatePlugin(id1);

        expect(deactivated).toBe(true);
//        expect(others).to.deep.equal([id3, id2]);
        expect(app.isPluginActivated(id2)).toBe(false);
        expect(app.isPluginActivated(id3)).toBe(false);
      });
    });
  });
});
