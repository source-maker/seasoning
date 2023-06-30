// stories/DashboardLayout.stories.js
import React from 'react';
import { DashboardLayout } from 'src/layouts/dashboard/DashboardLayout';
import { showcaseParameters } from '../../../stories/examples/showcaseParameters';
import { Box } from '@mui/system';
import { NextPageWithLayout } from '@/types/next-page';

export default {
  title: 'Showcase/Layouts',
  component: DashboardLayout,
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

export const Dashboard = () => {
  const TestPage: NextPageWithLayout = () => (
    <Box sx={dummybox}>Main content goes here</Box>
  );
  TestPage.getLayout = (page) => page; // Add a default getLayout function to your page

  const LayoutTestPage = DashboardLayout(TestPage, {
    title: 'DashboardLayout Example',
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
