import { RHFDatePicker } from './RHFDatePicker';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/RHFDatePicker',
  component: RHFDatePicker,
};

const Template: ComponentStory<typeof RHFDatePicker> = (args) => {
  const { control } = useFormContext();
  return <RHFDatePicker {...args} name="Test" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  required: true,
};
