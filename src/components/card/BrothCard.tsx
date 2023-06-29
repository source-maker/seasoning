import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  SvgIcon,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface IBrothCardProps {
  href: string;
  title: string;
  MaterialIcon?: JSX.Element;
  svgIconPath?: string;
  children: ReactNode;
}

export default function BrothCard({
  href,
  title,
  svgIconPath,
  MaterialIcon,
  children,
}: IBrothCardProps) {
  const cardsize = {
    width: 280,
    height: 280,
  };

  return (
    <MuiCard
      sx={{
        width: cardsize.width,
        height: cardsize.height,
      }}
    >
      <CardActionArea>
        <Link href={href} passHref>
          <CardContent
            sx={{
              width: cardsize.width,
              height: cardsize.height,
            }}
          >
            <Box
              sx={{ height: cardsize.height / 6 }}
              display="flex"
              alignItems="center"
            >
              {svgIconPath && (
                <SvgIcon color="primary">
                  <path d={svgIconPath} />
                </SvgIcon>
              )}
              {MaterialIcon && <>{MaterialIcon}</>}
            </Box>
            <Box
              sx={{ height: cardsize.height / 6 }}
              display="flex"
              alignItems="center"
            >
              <Typography noWrap variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </Box>
            <Box sx={{ height: (cardsize.height * 2) / 3 }}>
              <Typography color="text.secondary">{children}</Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </MuiCard>
  );
}
