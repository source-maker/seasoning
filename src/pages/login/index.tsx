import { Alert, Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { LoginForm } from '@/features/authorization/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { Loading } from '@/components/asset/Loading';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Login: NextPage = () => {
  const { isLogin } = useAuth();
  const [currentLoggedIn, setCurrentLoggedIn] = useState<boolean | null>(null); // wait until login status checked
  const router = useRouter();
  const { t } = useTranslation('login');

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
        <BrothTypography variant="h3" component="h1" textAlign="center">
          {t('title')}
        </BrothTypography>

        {router.query['error'] && (
          <Alert
            sx={{
              margin: '0',
            }}
            severity="error"
          >
            {t('error_message')}
          </Alert>
        )}
        <LoginForm />
      </Box>
    </Container>
  );
};

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default Login;
