import BrothCard from '@/components/card/BrothCard';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Container, Grid } from '@mui/material';

export default function BrothCardExample() {
  return (
    <Container>
      <Box py={8}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <BrothCard
              href="/"
              title="Home"
              svgIconPath="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            >
              this is home card
            </BrothCard>
          </Grid>
          <Grid item>
            <BrothCard
              href="/"
              title="Setting"
              MaterialIcon={<SettingsIcon color="primary" />}
            >
              this is setting card
            </BrothCard>
          </Grid>
          <Grid item>
            <BrothCard
              href="/register"
              title="Register"
              MaterialIcon={<PersonAddIcon color="primary" />}
            >
              this is register card
            </BrothCard>
          </Grid>
          <Grid item>
            <BrothCard
              href="/contact"
              title="Contact"
              MaterialIcon={<EmailOutlinedIcon color="primary" />}
            >
              this is register card
            </BrothCard>
          </Grid>
          <Grid item>
            <BrothCard
              href="/register"
              title="Register"
              MaterialIcon={<PersonAddIcon color="primary" />}
            >
              this is contact card
            </BrothCard>
          </Grid>
          <Grid item>
            <BrothCard
              href="/login"
              title="Login"
              MaterialIcon={<LoginIcon color="primary" />}
            >
              this is login card
            </BrothCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
