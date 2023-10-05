import { RHFRadioGroup } from './RHFRadioGroup';
import { RadioLabel } from './RadioLabel';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/RHFRadioGroup',
  component: RHFRadioGroup,
};

const Template: ComponentStory<typeof RHFRadioGroup> = (args) => {
  const { control } = useFormContext();
  const options = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' },
  ];
  const items = options.map((o, index) => (
    <RadioLabel value={o.value} label={o.label} key={`${args.name}-${index}`} />
  ));
  return (
    <RHFRadioGroup {...args} name="RadioTest" control={control}>
      {items}
    </RHFRadioGroup>
  );
};

export const Playground = Template.bind({});
