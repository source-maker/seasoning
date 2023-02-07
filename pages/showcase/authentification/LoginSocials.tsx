import {
  alpha,
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { LoginForm } from '@/features/authorization/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Loading } from '@/components/asset/Loading';
import BrothLink from '@/components/link/BrothLink';
import { BrothTypography } from '@/components/typography/BrothTypography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BrothButton } from '@/components/button/BrothButton';
import { grey } from '@mui/material/colors';

const LoginSocials: NextPage = () => {
  const { isLogin } = useAuth();
  const [currentLoggedIn, setCurrentLoggedIn] = useState<boolean | null>(null); // wait until login status checked
  const router = useRouter();
  const isDarkModeEnabled = useTheme().palette.mode === 'dark';

  // confirm login status
  useEffect(() => {
    if (isLogin()) {
      setCurrentLoggedIn(true);
    } else {
      setCurrentLoggedIn(false);
    }
  }, [isLogin]);

  // handle if user is already logged in
  useEffect(() => {
    if (currentLoggedIn) {
      if (router.query['returnUrl']) {
        router.push(router.query['returnUrl'] as string);
      } else {
        router.push('/mypage');
      }
    }
  }, [currentLoggedIn, router]);

  if (currentLoggedIn === null || currentLoggedIn === true) {
    return <Loading />;
  }
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        minHeight="100vh"
        justifyContent={{
          sm: 'center',
        }}
        pt={{
          xs: 4,
          sm: 0,
        }}
      >
        <BrandLogo />
        <BrothTypography
          variant="h3"
          component="h1"
          textAlign="center"
          baseline
        >
          Sign in to your account
        </BrothTypography>
        <BrothTypography variant="body1" textAlign="center" baseline>
          Or <BrothLink href="#">start your 14-day free trial</BrothLink>
        </BrothTypography>
        <Paper
          sx={{
            p: {
              xs: 2,
              md: 4,
            },
            m: {
              xs: '1rem 0',
              md: 4,
            },
            bgcolor: isDarkModeEnabled ? alpha(grey[900], 0.1) : grey[0],
          }}
        >
          <LoginForm />
          <Divider sx={{ py: 4 }}>Or continue with</Divider>

          <Stack spacing={2} direction="row">
            <BrothButton aria-label="facebook" variant="outlined" fullWidth>
              <FacebookIcon />
            </BrothButton>
            <BrothButton aria-label="twitter" variant="outlined" fullWidth>
              <TwitterIcon />
            </BrothButton>
            <BrothButton aria-label="github" variant="outlined" fullWidth>
              <GitHubIcon />
            </BrothButton>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginSocials;
