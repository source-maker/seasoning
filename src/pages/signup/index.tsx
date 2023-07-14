import { BrandLogo } from '@/components/asset/BrandLogo';
import { EmailSignupForm } from '@/features/authorization/EmailSignupForm';
import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { MuiTypography } from '@/components/typography/MuiTypography';

const EmailSignup: NextPage = () => {
  const { t } = useTranslation('auth');
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        <BrandLogo />
        <MuiTypography variant="h3" component="h1" textAlign="center">
          {t('signup_title')}
        </MuiTypography>

        <EmailSignupForm />
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
export default EmailSignup;
