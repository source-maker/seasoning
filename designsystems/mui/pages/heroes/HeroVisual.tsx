import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import AppBarBasic from '@/components/appbar/AppBarBasic';
import { Alert, Grid, Stack } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MuiButton } from '@/components/button/MuiButton';
import { ArrowForward, Videocam } from '@mui/icons-material';
import { MuiTypography } from '@/components/typography/MuiTypography';
import BrothImage from '@/components/image/BrothImage';

const HeroVisual: NextPage = () => {
  return (
    <>
      <AppBarBasic />

      <Container
        sx={{
          py: {
            xs: '2rem',
            sm: '4rem',
          },
        }}
      >
        <Grid
          container
          spacing={6}
          direction={{
            xs: 'column-reverse',
            sm: 'row',
          }}
        >
          <Grid item md={7} textAlign="left">
            <Alert
              severity="info"
              action={<KeyboardArrowRightIcon />}
              sx={{ mb: '1.75rem', maxWidth: '20rem' }}
            >
              Broth is out! See what&apos;s new
            </Alert>
            <div>
              <MuiTypography variant="h1" baseline>
                Design tool for companies
              </MuiTypography>

              <MuiTypography variant="body1">
                From web design to dashboards, companies around the world use
                Broth to simplify their design experience.
              </MuiTypography>

              <Stack
                justifyContent="start"
                alignItems={{
                  md: 'center',
                }}
                spacing={2}
                direction={{ xs: 'column', sm: 'row' }}
              >
                <MuiButton
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                >
                  Learn More
                </MuiButton>
                <MuiButton
                  variant="outlined"
                  size="large"
                  startIcon={<Videocam />}
                >
                  Watch Video
                </MuiButton>
              </Stack>
            </div>
          </Grid>
          <Grid
            item
            md={5}
            display="flex"
            direction="column"
            justifyContent="center"
          >
            <BrothImage
              alt="Img"
              layout="intrinsic"
              objectFit={'cover'}
              width="900"
              height="900"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HeroVisual;
