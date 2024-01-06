import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {Comment, Film, FilmCards} from '../../types/film';
import {
  fetchCommentsById,
  fetchFilm,
  fetchPromoFilm,
  fetchSimilarFilms,
  setIsFavorite
} from '../api-actions';

type initialState = {
  promoFilm?: Film;
  similarFilms: FilmCards[];
  comments: Comment[];
};

const initialState: initialState = {
  similarFilms: [],
  comments: [],
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
