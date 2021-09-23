import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import useSettings from '../hooks/useSettings';
import GlobalStyles from './globalStyles';

const propTypes = {
  children: PropTypes.node
};

const ThemeConfig = ({ children }) => {
  const { themeMode } = useSettings();
  const isLight = themeMode === 'light';
  const themeOptions = useMemo(() => ({
    palette: {
      mode: isLight ? 'light' : 'dark',
      background: {
        paper: isLight ? '#fff' : '#242424',
        default: isLight ? '#f5f8fa' : '#312e2e'
      }
    },
    typography: {
      fontFamily: 'Quicksand'
    }
  }), [isLight]);
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

ThemeConfig.propTypes = propTypes;

export default ThemeConfig;
