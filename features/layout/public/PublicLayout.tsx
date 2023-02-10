import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode & { props: { title: string } };
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <PublicHeader title={children.props.title} />
      <main style={{ display: 'contents' }}>{children}</main>
      <PublicFooter />
    </Box>
  );
}
