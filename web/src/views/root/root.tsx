import {CssBaseline, ThemeProvider} from '@material-ui/core';
import {setTheme} from 'core/style/themeConfig';
import React, {useState} from 'react';
import {MainRouter} from './router';

function Home() {
  const [stateMode, setStateMode] = useState(false);
  const theme = setTheme(stateMode);

  const setThemeChange = (value) => {
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
