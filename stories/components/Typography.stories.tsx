import { BrothTypography } from '@/components/typography/BrothTypography';
import { Box } from '@mui/material';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Typography',
  component: BrothTypography,
};

const Template: ComponentStory<typeof BrothTypography> = (args) => (
  <BrothTypography {...args} />
);

export const Playground = Template.bind({});

Playground.args = {
  children: 'Almost before we knew it, we had left the ground.',
};

export const Variants = () => (
  <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
    <BrothTypography variant="h1">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="h2">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="h3">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="h4">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="h5">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="h6">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="body1">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="body2">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="button" display="block">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="caption" display="block">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
    <BrothTypography variant="overline" display="block">
      Almost before we knew it, we had left the ground.
    </BrothTypography>
  </Box>
);
