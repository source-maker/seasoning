import { Button, Container } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { Loading } from '@/components/asset/Loading';
import Link from '@/components/link/Link';
import { BrothTypography } from '@/components/typography/BrothTypography';

const Account: NextPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Loading />;

  return (
    <Container>
      <BrothTypography variant="h1" textAlign={'center'}>
        My Account
      </BrothTypography>

      <Box>
        <BrothTypography variant="h3">Personal Information</BrothTypography>

        <Box sx={{ marginBottom: '1rem' }}>
          <BrothTypography sx={{ fontWeight: 700 }}>Name:</BrothTypography>
          <BrothTypography variant="body1" color="text.secondary">
            {currentUser?.name}
          </BrothTypography>
        </Box>

        <Box sx={{ marginBottom: '1rem' }}>
          <BrothTypography sx={{ fontWeight: 700 }}>Money:</BrothTypography>
          <BrothTypography variant="body1" color="text.secondary">
            {currentUser.money ? `¥${currentUser.money}` : 'N/A'}
          </BrothTypography>
        </Box>

        <Button
          href={'/mypage/account/personal-details'}
          component={Link}
          variant="contained"
        >
          Edit Account
        </Button>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Account;
