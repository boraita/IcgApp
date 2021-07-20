import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {AppBar, Switch, Tab, Tabs, Toolbar} from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const MainRouter = ({setThemeState}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Home" {...a11yProps(0)} component={Link} to="/" />
              <Tab label="Help" {...a11yProps(1)} component={Link} to="/example" />
            </Tabs>

            <Switch onChange={e => setThemeState(e.target.checked)} aria-label="Theme switch" />
          </Toolbar>
        </AppBar>
        <Route path="/">
          <h1>Welcome React ICG App!!!!</h1>
        </Route>
        <Route path="/example">
          <h3>Gracias por apoyarnos Danié</h3>
        </Route>
      </div>
    </Router>
  );
};
