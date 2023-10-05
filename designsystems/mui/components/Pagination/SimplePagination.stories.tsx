import { SimplePagination } from './SimplePagination';
import { ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'MaterialUI/Components/SimplePagination',
  component: SimplePagination,
};

const Template: ComponentStory<typeof SimplePagination> = (args) => {
  const [page, setPage] = useState(1);
  const onChange = (page) => setPage(page);
  return <SimplePagination {...args} page={page} onChange={onChange} />;
};

export const Playground = Template.bind({});

Playground.args = {
  count: 10,
};
