import React from 'react';
import App from './App';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

var data = require('./data.json');

export const app = {
  id: '1',
  title: 'Test app',
  state: 'APP_STATE',
};

storiesOf('App', module)
  .add('default', () => <App x = {data['x']} y = {data['y']} z = {data['z']} r = {1} theta = {15} phi = {4} />)