import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { useAuth } from '../hooks/useAuth';
import { MuiButton } from '@/components/button/MuiButton';
import BrothLink from '@/components/link/BrothLink';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { convertStringToJSX } from '@/helpers/stringHelpers';
import { MuiTypography } from '@/components/typography/MuiTypography';

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'home']);
  const { isLogin } = useAuth();

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <BrandLogo />
      <MuiTypography variant="h2" component="h1" baseline>
        <strong>{t('app_name')}</strong>
      </MuiTypography>
      <MuiTypography variant="h4" component="h2">
        {convertStringToJSX(t('app_description'))}
      </MuiTypography>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
        justifyContent={'space-evenly'}
      >
        {isLogin() ? (
          <MuiButton LinkComponent={BrothLink} href="/mypage" fullWidth>
            {t('home:dashboard_btn')}
          </MuiButton>
        ) : (
          <>
            <MuiButton LinkComponent={BrothLink} href="/login" fullWidth>
              {t('home:login_btn')}
            </MuiButton>
            <MuiButton
              variant="contained"
              LinkComponent={BrothLink}
              href="/signup"
              fullWidth
            >
              {t('home:create_account_btn')}
            </MuiButton>
          </>
        )}

        <MuiButton
          variant="outlined"
          LinkComponent={BrothLink}
          href="https://broth-nextjs-boilerplate.vercel.app/?path=/docs/introduction--page"
          fullWidth
        >
          {t('home:documentation_btn')}
        </MuiButton>
      </Stack>
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
export default Home;
