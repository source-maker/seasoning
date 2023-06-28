import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export interface IToggleListProps {
  title: string;
  children: React.ReactNode;
  color: string;
}

export function ToggleList({
  title,
  children,
  color = 'font.main',
}: IToggleListProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton
        sx={{ color: color, fontWeight: 700, padding: '1.094rem 1rem' }}
        onClick={handleClick}
      >
        <ListItemText primary={title} disableTypography />
        {open ? (
          <ExpandLess sx={{ color: 'rgba(255, 255, 255, 0.3)' }} />
        ) : (
          <ExpandMore sx={{ color: 'rgba(255, 255, 255, 0.3)' }} />
        )}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ margin: '0 2em 2em' }}
      >
        {children}
      </Collapse>
    </List>
  );
}
