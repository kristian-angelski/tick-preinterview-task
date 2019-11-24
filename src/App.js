import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './redux/store';
import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Routes />
    </Provider>
  );
};

export default App;
