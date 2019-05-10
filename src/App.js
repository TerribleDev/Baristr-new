import React from 'react';
import Cards from './components/Cards/Cards.js';
import Location from './components/Locations/Location.js';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import brown from "@material-ui/core/colors/brown";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import NavBar from './components/NavBar.js';
import store from './store/index.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBody from './components/AppBody.js';
import { Router, Link } from "@reach/router";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: brown,
      secondary: blue,
      error: red
    },
    typography: {
      useNextVariants: true,
    },
  });
  return (
    <Provider store={store}>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <AppBody>
            <Router>
              <Cards path="/" />
              <Cards path="/cards" />
              <Location path="locations/:locationId" />
            </Router>
          </AppBody>
        </MuiThemeProvider>
      </CssBaseline>
    </Provider>
  );
}
