import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const defaultTheme = createMuiTheme();

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6D9773',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F7F7E8',
    },
    tertiary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  btnGreen: {
    fontSize: '1.125rem',
    color: 'white',
    background: '#6D9773',
    fontWeight: 400,
    fontFamily: 'Montserrat'
  },
  btnWhite: {
    fontSize: '1.125rem',
    color: '#6D9773',
    fontWeight: 400,
    fontFamily: 'Montserrat',
  },
  sectionContainer: {
    width: '100%',
    // minHeight: 'calc(100vh - 4rem)',
    // margin: "auto",

  },
  blogsCardContainer: {
    marginTop: '6rem',
    [defaultTheme.breakpoints.down('xs')]: {
      marginTop: '1rem',
    }
  },
  typography: {
    fontFamily: [
        'Century Gothic',
        'Montserrat'
    ].join(','),
    h1: {
      fontSize: '4.375rem',
      fontFamily: 'Century Gothic',
      fontWeight: 'Bold',
      [defaultTheme.breakpoints.down('lg')]: {
        fontSize: '3.75rem',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      }
    },
    h2: {
      fontSize: '2.1875rem',
      fontFamily: 'Century Gothic',
      fontWeight: 'Bold',
      color: 'white',
      [defaultTheme.breakpoints.down('lg')]: {
        fontSize: '1.875rem',
        [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '1.5625',
        }
      }
    },
    h3: {
      fontSize: '2.125rem',
      fontFamily: 'Century Gothic',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('lg')]: {
        fontSize: '1.875rem',
        [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '1.5625',
        }
      },
    },
    body2: {
      fontFamily: 'Montserrat',
      fontWeight: 400,
      color: '#1D211D',
      fontSize: '1.125rem',
    }
  },

  overrides: {
    MuiFormHelperText: {
      root: {
        '&$error': {
          color: '#ffa5a5',
        },
      },
      colorSecondary: {
        '&$error': {
          color: '#ffa5a5',
        },
      }
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'white',
        },
        '&$error': {
          color: '#ffa5a5',
        },
      },
      colorSecondary: {
        color: '#6D9773',
        '&$focused': {
          color: '#6D9773',
        },
        '&$error': {
          color: '#ffa5a5',
        },
      }
    },
    MuiInputLabel: {
      // colorSecondary: {
      //   color: '#6D9773',
      //   '&$focused': {
      //     color: '#6D9773',
      //   },
      // },
      // root: {
      //   color: '#fff',
      //   fontFamily: 'Montserrat',
      //   fontSize: '1.125rem',
      //
      // },

    },
    MuiOutlinedInput: {
      root: {
        fontSize: '1.125rem',
        fontFamily: 'Montserrat',
        color: "white",
        '& $notchedOutline': {
          border: `2px solid #fff`,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          border: `2px solid #fff`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            border: `2px solid #fff`,
          },
        },
        '&$focused $notchedOutline': {
            borderColor: '#fff',
            // borderWidth: 2,
        },
        '&$error $notchedOutline': {
            borderColor: '#ffa5a5',
        },
        // '&$disabled $notchedOutline': {
        //     borderColor: arcBlue,
        // },
      },
      colorSecondary: {
          fontSize: '1.125rem',
          fontFamily: 'Montserrat',
          color: "#6D9773",
          '& $notchedOutline': {
            border: `1px solid #6D9773`,
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            border: `1px solid #6D9773`,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              border: `1px solid #6D9773`,
            },
          },
          '&$error $notchedOutline': {
              borderColor: '#FFA5A5',
          },
          // '&$disabled $notchedOutline': {
          //     borderColor: arcBlue,
          // },

        '&$focused $notchedOutline': {
          borderColor: '#6D9773',
        },
      }

    },
  },

});

export default theme;
