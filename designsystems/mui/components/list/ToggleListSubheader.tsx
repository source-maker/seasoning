import { ListSubheader } from '@mui/material';

export interface IToggleListItemProps {
  children: React.ReactNode;
  color?: string;
}

export function ToggleListSubheader({ children, color }: IToggleListItemProps) {
  return (
    <ListSubheader
      sx={{
        backgroundColor: 'transparent',
        color: color,
        padding: '0',
        margin: '0.5em 0',
        lineHeight: '1em',
      }}
    >
      {children}
    </ListSubheader>
  );
}
