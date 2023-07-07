import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { useAuth } from '../hooks/useAuth';
import { BrothButton } from '@/components/button/BrothButton';
import BrothLink from '@/components/link/BrothLink';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { convertStringToJSX } from '@/helpers/stringHelpers';

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
      <BrothTypography variant="h1" baseline>
        <strong>{t('app_name')}</strong>
      </BrothTypography>
      <BrothTypography variant="h3">
        {convertStringToJSX(t('app_description'))}
      </BrothTypography>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
        justifyContent={'space-evenly'}
      >
        {isLogin() ? (
          <BrothButton LinkComponent={BrothLink} href="/mypage" fullWidth>
            {t('home:dashboard_btn')}
          </BrothButton>
        ) : (
          <BrothButton LinkComponent={BrothLink} href="/login" fullWidth>
            {t('home:login_btn')}
          </BrothButton>
        )}

        <BrothButton
          variant="contained"
          LinkComponent={BrothLink}
          href="/signup"
          fullWidth
        >
          {t('home:create_account_btn')}
        </BrothButton>
        <BrothButton
          variant="outlined"
          LinkComponent={BrothLink}
          href="https://broth-nextjs-boilerplate.vercel.app/?path=/docs/introduction--page"
          fullWidth
        >
          {t('home:documentation_btn')}
        </BrothButton>
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
