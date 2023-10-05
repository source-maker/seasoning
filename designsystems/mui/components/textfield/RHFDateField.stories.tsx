import { RHFDateField } from './RHFDateField';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/RHFDateField',
  component: RHFDateField,
};

const Template: ComponentStory<typeof RHFDateField> = (args) => {
  const { control } = useFormContext();
  return <RHFDateField {...args} name="Test" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  required: true,
  size: 'small',
};
