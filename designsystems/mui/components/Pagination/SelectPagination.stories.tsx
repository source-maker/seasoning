import { SelectPagination } from './Pagination';
import { ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'MaterialUI/Components/SelectPagination',
  component: SelectPagination,
};

const Template: ComponentStory<typeof SelectPagination> = (args) => {
  const [page, setPage] = useState(1);
  const onChange = (page) => setPage(page);
  return <SelectPagination {...args} page={page} onChange={onChange} />;
};

export const Playground = Template.bind({});

Playground.args = {
  count: 10,
};
