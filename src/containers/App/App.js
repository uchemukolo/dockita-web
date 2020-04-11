import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
// import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
// import requestStatusActions from '../../redux/requestStatus/actions';
// import Sidebar from '../Sidebar/Sidebar';
import AppRouter from './AppRouter';
// import appSettings from '../../settings';
import './global.css';
import './App.style.css';
import debounce from '../../helpers/debounce';
import Dashboard from '../Dashboard'


// const { logout } = authAction;
const { toggleAll } = appActions;

export class App extends Component {
  // deferredLogout = debounce(abort => {
  //   if (abort) return;

  //   if (this.props.auth.authToken) {
  //     this.props.logout({ inactivityReason: true });
  //   }
  // }, appSettings.systemIdleTimeout);

  // constructor(props) {
  //   super(props);

  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.setPendingToFalse();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { url } = this.props.match;

    // this.deferredLogout();


    return (
          <Layout>
            <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
              {/* <Sidebar url={url} /> */}
              <Dashboard />
              <Layout
                className="isoContentMainLayout"
                style={{
                  position: 'relative',
                }}
              >
                <div
                  className="App"
                  style={{
                    width: '100%',
                    padding: '50px 60px 0px 60px'
                  }}
                >
                  <AppRouter url={url} />
                </div>
              </Layout>
            </Layout>
          </Layout>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    app: state.App,
    isRequestPending: state.RequestStatus,
    globalState: state,
  }),
  dispatch => ({
    // logout,
    // setPendingToFalse: /* istanbul ignore next */ () => dispatch(requestStatusActions.setPendingToFalse()),
  }),
)(App);
