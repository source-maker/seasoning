import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import BrothLink from '@/components/link/BrothLink';
import { MuiButton } from '@/components/button/MuiButton';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { MuiTypography } from '@/components/typography/MuiTypography';

const EmailSignupComplete: NextPage = () => {
  const { t } = useTranslation('auth');
  return (
    <Container maxWidth="md">
      <MuiTypography variant="h1" textAlign={'center'} baseline>
        {t('success_create_title')}
      </MuiTypography>
      <MuiTypography textAlign={'center'}>
        {t('success_create_message')}
      </MuiTypography>

      <Box textAlign="center">
        <BrothLink href="/">
          <MuiButton> {t('success_create_return_btn')}</MuiButton>
        </BrothLink>
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
      title: 'Success',
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default EmailSignupComplete;
