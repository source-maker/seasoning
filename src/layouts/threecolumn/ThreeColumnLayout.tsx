import { Grid } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { NextPageWithLayout } from '@/types/next-page';
import { SideDrawer } from '@/components/drawer/SideDrawer';
import { DefaultHeader } from 'src/layouts/default/DefaultHeader';
import { Box } from '@mui/system';

// Page options for this layout
interface PageOptions {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
  leftSidebar?: ReactNode;
  rightSidebar?: ReactNode;
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
    <Box minHeight={'100vh'}>
      <DefaultHeader title={pageOptions?.title} />
      <SideDrawer />
      <Grid container direction="row" p={4} height="100%">
        {/* LEFT SIDEBAR */}
        <Grid item xs direction={'column'}>
          {pageOptions?.leftSidebar}
        </Grid>

        {/* MAIN CONTENT */}
        <Grid item xs direction="column">
          <main style={{ display: 'contents' }}>{children}</main>
        </Grid>

        {/* RIGHT SIDEBAR */}
        <Grid item xs direction={'column'}>
          {pageOptions?.rightSidebar}
        </Grid>
      </Grid>
    </Box>
  );
}

// HOC to wrap a page with this layout
const ThreeColumnLayout = (
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
export { ThreeColumnLayout };
