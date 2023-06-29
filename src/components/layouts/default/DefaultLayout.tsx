/**
 * Default layout
 * This layout is used for most pages by default, unless a page specifies a different layout.
 */
import { DefaultFooter } from './DefaultFooter';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { SideDrawer } from '@/components/drawer/SideDrawer';
import { DefaultHeader } from './DefaultHeader';
import { Container } from '@mui/material';

// Page options for this layout
interface PageOptions {
  title?: string;
  useBackButton?: boolean;
  rightNavMenu?: ReactNode;
}

// render the layout
export function DefaultLayout({
  children,
  pageOptions,
}: {
  children: React.ReactNode;
  pageOptions?: PageOptions;
}) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        minHeight="100vh"
      >
        <DefaultHeader title={pageOptions?.title || 'Dashboard'} />
        <SideDrawer />
        <Container>
          <main style={{ display: 'contents' }}>{children}</main>
        </Container>
        <DefaultFooter />
      </Box>
    </>
  );
}
