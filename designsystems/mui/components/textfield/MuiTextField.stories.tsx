import { MuiTextField } from './MuiTextField';
import { ComponentStory } from '@storybook/react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'MaterialUI/Components/TextField',
  component: MuiTextField,
};

const Template: ComponentStory<typeof MuiTextField> = (args) => {
  const { control } = useFormContext();
  return <MuiTextField {...args} name="Test" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Label',
  placeholder: 'Type something...',
  focused: false,
  hiddenLabel: false,
};
