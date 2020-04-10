import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  }),
  composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ),
  // compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };
