import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { BrothTypography } from '@/components/typography/BrothTypography';
import BrothLink from '@/components/link/BrothLink';
import { BrothButton } from '@/components/button/BrothButton';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const EmailSignupComplete: NextPage = () => {
  const { t } = useTranslation('auth');
  return (
    <Container maxWidth="md">
      <BrothTypography variant="h1" textAlign={'center'} baseline>
        {t('success_create_title')}
      </BrothTypography>
      <BrothTypography textAlign={'center'}>
        {t('success_create_message')}
      </BrothTypography>

      <Box textAlign="center">
        <BrothLink href="/">
          <BrothButton> {t('success_create_return_btn')}</BrothButton>
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
