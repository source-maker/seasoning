import React from 'react';
import { AutocompleteTextFieldWithHint } from './AutocompleteTextFieldWithHint';
import { ComponentStory } from '@storybook/react';
import { useFormContext } from 'react-hook-form';
import { useAutoCompleteTextFieldWithHint } from '../../hooks/useAutoCompleteTextFieldWithHint';

export default {
  title: 'MaterialUI/Components/AutocompleteWithHint',
  component: AutocompleteTextFieldWithHint,
};

const Template: ComponentStory<typeof AutocompleteTextFieldWithHint> = (
  args
) => {
  const { control } = useFormContext();
  const withHintArgs = useAutoCompleteTextFieldWithHint(args.name, control);
  return (
    <AutocompleteTextFieldWithHint
      {...args}
      {...withHintArgs}
      label="label"
      control={control}
      options={['Test Item', 'Menu Item 2', 'Menu Item 3']}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Label',
  placeholder: 'Type something...',
  name: 'AutocompleteTextfieldWithHint-Example',
};
