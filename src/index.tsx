import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app';
import {catalogFilmCards, filmCardData, moreFilms, myListArray} from './mocks/films';
import {playerData} from './mocks/player';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const props = {
  catalogFilmCards,
  filmCardData,
  myListArray,
  moreFilms,
  playerData
};

root.render(
  <React.StrictMode>
    <App {...props}/>
  </React.StrictMode>
);
