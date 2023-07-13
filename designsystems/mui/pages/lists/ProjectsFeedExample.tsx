import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {
  alpha,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';
import { MuiButton } from '@/components/button/MuiButton';
import DropdownButton from '@/components/button/DropdownButton';
import { grey } from '@mui/material/colors';
import BrothImage from '@/components/image/BrothImage';
import { StarOutline } from '@mui/icons-material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function ProjectsFeedExample() {
  const isDarkModeEnabled = useTheme().palette.mode === 'dark';
  const stripedColor = isDarkModeEnabled ? alpha(grey[800], 0.2) : grey[100];

  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" component="h1" mb={4}>
          Projects
        </Typography>
      </Container>
      <Divider />
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <TextField
            name="search"
            label="Search"
            placeholder="Search Projects"
          />
          <ButtonGroup variant="contained">
            <MuiButton>Add New Project</MuiButton>
            <DropdownButton
              id="dropdown-project-options"
              options={
                <>
                  <MenuItem onClick={() => console.log('clicked')}>
                    Import an existing project
                  </MenuItem>
                  <MenuItem onClick={() => console.log('clicked')}>
                    Start from an existing project
                  </MenuItem>
                  <MenuItem onClick={() => console.log('clicked')} disabled>
                    Deploy manually
                  </MenuItem>
                </>
              }
            />
          </ButtonGroup>
        </Stack>

        <Box py={2}>
          <List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, i) => (
              <ListItem
                key={i}
                sx={{
                  bgcolor: i % 2 !== 0 ? stripedColor : '',
                  p: 2,
                }}
                secondaryAction={
                  <>
                    <IconButton>
                      <StarOutline />
                    </IconButton>
                    <IconButton>
                      <NavigateNextIcon />
                    </IconButton>
                  </>
                }
              >
                <BrothImage
                  width="150"
                  height="100"
                  layout="fixed"
                  alt="project"
                  style={{ borderRadius: 16 }}
                />
                <ListItemText
                  primary={<b>Broth</b>}
                  secondary="Deployed from Github.com"
                  sx={{ ml: 2 }}
                />
                <ListItemText
                  primary={<b>Owned by SourceMaker</b>}
                  secondary="Last published on Nov 12, 2021"
                />
              </ListItem>
            ))}
          </List>
          <MuiButton variant="outlined" fullWidth>
            Load More
          </MuiButton>
        </Box>
      </Container>
    </Box>
  );
}
