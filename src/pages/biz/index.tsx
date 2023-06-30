import { Container, Typography } from '@mui/material';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';
import { Loading } from '@/components/asset/Loading';

import { BrothTypography } from '@/components/typography/BrothTypography';
import { NextPageWithLayout } from '@/types/next-page';

const Biz: NextPageWithLayout = () => {
  const { currentUser } = useAuth();

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
        <BrothTypography textAlign={'center'}>
          This is a business account page for{' '}
          <strong>{currentUser?.name}</strong>.
        </BrothTypography>
        <BrothTypography textAlign={'center'}>
          The following are your shops:
        </BrothTypography>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default DashboardLayout(Biz, { title: 'Business Dashboard' });
