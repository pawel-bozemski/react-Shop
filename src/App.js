import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { NotFound } from './components/views/NotFound/NotFound';
import { Contact } from './components/views/Contact/Contact';
import { OrderSummary } from './components/views/OrderSummary/OrderSummary';
import { ProductPage } from './components/common/ProductPage/ProductPage';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/products/:id" component={ProductPage} />
              <Route exact path="/ordersummary" component={OrderSummary} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
