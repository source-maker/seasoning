import { DashboardHeader } from './DashboardHeader';
import { ReactElement, ReactNode } from 'react';
import { DashboardFooter } from './DashboardFooter';
import { NextPageWithLayout } from '@/types/types';
import { Box } from '@mui/system';
import { SideDrawer } from '@/components/drawer/SideDrawer';

// Page options for this layout
interface PageOptions {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

// render the layout
function Layout({
  children,
  pageOptions,
}: {
  children: React.ReactNode;
  pageOptions?: PageOptions;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <DashboardHeader title={pageOptions?.title} />
      <SideDrawer />
      {children}
      <DashboardFooter />
    </Box>
  );
}

// HOC to wrap a page with this layout
const DashboardLayout = (
  target: NextPageWithLayout<
    Record<string, unknown>,
    Record<string, unknown>,
    PageOptions
  >,
  pageOptions?: PageOptions
) => {
  target.getLayout = (page: ReactElement) => {
    return <Layout pageOptions={pageOptions}>{page}</Layout>;
  };

  target.pageOptions = pageOptions;
  return target;
};

// export the layout to be used in pages
export { DashboardLayout };
