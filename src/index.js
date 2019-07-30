import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
