import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { Loading } from '@/components/asset/Loading';
import { BrothTypography } from '@/components/typography/BrothTypography';
import BrothLink from '@/components/link/BrothLink';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Account: NextPage = () => {
  const { data: currentUser } = useCurrentUser();
  const { t } = useTranslation('account');
  if (!currentUser) return <Loading />;

  return (
    <Container>
      <BrothTypography variant="h1" textAlign={'center'}>
        {t('title')}
      </BrothTypography>

      <Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <BrothTypography sx={{ fontWeight: 700 }}>
            {t('name')}:
          </BrothTypography>
          <BrothTypography variant="body1" color="text.secondary">
            {currentUser?.name}
          </BrothTypography>
        </Box>

        <Box sx={{ marginBottom: '1rem' }}>
          <BrothTypography sx={{ fontWeight: 700 }}>
            {t('money')}:
          </BrothTypography>
          <BrothTypography variant="body1" color="text.secondary">
            {currentUser.money ? `¥${currentUser.money}` : 'N/A'}
          </BrothTypography>
        </Box>

        <Button
          href={'/mypage/account/personal-details'}
          component={BrothLink}
          variant="contained"
        >
          {t('edit_btn')}
        </Button>
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
export default Account;
