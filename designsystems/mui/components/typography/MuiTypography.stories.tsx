import React from 'react';
import { MuiTypography } from './MuiTypography';
import { Box } from '@mui/material';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'MaterialUI/Components/Typography',
  component: MuiTypography,
};

const Template: ComponentStory<typeof MuiTypography> = (args) => (
  <MuiTypography {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

export const Variants = () => (
  <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
    <MuiTypography variant="h1">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="h2">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="h3">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="h4">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="h5">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="h6">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="body1">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="body2">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="button" display="block">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="caption" display="block">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
    <MuiTypography variant="overline" display="block">
      Almost before we knew it, we had left the ground.
    </MuiTypography>
  </Box>
);
