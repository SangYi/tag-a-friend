import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Store from './store';
const store = new Store();
console.log('store', store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
