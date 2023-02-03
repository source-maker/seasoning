import { BulletList } from '@/components/list/BulletList';
import { Box, Container, Grid, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export default function BulletListExample() {
  return (
    <Container>
      <Box py={8}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item width="300px">
            <HomeIcon
              fontSize="large"
              color="primary"
              sx={{ backgroundColor: '#f0f0f0', padding: 0.5, borderRadius: 1 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Default of BulletList
            </Typography>
            <BulletList strArray={['test1', 'test2', 'test3']} />
          </Grid>
          <Grid item>
            <SettingsIcon
              fontSize="large"
              color="secondary"
              sx={{ backgroundColor: '#f0f0f0', padding: 0.5, borderRadius: 1 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Secondary of icon
            </Typography>
            <BulletList
              strArray={['this is secondary text', 'test2', 'test3']}
              color="secondary"
              isTextSecondary
            />
          </Grid>
          <Grid item>
            <CallIcon
              fontSize="large"
              color="success"
              sx={{ backgroundColor: '#f0f0f0', padding: 0.5, borderRadius: 1 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              success of icon
            </Typography>
            <BulletList
              strArray={['test1', 'test2', 'test3']}
              color="success"
              isTextSecondary
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
