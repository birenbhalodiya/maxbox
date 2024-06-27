import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#647AF7',
    },
    text: {
      main: '#909092',
    },
    black: {
      main: '#000000',
    },
    white: {
      main: '#ffffff',
    },
    border: {
      main: '#cbd9d960',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'capitalize !important',
          fontSize: '14px !important',
          lineHeight: '1 !important',
          fontWeight: '500',
          padding: '11px 40px',
          color: 'white',
        },
        containedWhite: {
          color: 'var(--black)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            border: '1px solid var(--border)',
            borderRadius: '6px',
            input: {
              fontSize: '14px',
              fontWeight: '400',
              borderRadius: '6px',
              padding: '12px 15px',
              // color: 'white',
            },
            // fieldset: {
            //   border: '1px solid var(--border)',
            //   borderRadius: '6px',
            // }
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield'
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          },
          '& .MuiOutlinedInput-root:hover': {
            border: '1px solid var(--border)',
            borderRadius: '6px',
          },
          '& .MuiOutlinedInput-input::placeholder': {
            color: 'var(--darkGray)',
          },
        },
      }
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
        },
        select: {
          fontSize: '13px',
          fontWeight: '400',
          padding: '8px 15px',
          minHeight: 'unset',
          color: '#000',
          background: '#fff',
          '@media (max-width: 600px)': {
            fontSize: '14px !important',
            padding: '10px 15px',
          },
          fieldset: {
            border: '1px solid rgba(0, 0, 0, 0.12)'
          },
          '& .MuiInputBase-root:hover': {
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#000',
          },
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          '@media (max-width: 600px)': {
            fontSize: '14px !important',
            minHeight: '35px !important',
          },
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        }
      }
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: `0 2px 9px -2px rgb(50 71 92 / 6%),
              0 4px 9px 1px rgb(50 71 92 / 4%),
              0 2px 6px 4px rgb(50 71 92 / 2%);`,
          borderRadius: '6px',
          border: '1px solid var(--border)',
          padding: '10px'
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '20px',
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableHead-root': {
            '& .MuiTableCell-root': {
              textTransform: 'capitalize',
              color: 'var(--black)',
              background: '#66666610'
            }
          },
          '& .MuiTableCell-root': {
            padding: '10px 16px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            color: 'var(--gray)',
            textAlign: 'center !important',
            // '&:nth-of-type(2)': {
            //   textAlign: 'start !important',
            // },
            '&:first-of-type': {
              textAlign: 'start !important',
            },
            '&:last-child': {
              textAlign: 'end !important',
            },
          },
          '& .no_found_data': {
            textAlign: 'center !important',
            height: '200px',
            fontSize: '20px',
            fontWeight: '500',
            '&:first-of-type': {
              textAlign: 'center !important',
            },
            '&:last-child': {
              textAlign: 'center !important',
            },
          },
          // Media query for smaller screens
          '@media (max-width: 600px)': {
            '& .MuiTableCell-root': {
              fontSize: '14px',
              padding: '10px 10px',

            },
          },
          '& .MuiTableBody-root': {
            '& .MuiTableRow-root:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
              background: 'var(--primaryLight)'
            },
          },
        }
      }
    },
  },

});