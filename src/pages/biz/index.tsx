import { Container, Typography } from '@mui/material';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { Loading } from '@/components/asset/Loading';

import { MuiTypography } from '@/components/typography/MuiTypography';
import { NextPageWithLayout } from '@/types/types';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const Biz: NextPageWithLayout = () => {
  const { data: currentUser } = useCurrentUser();

  if (!currentUser) return <Loading />;

  return (
    <>
      <Container fixed>
        <Typography
          component="h2"
          variant="h2"
          textAlign={'center'}
          sx={{ margin: '1em auto' }}
        >
          Welcome Back!
        </Typography>
        <MuiTypography textAlign={'center'}>
          This is a business account page for{' '}
          <strong>{currentUser?.name}</strong>.
        </MuiTypography>
        <MuiTypography textAlign={'center'}>
          The following are your shops:
        </MuiTypography>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default DashboardLayout(Biz, { title: 'Business Dashboard' });
