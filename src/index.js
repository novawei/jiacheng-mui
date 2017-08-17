import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './resource/css/index.css';
import store from './store';
import App from './App';
import SchoolList from './containers/SchoolList';
import SchoolDetail from './containers/SchoolDetail';
import DataList from './containers/DataList';
import DataDetail from './containers/DataDetail';
import My from './containers/My';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/schools'/>
    	<Route path='schools'>
        <IndexRoute component={SchoolList}/>
        <Route path=':id' component={SchoolDetail}/>
      </Route>
      <Route path='data'>
        <IndexRoute component={DataList}/>
        <Route path=':id' component={DataDetail}/>
      </Route>
      <Route path='my'>
        <IndexRoute component={My}/>
      </Route>
  	</Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {router}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);