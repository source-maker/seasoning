import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import AppBarBasic from '../../components/appbar/AppBarBasic';
import { Alert, Grid } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MuiButton } from '../../components/button/MuiButton';
import { MuiTypography } from '../../components/typography/MuiTypography';
import BrothImage from '../../components/image/BrothImage';
import { MuiTextField } from '../../components/textfield/MuiTextField';
import SendIcon from '@mui/icons-material/Send';
import BrothLink from '../../components/link/BrothLink';
import { useForm } from 'react-hook-form';

const HeroSignup: NextPage = () => {
  const { control } = useForm();
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
                Broth Framework
              </MuiTypography>

              <MuiTypography variant="body1">
                Here at Broth, we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic
                growth.
              </MuiTypography>

              <Grid
                spacing={2}
                direction={{ xs: 'column', sm: 'row' }}
                container
              >
                <Grid item xs={12} md={8}>
                  <MuiTextField
                    label="Your Email"
                    fullWidth
                    placeholder="example@example.com"
                    control={control}
                    helperText={
                      <>
                        <BrothLink href="/">Terms of Service</BrothLink> and
                        <BrothLink href="/"> Privacy Policy</BrothLink> apply.
                      </>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MuiButton
                    variant="contained"
                    endIcon={<SendIcon />}
                    textfieldHeight
                    fullWidth
                  >
                    Try for Free
                  </MuiButton>
                </Grid>
              </Grid>
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
              width="700"
              height="700"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HeroSignup;
