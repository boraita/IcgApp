import {CssBaseline, ThemeProvider} from '@material-ui/core';
import React, {useState} from 'react';
import {MainRouter} from './router';
import {SetTheme} from 'core/style/themeConfig';

function Home() {
  const [stateMode, setStateMode] = useState(false);
  const theme = SetTheme(stateMode);

  const setThemeChange = value => {
    setStateMode(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRouter setThemeState={setThemeChange} />
    </ThemeProvider>
  );
}

export default Home;
