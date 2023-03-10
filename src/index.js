import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import { searchRobots, requestRobots } from './reducers';
import * as serviceWorker from './serviceWorkerRegistration.js'

const rootReducter = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducter, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();