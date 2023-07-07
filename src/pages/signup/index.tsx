import { BrandLogo } from '@/components/asset/BrandLogo';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { EmailSignupForm } from '@/features/authorization/EmailSignupForm';
import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EmailSignup: NextPage = () => {
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
          Create New Account
        </BrothTypography>

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
