import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { BrothTypography } from '@/components/typography/BrothTypography';
import BrothLink from '@/components/link/BrothLink';
import { BrothButton } from '@/components/button/BrothButton';

const EmailSignupComplete: NextPage = () => {
  return (
    <Container maxWidth="md">
      <BrothTypography variant="h1" textAlign={'center'} baseline>
        Success!
      </BrothTypography>
      <BrothTypography textAlign={'center'}>
        Your account has been created. Please wait for an administrator to
        approve your account.
      </BrothTypography>

      <Box textAlign="center">
        <BrothLink href="/">
          <BrothButton>Return Home</BrothButton>
        </BrothLink>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default EmailSignupComplete;
