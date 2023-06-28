import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import BrothLink from '../link/BrothLink';

export interface IOutlineIconButton {
  children: ReactNode;
  pathname: string;
  query?: { [key: string]: string | number };
}

export const OutlineIconButton = ({
  children,
  pathname = '',
  query,
}: IOutlineIconButton) => {
  return (
    <IconButton
      href={{ pathname, query }}
      component={BrothLink}
      aria-label="test"
      size="small"
      sx={{
        width: '100%',
        height: '5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid',
        borderRadius: '0.5rem',
        borderColor: 'bg.light',
        padding: '0.375rem 0.75rem',
      }}
    >
      {children}
    </IconButton>
  );
};
