import { BrandLogo } from '@/components/asset/BrandLogo';
import { Box, Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';

const PasswordResetSuccess: NextPage = () => {
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
        <Typography variant="h5" textAlign={'center'}>
          We&apos;ve emailed you an address to reset your password. <br />
          Please check your inbox.
        </Typography>

        <Button href="/login" variant="contained" fullWidth type="submit">
          Return to Login
        </Button>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default PasswordResetSuccess;
