import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';

export function DefaultFooter() {
  const { t } = useTranslation(['common']);
  return (
    <Box textAlign="center" marginY={4}>
      {t('app_name')} © {new Date().getFullYear()}
    </Box>
  );
}
