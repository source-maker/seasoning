import { RHFSwitchbox } from './RHFSwitchbox';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/RHFSwitchbox',
  component: RHFSwitchbox,
};

const Template: ComponentStory<typeof RHFSwitchbox> = (args) => {
  const { control } = useFormContext();
  return <RHFSwitchbox {...args} name="SwitchBoxTest" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Test',
  size: 'medium',
};
