import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemButton,
  SxProps,
} from '@mui/material';
import { Fragment } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BrothLink from '../link/BrothLink';

export interface DrawerItem {
  title: string;
  href: string;
  icon?: string;
  onClick?: () => void;
}

interface Props {
  headerText: string;
  items: DrawerItem[];
}

export function DrawerItems(props: Props) {
  const iconStyles: SxProps = {};
  const getIcon = (name?: string) => {
    return (
      {
        home: <HomeOutlinedIcon sx={iconStyles} />,
        login: <LoginIcon sx={iconStyles} />,
        logout: <LogoutIcon sx={iconStyles} />,
        checkroom: <CheckroomIcon sx={iconStyles} />,
        person: <PersonOutlineOutlinedIcon sx={iconStyles} />,
        cart: <ShoppingCartOutlinedIcon sx={iconStyles} />,
        settings: <SettingsOutlinedIcon sx={iconStyles} />,
        textSnippet: <TextSnippetOutlinedIcon sx={iconStyles} />,
        info: <InfoOutlinedIcon sx={iconStyles} />,
        help: <HelpOutlineIcon sx={iconStyles} />,
        email: <EmailOutlinedIcon sx={iconStyles} />,
        wallet: <AccountBalanceWalletOutlinedIcon sx={iconStyles} />,
        swap: <SwapHorizOutlinedIcon sx={iconStyles} />,
        badge: <BadgeOutlinedIcon sx={iconStyles} />,
        book: <MenuBookIcon sx={iconStyles} />,
        smartphone: <SmartphoneIcon sx={iconStyles} />,
      }[name ?? ''] ?? null
    );
  };

  return (
    <List dense>
      <ListSubheader>{props.headerText}</ListSubheader>

      {props.items.map((item) => (
        <Fragment key={item.title}>
          {item.onClick ? (
            <ListItem key={item.title} onClick={item.onClick} disablePadding>
              <ListItemButton>
                <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ) : (
            <BrothLink href={item.href}>
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </BrothLink>
          )}
        </Fragment>
      ))}
    </List>
  );
}
