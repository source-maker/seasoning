import { AutocompleteTextfield } from '@/components/textfield/AutocompleteTextField';
import { ComponentStory } from '@storybook/react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'Components/Autocomplete',
  component: AutocompleteTextfield,
};

const Template: ComponentStory<typeof AutocompleteTextfield> = (args) => {
  const { control } = useFormContext();
  return (
    <AutocompleteTextfield
      {...args}
      name="AutocompleteTextfield-Example"
      label="label"
      control={control}
      options={['Menu Item', 'Menu Item 2', 'Menu Item 3']}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Label',
  placeholder: 'Type something...',
};
