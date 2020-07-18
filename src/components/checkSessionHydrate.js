import React from 'react';
import { hydrate } from 'react-dom';
import CheckSession from './checksession';
hydrate(
  <CheckSession inputName={window.inputName} />,
  document.getElementById('reactele')
);
