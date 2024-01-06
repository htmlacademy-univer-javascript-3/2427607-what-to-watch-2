import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {Provider} from 'react-redux';
import {store} from './store';
import browserHistory from './browser-history';
import {ToastContainer} from 'react-toastify';
import HistoryRouter from './components/history-route/history-route';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
