import { Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { Loading } from '@/components/asset/Loading';
import BrothLink from '@/components/link/BrothLink';
import { useSession } from 'next-auth/react';
import { useAuth } from '@/hooks/useAuth';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';

export async function getStaticProps() {
  return {
    props: {
      title: 'My Account',
    },
  };
}

const MyPage: NextPage = () => {
  const { currentUser } = useAuth();
  const { status } = useSession();
  if (status !== 'authenticated') return <Loading />;

  return (
    <Container fixed sx={{ textAlign: 'center' }}>
      <Typography
        component="h2"
        variant="h2"
        textAlign={'center'}
        sx={{ margin: '1em auto' }}
      >
        Welcome Back!
      </Typography>
      <BrothTypography textAlign={'center'}>
        This is a personal account page for <strong>{currentUser?.name}</strong>
      </BrothTypography>
      <BrothTypography textAlign={'center'}>
        You have a balance of <strong>¥{currentUser?.money}</strong>.
      </BrothTypography>

      <Button
        href={'/mypage/account/personal-details'}
        component={BrothLink}
        variant="contained"
      >
        Edit Account
      </Button>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default DashboardLayout(MyPage);
