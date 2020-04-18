import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../Home')),
  },
  {
    path: 'dashboard',
    component: asyncComponent(() => import('../dashboard')),
  },
]

class AppRouter extends Component {
  render() {
    const { style } = this.props;

    return (
      <div style={style}>
        <Switch>
          {routes.map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;

            return <Route exact={exact !== false} key={path} path={`/${path}`} {...otherProps} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
