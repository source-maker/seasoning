import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { BrothButton as Button } from '../../components/button/BrothButton';
import * as icons from '@mui/icons-material';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
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

export const Variants: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="text">Text Button</Button>
    <Button variant="contained">Contained Button</Button>
    <Button variant="outlined">Outlined Button</Button>
  </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained">Primary</Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="contained" color="error">
      Error
    </Button>
  </Stack>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small">
      Small
    </Button>
    <Button variant="contained" size="medium">
      Medium
    </Button>
    <Button variant="contained" size="large">
      Large
    </Button>
  </Stack>
);
