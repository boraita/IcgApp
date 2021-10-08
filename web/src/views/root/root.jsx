import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { SetTheme } from 'core/style/themeConfig';
import React, { useState } from 'react';
import { MainRouter } from './router';

function Home() {
  const [stateMode, setStateMode] = useState(false);
  const theme = SetTheme(stateMode);

  const setThemeChange = (/** @type {boolean | ((prevState: boolean) => boolean)} */ value) => {
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
