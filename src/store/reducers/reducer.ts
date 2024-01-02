import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, requireAuth, setGenre, setLoadingStatus} from '../action';
import {playerData} from '../../mocks/player';
import {tabData} from '../../mocks/tabProps';
import {AuthorizationStatus} from '../../consts';
import {filmCardData} from '../../mocks/films';

const initialState = {
  activeGenre: '',
  films: [],
  filmCardData: filmCardData,
  isLoading: false,
  playerData: playerData,
  tabData: tabData,
  authorizationStatus: AuthorizationStatus.Unknown,
};
export const getFilmsByGenre = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.activeGenre = action.payload;
  })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});
