import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { useAuth } from '../hooks/useAuth';
import { BrothButton } from '@/components/button/BrothButton';
import BrothLink from '@/components/link/BrothLink';
import { BrothTypography } from '@/components/typography/BrothTypography';

// Add this line to the top of a nextJS page to pass props to the page
// export async function getStaticProps() {
//   return { props: { title: 'HomePage' } };
// }

const Home: NextPage = () => {
  const { isLogin } = useAuth();

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <BrandLogo />
      <BrothTypography variant="h1" baseline>
        <strong>Seasoning</strong>
      </BrothTypography>
      <BrothTypography variant="h3">
        A NextJS MUI Boilerplate
        <br /> for Production-Ready Web Apps
      </BrothTypography>

      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={2}
        justifyContent={'space-evenly'}
      >
        {isLogin() ? (
          <BrothButton LinkComponent={BrothLink} href="/mypage" fullWidth>
            Dashboard
          </BrothButton>
        ) : (
          <BrothButton LinkComponent={BrothLink} href="/login" fullWidth>
            Login
          </BrothButton>
        )}

        <BrothButton
          variant="contained"
          LinkComponent={BrothLink}
          href="/signup"
          fullWidth
        >
          Create Account
        </BrothButton>
        <BrothButton
          variant="outlined"
          LinkComponent={BrothLink}
          href="https://broth-nextjs-boilerplate.vercel.app/?path=/docs/introduction--page"
          fullWidth
        >
          Documentation
        </BrothButton>
      </Stack>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
