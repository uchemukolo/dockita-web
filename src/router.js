import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import asyncComponent from './helpers/AsyncFunc';

const root = '/';
const dashboard = '/dashboard';

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={root} component={asyncComponent(() => import('./containers/Home'))} />
        <Route exact path={dashboard} component={asyncComponent(() => import('./containers/dashboard'))} />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
