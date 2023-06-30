// stories/ThreeColumnLayout.stories.js
import React from 'react';
import { ThreeColumnLayout } from 'src/layouts/threecolumn/ThreeColumnLayout';
import { showcaseParameters } from '../../../stories/examples/showcaseParameters';
import { Box } from '@mui/system';
import { NextPageWithLayout } from '@/types/next-page';

export default {
  title: 'Showcase/Layouts',
  component: ThreeColumnLayout,
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

export const ThreeColumns = () => {
  const TestPage: NextPageWithLayout = () => (
    <Box sx={dummybox}>Main content goes here</Box>
  );
  TestPage.getLayout = (page) => page; // Add a default getLayout function to your page

  const LayoutTestPage = ThreeColumnLayout(TestPage, {
    title: 'ThreeColumnLayout Example',
    leftSidebar: <Box sx={dummybox}>Left Sidebar Content</Box>,
    rightSidebar: <Box sx={dummybox}>Right Sidebar Content</Box>,
  });

  // Simulate a Next.js page by calling the getLayout function
  let LayoutSimulatedPage;
  if (LayoutTestPage.getLayout) {
    LayoutSimulatedPage = LayoutTestPage.getLayout(<LayoutTestPage />);
  } else {
    LayoutSimulatedPage = <LayoutTestPage />;
  }

  return LayoutSimulatedPage;
};
