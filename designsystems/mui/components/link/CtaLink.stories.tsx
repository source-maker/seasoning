import React from 'react';
import CtaLink from './CtaLink';
import { Stack } from '@mui/material';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'MaterialUI/Components/CtaLink',
  component: CtaLink,
};

const Template: ComponentStory<typeof CtaLink> = (args) => {
  return <CtaLink {...args} />;
};

export const Playground = Template.bind({});

Playground.args = {
  href: '/login',
  color: 'primary',
  title: 'title',
  subTitle: 'subTitle',
};

export const Colors: ComponentStory<typeof CtaLink> = () => (
  <Stack spacing={2} maxWidth={300}>
    <CtaLink
      href="/"
      color="primary"
      title="primary"
      subTitle="set color to 'primary'"
    />
    <CtaLink
      href="/"
      color="secondary"
      title="secondary"
      subTitle="set color to 'secondary'"
    />
    <CtaLink
      href="/"
      color="error"
      title="error"
      subTitle="set color to 'error'"
    />
  </Stack>
);
