import { Alert, Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BrandLogo } from '../../../components/asset/BrandLogo';
import { LoginForm } from '@/features/authorization/LoginForm';
import { useAuth } from '../../../hooks/useAuth';
import { Loading } from '../../../components/asset/Loading';
import BrothLink from '@/components/link/BrothLink';
import { BrothTypography } from '@/components/typography/BrothTypography';

export async function getStaticProps() {
  return {
    props: {
      title: 'Login',
    },
  };
}

const Login: NextPage = () => {
  const { isLogin } = useAuth();
  const [currentLoggedIn, setCurrentLoggedIn] = useState<boolean | null>(null); // wait until login status checked
  const router = useRouter();

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
        justifyContent="center"
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
        <BrothTypography variant="body1" textAlign="center">
          Or <BrothLink href="#">start your 14-day free trial</BrothLink>
        </BrothTypography>
        {router.query['error'] && (
          <Alert
            sx={{
              margin: '0',
            }}
            severity="error"
          >
            email or password was incorrect
          </Alert>
        )}
        <LoginForm />
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Login;
