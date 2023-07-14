import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { EditUserForm } from '@/features/account/EditUserForm';
import { MuiTypography } from '@/components/typography/MuiTypography';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const EditAccountPage: NextPage = () => {
  const { t } = useTranslation(['account']);

  return (
    <Container>
      <MuiTypography variant="h2" component="h1">
        {t('title')}
      </MuiTypography>

      <EditUserForm />
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
export default EditAccountPage;
