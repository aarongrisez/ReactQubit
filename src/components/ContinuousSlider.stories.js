import React from 'react';
import ContinuousSlider from './ContinuousSlider';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

export const app = {
  id: '1',
  title: 'Test app',
  state: 'APP_STATE',
};

storiesOf('ContinuousSlider', module)
  .add('default', () => <ContinuousSlider label = 'DefaultSlider' />)