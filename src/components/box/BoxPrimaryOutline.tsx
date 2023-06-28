import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export interface IBoxPrimaryOutlineProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

export function BoxPrimaryOutline({
  title,
  href = '',
  onClick,
}: IBoxPrimaryOutlineProps) {
  return (
    <Link href={href} passHref>
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: '0.3rem',
          mb: '1rem',
          padding: '1rem',
          cursor: 'pointer',
        }}
      >
        <Typography variant="body2" mb={0}>
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronRightIcon
            sx={{
              color: 'primary.main',
            }}
          />
        </Box>
      </Box>
    </Link>
  );
}
