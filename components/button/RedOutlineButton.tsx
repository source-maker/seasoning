import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export interface IRedOutlineButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

const LinkWrapper = ({
  bool,
  href,
  children,
}: {
  bool: boolean;
  href: string;
  children: JSX.Element;
}) =>
  bool ? (
    <Link href={href} passHref>
      {children}
    </Link>
  ) : (
    children
  );

export function RedOutlineButton({
  title,
  href = '',
  onClick = undefined,
}: IRedOutlineButtonProps) {
  return (
    <LinkWrapper bool={onClick == undefined} href={href}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid"
        borderColor="error.main"
        borderRadius="0.3rem"
        mb="1rem"
        padding="1rem"
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="body2" mb={0} color="error.main">
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <ChevronRightIcon
            sx={{
              color: 'error.main',
            }}
          />
        </Box>
      </Box>
    </LinkWrapper>
  );
}
