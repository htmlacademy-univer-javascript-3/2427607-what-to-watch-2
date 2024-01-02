import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {filmCardData} from './mocks/films';
import {playerData} from './mocks/player';
import {tabData} from './mocks/tabProps';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilms} from './store/api-actions';

// store.dispatch(fetchFilms());
store.dispatch(fetchFilms());
// store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const props = {
  catalogFilmCards: [],
  filmCardData,
  playerData,
  tabData
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
