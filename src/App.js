import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/Layouts';

import store from './redux/store';
import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
