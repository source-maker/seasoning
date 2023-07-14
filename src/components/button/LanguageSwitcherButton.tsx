import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcherButton = () => {
  const router = useRouter();
  const { i18n } = useTranslation('common');
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageLabel, setLanguageLabel] = useState('');

  useEffect(() => {
    setLanguageLabel(i18n.language === 'ja' ? 'JA' : 'EN');
  }, [i18n.language]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    i18n?.changeLanguage(language);
    if (language === 'ja') {
      // For Japanese (the default locale), redirect to the root URL
      router.push(router.pathname, router.asPath, { locale: false });
    } else {
      // For other locales, include the locale in the URL
      router.push(router.pathname, router.asPath, { locale: language });
    }

    // Save the user's language preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('userLang', language);
    }

    handleClose();
  };

  return (
    <div>
      <Button
        startIcon={<LanguageIcon />}
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        color="inherit"
      >
        {languageLabel}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange('ja')}>
          日本語・Japanese
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('en')}>
          英語・English
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcherButton;
