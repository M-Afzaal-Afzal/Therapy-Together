import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
  typography: {
    fontFamily: [
        'Century Gothic',
        'Montserrat'
    ].join(','),
    h1: {
      fontSize: '4.375rem',
      fontFamily: 'Century Gothic',
      fontWeight: 'Bold'
    },
    h2: {
      fontSize: '2.1875rem',
      fontFamily: 'Century Gothic',
      fontWeight: 'Bold',
      color: 'white'
    },
    h3: {
      fontSize: '2.125rem',
      fontFamily: 'Century Gothic',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Montserrat',
      fontWeight: 400,
      color: '#1D211D',
      fontSize: '1.125rem',
    }
  },

});

export default theme;
