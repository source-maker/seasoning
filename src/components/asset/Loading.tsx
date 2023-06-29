import { Container, LinearProgress, Typography } from '@mui/material';

export function Loading() {
  return (
    <Container
      sx={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div>
        <Typography color="primary" textAlign="center">
          Loading...
        </Typography>
        <LinearProgress color="primary" />
      </div>
    </Container>
  );
}
