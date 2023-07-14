import React from 'react';
import ContextExample from './contextexample';
import { storyPageParameters } from '../../../../.storybook/storyPageParameters';

export default {
  title: 'MaterialUI/Pages/Misc',
  parameters: storyPageParameters,
};

export const ContextAPI = () => <ContextExample />;
