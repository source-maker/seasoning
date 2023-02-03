import { BrothTextField } from '@/components/textfield/BrothTextField';
import { ComponentStory } from '@storybook/react';
import { useFormContext } from 'react-hook-form';

export default {
  title: 'Components/TextField',
  component: BrothTextField,
};

const Template: ComponentStory<typeof BrothTextField> = (args) => {
  const { control } = useFormContext();
  return <BrothTextField {...args} name="Test" control={control} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Label',
  placeholder: 'Type something...',
  focused: false,
  hiddenLabel: false,
};
