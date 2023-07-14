import { Button, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { MuiTypography } from '@/components/typography/MuiTypography';
import { Loading } from '@/components/asset/Loading';
import BrothLink from '@/components/link/BrothLink';
import { useSession } from 'next-auth/react';
import { DashboardLayout } from '@/layouts/dashboard/DashboardLayout';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { convertStringToJSX } from '../../helpers/stringHelpers';

const MyPage: NextPage = () => {
  const { data: currentUser } = useCurrentUser();
  const { status } = useSession();
  const { t } = useTranslation('dashboard');

  if (status !== 'authenticated') return <Loading />;

  return (
    <Container fixed sx={{ textAlign: 'center' }}>
      <Typography
        component="h2"
        variant="h2"
        textAlign={'center'}
        sx={{ margin: '1em auto' }}
      >
        {t('welcome')}
      </Typography>
      <MuiTypography textAlign={'center'}>
        {convertStringToJSX(
          t('welcome_message', {
            name: currentUser?.name,
            balance: `¥${currentUser?.money}`,
          })
        )}
      </MuiTypography>

      <Button href={'/mypage/edit'} component={BrothLink} variant="contained">
        {t('edit_account_btn')}
      </Button>
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
export default DashboardLayout(MyPage);
