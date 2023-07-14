import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

export function DashboardFooter() {
  const { t } = useTranslation(['common']);

  return (
    <Box textAlign="center" my={4} color="primary.main" fontWeight={400}>
      {t('app_name')} © {new Date().getFullYear()}
    </Box>
  );
}
