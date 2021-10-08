import { AppBar, Switch, Tab, Tabs, Toolbar } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from './Routes';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const MainRouter = ({ setThemeState }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
              <Tab label="Home" {...a11yProps(0)} component={Link} to="/" />
              <Tab label="Help Me" {...a11yProps(1)} component={Link} to="/poldo" />
            </Tabs>
            <Switch onChange={e => setThemeState(e.target.checked)} aria-label="Theme switch" />
          </Toolbar>
        </AppBar>
        <Routes />
      </div>
    </Router>
  );
};
