import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { BulletList } from '@/components/list/BulletList';

const stringArray = ['test1', 'test2', 'test3', 'test4'];

export default {
  title: 'Components/BulletList',
  component: BulletList,
} as ComponentMeta<typeof BulletList>;

const Template: ComponentStory<typeof BulletList> = (args) => {
  return <BulletList {...args} />;
};

export const Playground = Template.bind({});

Playground.args = {
  strArray: stringArray,
};

export const Colors: ComponentStory<typeof BulletList> = () => (
  <Stack spacing={2} maxWidth={300}>
    <BulletList strArray={stringArray} />
    <BulletList strArray={stringArray} color="secondary" />
    <BulletList strArray={stringArray} color="success" />
  </Stack>
);

export const Texts: ComponentStory<typeof BulletList> = () => (
  <Stack spacing={2} maxWidth={300}>
    <BulletList strArray={stringArray} />
    <BulletList strArray={stringArray} isTextSecondary />
  </Stack>
);
