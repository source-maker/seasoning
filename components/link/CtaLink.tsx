import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import Link, { LinkProps as NextLinkProps } from 'next/link';

export interface ICtaLinkProps {
  width?: string;
  href: NextLinkProps['href'];
  title?: string;
  subTitle?: string;
  color: string;
}

export default function CtaLink(props: ICtaLinkProps) {
  return (
    <Card
      sx={{
        width: props.width || '600px',
        borderLeft: 5,
        borderColor: `${props.color}.main`,
      }}
    >
      <CardActionArea>
        <Link href={props.href} passHref>
          <CardContent>
            <Stack direction="row">
              <Box>
                <Typography>{props.subTitle}</Typography>
                <Typography
                  variant="h5"
                  component="div"
                  color={props.color}
                  fontWeight="bold"
                >
                  {props.title}
                </Typography>
              </Box>
              <Box marginLeft="auto" justifyContent="center">
                <Typography
                  variant="h3"
                  component="div"
                  color={props.color}
                  marginTop="auto"
                >
                  →
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
