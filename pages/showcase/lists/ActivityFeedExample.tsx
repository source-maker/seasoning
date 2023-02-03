import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Divider, ListSubheader } from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';
import { BrothButton } from '@/components/button/BrothButton';

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function ActivityFeedExample() {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" component="h1" mb={4}>
          Activity
        </Typography>
      </Container>
      <Divider />
      <Container maxWidth="lg">
        <Box py={2}>
          <List>
            {generate(
              <>
                <ListSubheader component="div" id="nested-list-subheader">
                  November 2022
                </ListSubheader>
                {[0, 1, 2, 3, 4].map((value, i) => (
                  <ListItem
                    key={i}
                    dense
                    divider={i % 2 === 0}
                    secondaryAction={
                      <Typography variant="body2">
                        {i % 2 === 0 ? '13d' : '88d'}
                      </Typography>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <GitHub />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`You deployed sample project (f614cb5 in develop) to production`}
                    />
                  </ListItem>
                ))}
              </>
            )}
          </List>
          <BrothButton variant="outlined" fullWidth>
            Load More
          </BrothButton>
        </Box>
      </Container>
    </Box>
  );
}
