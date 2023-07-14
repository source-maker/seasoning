import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import AppBarBasic from '../../components/appbar/AppBarBasic';
import { Alert, Box, Grid, Stack } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MuiButton } from '../../components/button/MuiButton';
import { ArrowForward, Videocam } from '@mui/icons-material';
import { MuiTypography } from '../../components/typography/MuiTypography';
import BrothImage from '../../components/image/BrothImage';

const HeroCentered: NextPage = () => {
  return (
    <>
      <AppBarBasic />

      <Container>
        {/* Hero Section */}
        <Box textAlign="center" p="6rem 1rem">
          <Alert
            severity="info"
            action={<KeyboardArrowRightIcon />}
            sx={{ mx: 'auto', mb: '1.75rem', maxWidth: '20rem' }}
          >
            Broth is out! See what&apos;s new
          </Alert>
          <div>
            <MuiTypography variant="h1" align="center" baseline>
              We invest in the worlds potential
            </MuiTypography>

            <MuiTypography variant="body1" align="center">
              Here at Broth, we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </MuiTypography>

            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={1}
              direction={{ xs: 'column', sm: 'row' }}
            >
              <MuiButton
                variant="contained"
                size="large"
                sx={{ m: 2 }}
                endIcon={<ArrowForward />}
              >
                Learn More
              </MuiButton>
              <MuiButton
                variant="outlined"
                size="large"
                sx={{ m: 2 }}
                startIcon={<Videocam />}
              >
                Watch Video
              </MuiButton>
            </Stack>
          </div>

          <Box textAlign="center">
            <MuiTypography variant="h3">Featured In</MuiTypography>
            <Grid container spacing={4} columns={{ xs: 4, sm: 12, md: 12 }}>
              <Grid item xs={4}>
                <BrothImage
                  alt="Youtube"
                  layout="responsive"
                  objectFit={'contain'}
                  width="400"
                  height="200"
                />
              </Grid>
              <Grid item xs={4}>
                <BrothImage
                  alt="Product Hunt"
                  layout="responsive"
                  objectFit={'contain'}
                  width="400"
                  height="200"
                />
              </Grid>
              <Grid item xs={4}>
                <BrothImage
                  alt="Reddit"
                  layout="responsive"
                  objectFit={'contain'}
                  width="400"
                  height="200"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HeroCentered;
