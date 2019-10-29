import React from 'react';
import QubitViewer from './QubitViewer';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

var data = require('./data.json');

export const app = {
  id: '1',
  title: 'Test app',
  state: 'APP_STATE',
};

storiesOf('QubitViewer', module)
  .add('default', () => <QubitViewer x = {data['x']} y = {data['y']} z = {data['z']} r = {1} theta = {15} phi = {4} />)