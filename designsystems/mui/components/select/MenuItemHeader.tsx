import { MenuItem } from '@mui/material';

export interface IMenuItemHeaderProps {
  children: React.ReactNode;
}

export function MenuItemHeader({ children }: IMenuItemHeaderProps) {
  return (
    <MenuItem
      disabled
      divider
      sx={{
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: 700,
        '&.Mui-disabled': { opacity: 1 },
        justifyContent: 'center',
      }}
    >
      {children}
    </MenuItem>
  );
}
