import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUpR from './store/reducers/SignUpReducer';
import LoginR from './store/reducers/LoginReducer';

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    : null) || compose;

const reducer = combineReducers({
  SignUpR: SignUpR,
  LoginR: LoginR,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById("react")
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

