export interface TypographyPropsVariantOverrides {
  placeholder: true;
  money: true;
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    placeholder: true;
    money: true;
  }
}

declare module '@mui/material/styles' {
  export interface Palette {
    border: {
      light: string;
      main: string;
      dark: string;
    };
    bg: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
    };
    font: {
      lighest: string;
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
      darkest: string;
      disabledNormal: string;
      disabledHeader: string;
    };
  }
}

export const theme = {
  palette: {
    primary: {
      lightest: '#E6E7F1', // confirmation checkbox bg
      lighter: '#9094C3', // confirmation checkbox bg
      light: '#585FA4', // checkbox link
      main: '#202986', // footer bg, colored input label, outline button, button bg
      dark: '#020C75', // outdated main?? mypage/account button bg (outdated now), select options,  link color, outline button colored
    },
    secondary: {
      main: '#1FC0B6', // heart icon, mypage button bg, active/complete stepper icon color
      dark: '#00AEA2', // mypage icon
      contrastText: '#fff',
    },
    border: {
      light: '#e2e2e2', // mypage/account border,
      main: '#e0e0e0', // list item borders
      dark: '#D9D9D8', // mypage boxes, autocomplete option border
      colorLight: '#9A9EC8', // mypage boxes
    },
    bg: {
      lighter: '#F7F7F7', // input bg
      light: '#E9E9E9', // stepper icon bg,
      main: '#F3F3F3', // active tab background, tab border
      dark: '#BFBFBF', // disabled button bg1
      darker: '#c5c5c5', // disabled button bg
      color: '#28308A', // colored boxes
    },
    font: {
      lightest: '#B3B3B3', // autocomplete search icon, input icons
      lighter: '#7A7A7A', // disabled button text
      light: '#5A5A5A', // back icon, autocomplete placeholder, input font
      main: '#383838', // h2, input label, header title, unselected tab text, stepper label
      dark: '#262626', // autocomplete suggestion text, card title text
      darker: '#090909', // mypage calculations
      darkest: '#00010C', // active tab text
    },
    success: {
      main: '#4CCDC5',
    },
    error: {
      main: '#D72F3C',
    },
  },
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: 14,

    h1: {
      fontWeight: 400,
      color: 'font.secondary',
    },
    // home section headers
    h2: {
      fontWeight: 700,
    },
    // select dropdown option title
    h3: {
      fontWeight: 700,
      // color: customPalette.primary.main,
      padding: '0',
      marginBottom: '0.5em',
    },
    // accordion summary title
    h4: {
      fontWeight: 500,
      // color: customPalette.primary.main,
    },
    // accordion details section header
    h5: {
      fontWeight: 700,
    },
    // box secondary headers
    h6: {
      fontWeight: 700,
      color: 'font.primary',
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      marginBottom: '1em',
    },
    // text for input preview (select inputs)
    placeholder: {
      fontSize: '1em',
      // color: customPalette.font.lightest,
    },
    // text for money display
    money: {
      fontSize: '1.125em',
      fontWeight: 700,
      // color: customPalette.font.main,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 1.8rem',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        fullWidth: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '38px',
          paddingTop: '0.875rem',
          paddingBottom: '0.875rem',
          lineHeight: '1.2500em',
          fontWeight: '600',
          '&.Mui-disabled': {
            // backgroundColor: customPalette.bg.darker,
          },
        },
      },
      variants: [
        {
          props: { variant: 'success' },
          style: {
            backgroundColor: '#66C16B',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#66C16B',
            },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '1rem',
          '& .MuiInputLabel-asterisk': {
            display: 'none',
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          // color: customPalette.font.main,
          display: 'contents',
          fontSize: '1em',
          fontWeight: 1000,
          '&.Mui-disabled': {
            // color: customPalette.font.main,
          },
        },
      },
    },
    MuiInput: {
      // defaultProps: {
      //   disableUnderline: true,
      // },
      // styleOverrides: {
      //   root: {
      //     backgroundColor: 'red',
      //     padding: '0.8rem',
      //     borderBottom: 'none',
      //     borderRadius: '0.3rem',
      //     marginTop: '1rem',
      //   },
      // },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '& .BrothTypography-root.Mui-disabled': {
            // color: customPalette.font.main,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '0.25rem',
        },
      },
    },
    MuiCheckbox: {
      // styleOverrides: {
      //   root: {
      //     '&.Mui-disabled': {
      //       color: customPalette.font.main,
      //     },
      //   },
      // },
    },
    MuiList: {
      // styleOverrides: {
      //   root: {
      //     padding: '0',
      //     '& .MuiMenuItem-root:not(:last-child)': {
      //       borderBottom: '1px solid ',
      //       borderColor: customPalette.border.main,
      //     },
      //   },
      // },
    },
    MuiMenuItem: {
      // styleOverrides: {
      //   root: {
      //     '&.Mui-selected': {
      //       backgroundColor: 'white',
      //     },
      //     // enable wrapping of text with whitespace/wordbreak
      //     whiteSpace: 'unset',
      //     wordBreak: 'break-all',
      //     '&:focus, &:focus-visible': {
      //       backgroundColor: 'white',
      //     },
      //   },
      // },
    },
    MuiOutlinedInput: {
      // styleOverrides: {
      //   root: {
      //     marginTop: '1rem',
      //     backgroundColor: customPalette.bg.lighter,
      //     '&.Mui-disabled': {
      //       backgroundColor: 'white',
      //       border: '1px solid',
      //       borderColor: customPalette.bg.main,
      //     },
      //   },
      //   notchedOutline: {
      //     border: 'none',
      //   },
      // },
    },
    MuiChip: {
      // styleOverrides: {
      //   root: {
      //     fontSize: '0.625em',
      //     lineHeight: '100%',
      //     height: '1.125rem',
      //     fontWeight: 700,
      //     borderRadius: '0.6875rem',
      //     '&.Mui-disabled': {
      //       backgroundColor: customPalette.font.lighterOutdated,
      //     },
      //   },
      //   label: {
      //     display: 'inline-block',
      //   },
      // },
    },
    MuiFormHelperText: {
      // styleOverrides: {
      //   root: {
      //     fontSize: '14px',
      //     marginLeft: '0',
      //   },
      // },
    },
    MuiListItem: {
      // styleOverrides: {
      //   root: {
      //     display: 'block',
      //     paddingTop: '1rem',
      //   },
      // },
    },
    MuiListItemText: {
      // styleOverrides: {
      //   primary: {
      //     fontSize: '12px',
      //     fontWeight: 400,
      //     color: customPalette.font.main,
      //     lineHeight: '15.6px',
      //   },
      // },
    },
    MuiDialog: {
      // styleOverrides: {
      //   root: {
      //     '.MuiPaper-root': {
      //       margin: '0',
      //     },
      //     padding: '0 2rem 2rem 2rem',
      //   },
      // },
    },
    MuiDialogTitle: {
      // styleOverrides: {
      //   root: {
      //     fontSize: '1.25em',
      //     margin: 'auto',
      //     paddingTop: '2em',
      //   },
      // },
    },
    MuiDialogContent: {
      // styleOverrides: {
      //   root: {
      //     padding: '0 2rem 2rem 2rem',
      //   },
      // },
    },
    MuiLink: {
      // styleOverrides: {
      //   root: {
      //     textUnderlineOffset: '.1em',
      //   },
      // },
    },
    MuiSnackbar: {
      // anchorOrigin: {
      //   vertical: 'bottom',
      //   horizontal: 'center',
      // },
      // defaultProps: {
      //   autoHideDuration: 5000,
      // },
    },
    MuiAutocomplete: {
      // styleOverrides: {
      //   inputRoot: {
      //     paddingBottom: '1rem',
      //   },
      // },
      // ChipProps: {
      //   root: {
      //     fontSize: '2em',
      //   },
      // },
    },
    MuiAlert: {
      // defaultProps: {
      //   variant: 'outlined',
      // },
      // styleOverrides: {
      //   root: {
      //     fontSize: '0.813em',
      //     fontWeight: '600',
      //     padding: '0.375rem 0.625rem',
      //     margin: '0 auto 1rem',
      //     alignItems: 'center',
      //     borderColor: customPalette.border.dark,
      //     borderRadius: '0.375rem',
      //     '.MuiAlert-message, .MuiAlert-icon, .MuiAlert-action': {
      //       padding: 0,
      //     },
      //     '.MuiAlert-message': {
      //       color: customPalette.primary.main,
      //     },
      //     '.MuiAlert-icon': {
      //       color: customPalette.secondary.dark,
      //       marginRight: '0.4rem',
      //     },
      //     '.MuiAlert-action': {
      //       color: customPalette.font.lightest,
      //       marginRight: '-0.8rem',
      //     },
      //   },
      // },
    },
    MuiAccordion: {
      // styleOverrides: {
      //   root: {
      //     boxShadow: 'none',
      //     marginBottom: '1rem',
      //     border: '1px solid',
      //     borderRadius: '0.25rem',
      //     borderColor: customPalette.border.dark,
      //     '&.Mui-expanded:last-of-type': {
      //       marginBottom: '1rem',
      //     },
      //   },
      // },
    },
    MuiAccordionSummary: {
      // styleOverrides: {
      //   root: {
      //     backgroundColor: customPalette.bg.main,
      //     color: customPalette.primary.main,
      //     height: '3rem',
      //     minHeight: '3rem',
      //     '&.Mui-expanded': {
      //       height: '3rem',
      //       minHeight: '3rem',
      //     },
      //   },
      // },
    },
    MuiRadio: {
      // styleOverrides: {
      //   root: {
      //     color: customPalette.primary.main,
      //   },
      // },
    },
    MuiLinearProgress: {
      // defaultProps: {
      //   color: 'secondary',
      // },
      // styleOverrides: {
      //   root: {
      //     height: '0.750rem',
      //     borderRadius: '0.5rem',
      //     backgroundColor: customPalette.border.dark,
      //   },
      //   bar: {
      //     borderRadius: '0.5rem',
      //   },
      // },
    },
    MuiCircularProgress: {
      // defaultProps: {
      //   color: 'secondary',
      // },
    },
  },
};
