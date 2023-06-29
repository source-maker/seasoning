import ChevronRight from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import Link from 'next/link';

export interface IOutlineBannerButtonProps {
  label?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function OutlineBannerButton({
  label,
  href = '',
  onClick,
}: IOutlineBannerButtonProps) {
  return (
    <Link href={href} passHref>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'border.dark',
          borderRadius: '0.3rem',
          mb: '1rem',
          padding: '0.5rem',
        }}
        onClick={onClick}
      >
        <Box width="100%">{label}</Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {href && (
            <ChevronRight
              sx={{
                color: 'primary.main',
              }}
            />
          )}
        </Box>
      </Box>
    </Link>
  );
}
