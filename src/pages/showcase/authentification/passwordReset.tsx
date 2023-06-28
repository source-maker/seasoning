import { BrandLogo } from '@/components/asset/BrandLogo';
import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { PasswordResetForm } from '../../../../features/authorization/PasswordResetForm';

const PasswordReset: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        height="100vh"
        justifyContent="center"
      >
        <BrandLogo />
        <Typography variant="h6" textAlign="center">
          Enter your email address below to reset your password.
        </Typography>
        <PasswordResetForm />
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PasswordReset;
