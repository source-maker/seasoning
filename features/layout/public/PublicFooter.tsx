import { capitalize } from '@/helpers/textHelpers';
import { Box } from '@mui/material';
import VersionText from '../../../components/typography/VersionText';

export function PublicFooter() {
  return (
    <Box textAlign="center" marginY={4}>
      v<VersionText />
      <br />
      {capitalize(process.env.NEXT_PUBLIC_NAME)} © {new Date().getFullYear()}
    </Box>
  );
}
