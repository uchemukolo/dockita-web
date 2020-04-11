import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
// import { updateLastVisitedRoute } from './helpers/utility';
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const root = '/';
const dashboard = '/dashboard';
const signInRoute = '/signin';
const createPasswordRoute = '/passwords/new';
const resetPasswordRoute = '/passwords/forgot';
const ignoredPaths = [signInRoute, createPasswordRoute, resetPasswordRoute];

const RestrictedRoute = ({ component: Component, isLoggedIn, history, ...rest }) => {
  const path = history.location.pathname;
  if (ignoredPaths.includes(path)) {
    return null;
  }
  // if (history.location.pathname !== '/' || history.location.pathname !== '/forbidden') {
  //   updateLastVisitedRoute(`${history.location.pathname}${history.location.search}`);
  // }

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: signInRoute,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={root} component={asyncComponent(() => import('./containers/Home'))} />
        <Route exact path={dashboard} component={asyncComponent(() => import('./containers/Dashboard/Dashboard'))} />
        <Route
          exact
          path={createPasswordRoute}
          component={asyncComponent(() => import('./containers/Home'))}
        />
        <Route exact path={resetPasswordRoute} component={asyncComponent(() => import('./containers/Home'))} />
        {/* <RestrictedRoute history={history} component={App} isLoggedIn={isLoggedIn} /> */}
      </div>
    </ConnectedRouter>
  );
};

const connectPublicRoutes = connect(state => ({
  // isLoggedIn: state.Auth.authToken !== null,
}))(PublicRoutes);

export default connectPublicRoutes;
