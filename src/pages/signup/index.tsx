import { BrandLogo } from '@/components/asset/BrandLogo';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { EmailSignupForm } from '@/features/authorization/EmailSignupForm';
import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';

const EmailSignup: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        <BrandLogo />
        <BrothTypography variant="h3" component="h1" textAlign="center">
          Create New Account
        </BrothTypography>

        <EmailSignupForm />
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default EmailSignup;
