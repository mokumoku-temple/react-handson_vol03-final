import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import Home from './containers/home';
import List from './containers/list';
import Detail from './containers/list/detail';

import './index.css';

injectTapEventPlugin();

class Root extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <div>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="/list" component={List}>
                <IndexRoute component={Detail} />

                <Route path=":id" component={Detail} />
              </Route>
            </Route>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('app'));
