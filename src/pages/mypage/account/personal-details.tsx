import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { EditCustomerInfoForm } from '@/features/account/EditCustomerInfoForm';
import { BrothTypography } from '@/components/typography/BrothTypography';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MemberDetails: NextPage = () => {
  return (
    <Container>
      <BrothTypography variant="h2" component="h1">
        Personal Information
      </BrothTypography>

      <EditCustomerInfoForm />
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
export default MemberDetails;
