import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {Comment, Film, FilmCards} from '../../types/film';
import {
  addComment,
  fetchCommentsById,
  fetchFilm,
  fetchPromoFilm,
  fetchSimilarFilms,
  setIsFavorite
} from '../api-actions';
import {PlayerProps} from '../../types/player';
import {playerData} from '../../mocks/player';

type initialState = {
  promoFilm?: Film;
  similarFilms: FilmCards[];
  comments: Comment[];
  playerData: PlayerProps;
};

const initialState: initialState = {
  similarFilms: [],
  comments: [],
  playerData: playerData
};
export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.promoFilm = undefined;
      })
      .addCase(fetchCommentsById.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (!state.comments) {
          state.comments = [action.payload];
        } else {
          state.comments.push(action.payload);
        }
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(setIsFavorite.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
