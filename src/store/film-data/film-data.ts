import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {Comment, Film, FilmCards} from '../../types/film';
import {addComment, fetchCommentsById, fetchFilm, fetchSimilarFilms} from '../api-actions';

type initialState = {
  film: Film | null;
  similarFilms: FilmCards[];
  comments: Comment[];
};

const initialState: initialState = {
  film: null,
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
        state.film = action.payload;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.film = null;
        // dispatch(redirectToRoute(AppRoute.Other));
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
      });
  }
});
