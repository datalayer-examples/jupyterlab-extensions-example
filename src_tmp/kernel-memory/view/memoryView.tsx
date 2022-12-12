import { ReactWidget } from '@jupyterlab/apputils';
import React, { useState, useEffect } from 'react';
import { IndicatorComponent } from './indicator';
import { ResourceUsage } from './model';

export const MemoryViewComponent = ({
  model,
  label,
}: {
  model: ResourceUsage.Model;
  label: string;
}): React.ReactElement => {
  const [text, ] = useState('');
  const [values, setValues] = useState([]);

  const update = (): void => {
    /*
    const { memoryLimit, currentMemory, units } = model;
    const precision = ['B', 'KB', 'MB'].indexOf(units) > 0 ? 0 : 2;
    const newText = `${currentMemory.toFixed(precision)} ${
      memoryLimit ? '/ ' + memoryLimit.toFixed(precision) : ''
    } ${units}`;
    const newValues = model.values.map((value) => value.memoryPercent);
    setText(newText);
    setValues(newValues);
    */
    setValues(model.values);
  };

  useEffect(() => {
    model.changed.connect(update);
    return (): void => {
      model.changed.disconnect(update);
    };
  }, []);

  return ( 
    <IndicatorComponent
      enabled={model.memoryAvailable}
      values={values}
      label={label}
      color={'#00B35B'}
      text={text}
    />
  );
};

export namespace MemoryView {
  /**
   * Create a new MemoryView React Widget.
   *
   * @param model The resource usage model.
   * @param label The label next to the component.
   */
  export const createMemoryView = (
    model: ResourceUsage.Model,
    label: string
  ): ReactWidget => {
    return ReactWidget.create(
      <MemoryViewComponent model={model} label={label} />
    );
  };
}
