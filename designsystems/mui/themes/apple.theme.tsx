import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { alpha, darken } from '@mui/material';
import AppleCheckedIcon from 'designsystems/mui/components/asset/AppleCheckedIcon';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}

export const theme = {
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.125rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1,
      textTransform: 'none',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    label: {
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1.2,
    },
  },
  palette: {
    primary: {
      main: '#007AFF',
      dark: '#0062CC',
      light: '#3395FF',
    },
    error: {
      main: '#CF2F26',
      dark: '#CF2F26',
      light: '#FF6259',
    },
    warning: {
      main: '#FF9500',
      dark: '#CC7700',
      light: '#FFAA33',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#5AC8FA',
      dark: '#48A7D3',
      light: '#7BD3FB',
    },
    success: {
      main: '#34C759',
      dark: '#2A9F47',
      light: '#5DD27A',
    },
    text: {
      primary: '#1F1F1F',
      secondary: '#555558',
      disabled: '#E5E5EA',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '--TextField-brandBorderColor': darken(
            theme.palette.text.disabled,
            0.3
          ),
          '--TextField-brandBorderHoverColor': theme.palette.text.primary,
          '--TextField-brandBorderFocusedColor':
            theme.palette[ownerState.color].main ||
            theme.palette['primary'].main,
          '--TextField-borderRadius': '8px',
          '--TextField-placeholderColor': alpha(
            theme.palette.text.secondary,
            0.3
          ),
          '&:has(input:read-only)::before': {
            border: 'none',
          },
        }),
        input: ({ theme }) => ({
          paddingLeft: '16px',
          paddingRight: '16px',
          '&::placeholder': {
            color: 'var(--TextField-placeholderColor)',
            opacity: 1,
          },
          '&:read-only': {
            WebkitTextFillColor: theme.palette.text.primary,
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: 'var(--TextField-borderRadius)',
          borderColor: theme.palette.text.disabled,
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderColor)',
            outline: `3px solid ${alpha(
              theme.palette[ownerState.color]?.main ||
                theme.palette['primary'].main,
              0.3
            )}`,
            outlineOffset: '1px',
            borderRadius: 'var(--TextField-borderRadius)',
          },
          [`&.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
        }),
        input: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
        notchedOutline: {
          top: 0,
          borderColor: 'var(--TextField-brandBorderColor)',
          '> legend': {
            width: 0,
            height: 0,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--TextField-borderRadius)',
          '&:before, &:after': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--TextField-borderRadius)',
          '&:before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
        input: {
          padding: '16px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        shrink: {
          display: 'none',
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowDownIcon />,
      },
      styleOverrides: {
        popupIndicator: ({ theme }) => ({
          top: 4,
          right: 12,
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
          '> svg': {
            color: '#1F1F1F',
            backgroundColor: theme.palette.text.disabled,
            borderRadius: '5px',
            fontSize: '1rem',
          },
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownIcon,
        displayEmpty: true,
      },
      styleOverrides: {
        icon: ({ theme }) => ({
          color: '#1F1F1F',
          backgroundColor: theme.palette.text.disabled,
          borderRadius: '5px',
          fontSize: '1rem',
          right: 12,
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
        }),
        list: {
          paddingTop: 0,
          paddingBottom: 0,
          background: 'white',
          '& li.Mui-selected': {
            fontWeight: 700,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === 'small' && {
            padding: '4px 8px',
            fontSize: '0.75rem',
          }),
          ...(ownerState.size === 'medium' && {
            padding: '8px 16px',
            fontSize: '0.875rem',
          }),
          ...(ownerState.size === 'large' && {
            padding: '10px 24px',
            fontSize: '1rem',
          }),
          ...(ownerState.variant === 'contained' && {
            boxShadow: `0px 0px 0px 0.5px ${alpha(
              theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
              0.12
            )}, 0px 1px 2.5px 0px ${alpha(
              theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
              0.24
            )}`,
          }),
          ...(ownerState.variant === 'outlined' && {
            boxShadow: `0px 0px 0px 0.5px rgba(0, 0, 0, 0.05), 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30)`,
            borderWidth: '0px',
          }),
          borderRadius: '5px',
          '&.Mui-disabled': {
            ...(ownerState.variant === 'contained' && {
              color:
                theme.palette[ownerState.color]?.contrastText ??
                theme.palette['primary'].contrastText,
              backgroundColor:
                theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
            }),
            ...(ownerState.variant !== 'contained' && {
              color:
                theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
            }),
            opacity: 0.5,
          },
          '&.Mui-focusVisible': {
            outline: `3px solid ${alpha(
              theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
              0.3
            )}`,
            boxShadow: `0px 0px 0px 0.5px ${alpha(
              theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
              0.12
            )}, 0px 1px 2.5px 0px ${alpha(
              theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
              0.24
            )}`,
          },
          '&:hover': {
            ...(ownerState.variant === 'contained' && {
              boxShadow: `0px 0px 0px 0.5px ${alpha(
                theme.palette[ownerState.color]?.main ??
                  theme.palette['primary'].main,
                0.12
              )}, 0px 1px 2.5px 0px ${alpha(
                theme.palette[ownerState.color]?.main ??
                  theme.palette['primary'].main,
                0.24
              )}`,
            }),
            ...(ownerState.variant === 'outlined' && {
              borderWidth: '0px',
            }),
          },
        }),
      },
    },
    MuiRadio: {
      defaultProps: {
        checkedIcon: <AppleCheckedIcon />,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.disabled,
          '&.Mui-focusVisible': {
            color: 'transparent',
            '.MuiSvgIcon-root': {
              color: theme.palette.text.disabled,
              borderRadius: '50%',
              outline: `4px solid ${alpha(
                theme.palette[ownerState.color]?.main ??
                  theme.palette['primary'].main,
                0.3
              )}`,
              outlineOffset: ownerState.size === 'small' ? '-1.8px' : '-1px',
            },
          },
          '&.Mui-checked': {
            '.MuiSvgIcon-root': {
              color:
                theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
            },
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.disabled,
          '&.Mui-focusVisible': {
            color: 'transparent',
            '.MuiSvgIcon-root': {
              color: theme.palette.text.disabled,
              borderRadius: ownerState.size === 'small' ? '3px' : '5px',
              outline: `3px solid ${alpha(
                theme.palette[ownerState.color]?.main ??
                  theme.palette['primary'].main,
                0.3
              )}`,
              outlineOffset: ownerState.size === 'small' ? '-1.8px' : '-2.8px',
            },
          },
          '&.Mui-checked': {
            '.MuiSvgIcon-root': {
              color:
                theme.palette[ownerState.color]?.main ??
                theme.palette['primary'].main,
            },
          },
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: ownerState.size === 'small' ? '4px' : '7px',
          ...(ownerState.size === 'small' && {
            height: '26px',
            width: '42px',
            marginRight: '1px',
          }),
          '.MuiSwitch-switchBase': {
            ...(ownerState.size === 'small' && {
              padding: '6px',
            }),
          },
          '.MuiSwitch-thumb': {
            ...(ownerState.size === 'small' && {
              width: '14px',
              height: '14px',
            }),
          },
          '&:hover': {
            '.MuiSwitch-track': {
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%), ${theme.palette.text.disabled}`,
            },
          },
        }),
        switchBase: ({ ownerState, theme }) => ({
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '> .MuiSwitch-thumb': {
              color: 'white',
            },
            '+ .MuiSwitch-track': {
              opacity: 1,
            },
          },
          '&.Mui-focusVisible': {
            color: 'transparent',
            '> .MuiSwitch-thumb': {
              color: 'white',
            },
            '+ .MuiSwitch-track': {
              borderRadius: '12px',
              outline: `3px solid ${alpha(
                theme.palette[ownerState.color]?.main ??
                  theme.palette['primary'].main,
                0.3
              )}`,
              outlineOffset: '1px',
            },
          },
        }),
        track: ({ theme }) => ({
          backgroundColor: theme.palette.text.disabled,
          opacity: 1,
          borderRadius: '12px',
        }),
        thumb: {
          boxShadow:
            '0px 0.25px 0.5px 0.10000000149011612px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          '> tr': {
            '> th': {
              borderBottom: `1px solid ${theme.palette.text.disabled}`,
              '&::after': {
                content: '"|"',
                display: 'inline-block',
                float: 'right',
                fontSize: '1.2rem',
                lineHeight: '1.5rem',
                fontWeight: 400,
                color: theme.palette.text.disabled,
              },
            },
          },
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '4px',
          '&:nth-of-type(even)': {
            '> td': {
              backgroundColor: theme.palette.action.hover,
              '&:first-child': {
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
              },
              '&:last-child': {
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
              },
            },
            '&:has(+ div.collapse-inner-open) > td': {
              '&:first-child': {
                borderBottomLeftRadius: 0,
              },
              '&:last-child': {
                borderBottomRightRadius: 0,
              },
            },
            '+ div.collapse-inner-open': {
              '> td': {
                backgroundColor: theme.palette.action.hover,
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
              },
            },
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
        sizeSmall: {
          padding: '8px 6px',
        },
        sizeMedium: {
          padding: '14px 10px',
        },
      },
    },
  },
};
