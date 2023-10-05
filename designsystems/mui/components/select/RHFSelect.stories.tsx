import { RHFSelect } from './RHFSelect';
import { MenuItem } from '@mui/material';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/Select',
  component: RHFSelect,
};

const Template: ComponentStory<typeof RHFSelect> = (args) => {
  const { control } = useFormContext();
  return (
    <RHFSelect {...args} name="Test" control={control}>
      <MenuItem value={'test1'}>test1</MenuItem>
      <MenuItem value={'test2'}>test2</MenuItem>
      <MenuItem value={'test3'}>test3</MenuItem>
    </RHFSelect>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Label',
};
