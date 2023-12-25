import {createReducer} from '@reduxjs/toolkit';
import {setGenre} from '../action';
import {catalogFilmCards} from '../../mocks/films';
import {playerData} from '../../mocks/player';
import {tabData} from '../../mocks/tabProps';

const initialState = {
  activeGenre: '',
  filmCardData: catalogFilmCards,
  playerData: playerData,
  tabData: tabData,
};
export const getFilmsByGenre = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.activeGenre = action.payload;
  });
});
