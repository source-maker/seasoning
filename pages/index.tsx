import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import { Stack, Typography } from '@mui/material';
import { BrandLogo } from '@/components/asset/BrandLogo';
import { useAuth } from '../hooks/useAuth';
import { BrothButton } from '@/components/button/BrothButton';
import BrothLink from '@/components/link/BrothLink';

// Add this line to the top of a nextJS page to pass props to the page
// export async function getStaticProps() {
//   return { props: { title: 'HomePage' } };
// }

const Home: NextPage = () => {
  const { isLogin } = useAuth();

  return (
    <Container
      sx={{
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <BrandLogo />
      <Typography variant="h3">
        <strong>Seasoning</strong>
      </Typography>
      <Typography variant="h4">
        A NextJS MUI Boilerplate
        <br /> for Production-Ready Web Apps
      </Typography>

      <Stack direction="row" spacing={2} marginY={2} justifyContent="center">
        {isLogin() ? (
          <>
            <BrothLink href="/mypage" sx={{ textDecoration: 'none' }}>
              <BrothButton>Client Dashboard</BrothButton>
            </BrothLink>
          </>
        ) : (
          <BrothLink href="/login" sx={{ textDecoration: 'none' }}>
            {/* Not logged in */}
            <BrothButton>Login</BrothButton>
          </BrothLink>
        )}

        <BrothLink
          href="https://broth-nextjs-boilerplate.vercel.app/?path=/docs/introduction--page"
          sx={{ textDecoration: 'none' }}
          target="_blank"
        >
          <BrothButton variant="outlined">Documentation</BrothButton>
        </BrothLink>
      </Stack>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
