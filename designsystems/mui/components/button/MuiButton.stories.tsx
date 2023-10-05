import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { MuiButton } from './MuiButton';
import * as icons from '@mui/icons-material';

export default {
  title: 'MaterialUI/Components/Button',
  component: MuiButton,
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args) => {
  return <MuiButton {...args} />;
};

export const Playground = Template.bind({});

Playground.args = {
  children: 'Click me!',
  variant: 'contained',
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
};

Playground.argTypes = {
  startIcon: {
    name: 'startIcon',
    description: 'Icon before button text',
    control: {
      type: 'select',
      options: Object.keys(icons),
    },
  },
  endIcon: {
    name: 'endIcon',
    description: 'Icon after button text',
    control: {
      type: 'select',
      options: Object.keys(icons),
    },
  },
};

export const Variants: ComponentStory<typeof MuiButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <MuiButton variant="text">Text Button</MuiButton>
    <MuiButton variant="contained">Contained Button</MuiButton>
    <MuiButton variant="outlined">Outlined Button</MuiButton>
  </Stack>
);

export const Colors: ComponentStory<typeof MuiButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <MuiButton variant="contained">Primary</MuiButton>
    <MuiButton variant="contained" color="secondary">
      Secondary
    </MuiButton>
    <MuiButton variant="contained" color="success">
      Success
    </MuiButton>
    <MuiButton variant="contained" color="error">
      Error
    </MuiButton>
  </Stack>
);

export const Sizes: ComponentStory<typeof MuiButton> = () => (
  <Stack spacing={2} maxWidth={300}>
    <MuiButton variant="contained" size="small">
      Small
    </MuiButton>
    <MuiButton variant="contained" size="medium">
      Medium
    </MuiButton>
    <MuiButton variant="contained" size="large">
      Large
    </MuiButton>
  </Stack>
);
