import React from 'react';
// import { Provider } from 'react-redux';
// import PublicRoutes from './router';
// import { store, history } from './redux/store';
// import Home from './containers/Home'
import './App.css';
import Dashboard from './containers/dashboard/Dashboard';



// const App = () => (
//           <Provider store={store}>
//             <PublicRoutes history={history} />
//           </Provider>
// );
// Boot()
//   .then(() => App())
//   .catch(error => console.error(error));


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Dashboard />
  </div>
  );
}

export default App;
