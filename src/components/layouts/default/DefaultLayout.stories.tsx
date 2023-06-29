// stories/DefaultLayout.stories.js
import React from 'react';
import { DefaultLayout } from '@/components/layouts/default/DefaultLayout';
import { showcaseParameters } from '../../../../stories/examples/showcaseParameters';
import { Box } from '@mui/system';

export default {
  title: 'Showcase/Layouts',
  component: DefaultLayout,
  parameters: showcaseParameters,
};

const dummybox = {
  border: '1px solid #ccc',
  borderRadius: 4,
  padding: 1,
  margin: 1,
  height: '100%',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

export const Default = () => {
  // Define your content and pass it directly to DefaultLayout as children
  const content = <Box sx={dummybox}>Main content goes here</Box>;

  // Pass content and page options to DefaultLayout
  return (
    <DefaultLayout
      pageOptions={{
        title: 'Default Layout',
      }}
    >
      {content}
    </DefaultLayout>
  );
};
