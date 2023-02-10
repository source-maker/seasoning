import { Grid } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { NextPageWithLayout } from 'types/types';

interface PageOptions {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
  leftSidebar?: ReactNode;
  rightSidebar?: ReactNode;
}

export const getLayout = (
  target: NextPageWithLayout,
  pageOptions?: PageOptions
) => {
  target.pageOptions = pageOptions;

  target.getLayout = (page: ReactElement) => {
    return (
      <Grid container direction="row" minHeight={'100vh'} p={4}>
        {/* LEFT SIDEBAR */}
        <Grid item xs direction={'column'}>
          {pageOptions?.leftSidebar}
        </Grid>

        {/* MAIN CONTENT */}
        <Grid item xs direction="column">
          <main style={{ display: 'contents' }}>{page}</main>
        </Grid>

        {/* RIGHT SIDEBAR */}
        <Grid item xs direction={'column'}>
          {pageOptions?.rightSidebar}
        </Grid>
      </Grid>
    );
  };

  return target;
};
