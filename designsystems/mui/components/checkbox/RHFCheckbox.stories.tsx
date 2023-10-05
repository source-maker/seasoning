import { RHFCheckbox } from './RHFCheckbox';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/RHFCheckbox',
  component: RHFCheckbox,
};

const Template: ComponentStory<typeof RHFCheckbox> = (args) => {
  const { control } = useFormContext();
  return <RHFCheckbox {...args} name="CheckBoxTest" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Test',
  size: 'medium',
};
