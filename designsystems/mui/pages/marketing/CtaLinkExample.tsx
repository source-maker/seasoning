import BrothLink from '../../components/link/BrothLink';
import CtaLink from '../../components/link/CtaLink';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

export default function CtaLinkExample() {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        CtaLink
      </Typography>
      <Divider sx={{ marginY: '16px' }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box margin={4}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} marginY={4}>
              Welcome to our page
            </Typography>
            <Typography marginY={2}>
              Please Login. If you do not have acount, please sign up. When you
              have logged in, you can go to our Home.
            </Typography>
            <BrothLink href="/">Learn about Broth</BrothLink>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box marginY={3}>
            <CtaLink
              href="/login"
              title="Login"
              subTitle="go to Login page"
              color="primary"
            />
          </Box>
          <Box marginY={3}>
            <CtaLink
              href="/signup"
              title="Sign up"
              subTitle="go to Sign up page"
              color="secondary"
            />
          </Box>
          <Box marginY={3}>
            <CtaLink
              href="/"
              title="Home"
              subTitle="go to Home page"
              color="error"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
