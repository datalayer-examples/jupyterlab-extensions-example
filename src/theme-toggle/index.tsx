import ReactSwitch from 'react-switch';

import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

import { IThemeManager, ReactWidget } from '@jupyterlab/apputils';

import React, { useState, useEffect } from 'react';

import { ITopBar } from '../topbar/topbar';

interface ISwitchProps {
  title?: string;
  themeManager: IThemeManager;
  onChange: any;
  innerLabel: string;
  innerLabelChecked: string;
  dark?: boolean;
}

const Switch = (props: ISwitchProps) => {
  const { themeManager, ...others } = props;

  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(!!props.dark);
  }, [props.dark]);

  const updateChecked = () => {
    const isDark = !themeManager.isLight(themeManager.theme);
    setDark(!!isDark);
  };

  useEffect(() => {
    let timeout: any = 0;
    if (!themeManager.theme) {
      // TODO: Investigate why the themeManager is undefined
      timeout = setTimeout(() => {
        updateChecked();
      }, 500);
    } else {
      updateChecked();
    }
    themeManager.themeChanged.connect(updateChecked);

    return () => {
      clearTimeout(timeout);
      themeManager.themeChanged.disconnect(updateChecked);
    }
  });

  const handleChange = (checked: boolean) => {
    console.log('Switch change checked', checked);
  }

  return (
    <ReactSwitch
      {...others}
      onChange={handleChange}
      checked={dark}
//      className={props.className + ' jp-Switch'}
    />
  );
}

/**
 * Initialization data for the jupyterlab-theme-toggle plugin.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-toggle:plugin',
  autoStart: true,
  requires: [IThemeManager],
  optional: [ITopBar],
  activate: (
    app: JupyterFrontEnd,
    themeManager: IThemeManager,
    topBar: ITopBar
  ) => {

    const { commands } = app;

    // TODO: Make this configurable via the settings?
    const themes = [
      'JupyterLab Light', // Light Theme goes first
      'JupyterLab Dark'
    ];

    const onChange = async () => {
      const isLight = themeManager.isLight(themeManager.theme);
      await app.commands.execute('apputils:change-theme', {
        theme: themes[~~isLight]
      });
    }

    commands.addCommand('jupyterlab-theme-toggle:toggle', {
      label: 'Toggle Theme',
      execute: onChange
    });

    if (topBar) {
      const widget = ReactWidget.create(
        <Switch
          themeManager={themeManager}
          onChange={onChange}
          innerLabel="light"
          innerLabelChecked="dark"
        />
      );
      topBar.addItem('theme-toggle', widget);
    }
  }

}

export default plugin;
