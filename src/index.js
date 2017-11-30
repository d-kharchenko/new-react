// import'./main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Layout from 'containers/layout';
import Products from 'containers/products';
import Security from 'containers/security';
import SignIn from 'components/registration';

import reducers from 'reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout} />
            <Route path="/sign-in" component={SignIn} />
            <Route path='/products' component={Products} />
            <Route path='/security' component={Security} />
        </Router>
    </Provider>,
  document.getElementById('root')
);
