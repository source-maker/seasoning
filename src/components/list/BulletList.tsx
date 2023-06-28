import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface IBulletListProps {
  strArray: string[];
  color?: 'primary' | 'secondary' | 'success';
  isTextSecondary?: boolean;
}

export function BulletList({
  strArray,
  color,
  isTextSecondary,
}: IBulletListProps) {
  return (
    <List sx={{ listStyleType: 'disc' }}>
      {strArray.map((value, index) => (
        <ListItem key={index} disablePadding>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CheckCircleIcon
              fontSize="small"
              color={color ? color : 'primary'}
            />
          </ListItemIcon>
          {!isTextSecondary && <ListItemText>{value}</ListItemText>}
          {isTextSecondary && (
            <ListItemText
              disableTypography
              primary={<Typography color="text.secondary">{value}</Typography>}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
