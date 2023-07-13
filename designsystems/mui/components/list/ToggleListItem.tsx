import { ListItemButton, ListItemText, Typography } from '@mui/material';
import BrothLink from '../link/BrothLink';

export interface IToggleListItemProps {
  text: string;
  href: string;
}

export function ToggleListItem({ text, href }: IToggleListItemProps) {
  return (
    <ListItemButton
      href={href}
      component={BrothLink}
      sx={{ padding: '0 0 0.5em 0', margin: '0' }}
    >
      <ListItemText
        primary={<Typography style={{ fontSize: '0.75em' }}>{text}</Typography>}
        sx={{
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          margin: '0',
        }}
      />
    </ListItemButton>
  );
}
