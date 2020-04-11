import React from 'react';
import { Provider } from 'react-redux';
import PublicRoutes from './router';
import { store, history } from './redux/store';
import './App.css';



const DokitaApp = () => (
<Provider store={store}>
  <PublicRoutes history={history} />
  </Provider>
)

export default DokitaApp;
