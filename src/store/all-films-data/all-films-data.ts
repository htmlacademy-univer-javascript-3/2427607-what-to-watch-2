import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {Film, FilmCards} from '../../types/film';
import {fetchFavoriteFilms, fetchFilms, fetchPromoFilm} from '../api-actions';

type initialState = {
  activeGenre: string;
  films: FilmCards[];
  favoriteFilms: FilmCards[];
  promo: Film | null;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: initialState = {
  activeGenre: '',
  films: [],
  favoriteFilms: [],
  promo: null,
  isLoading: false,
  hasError: false,
};
export const allFilmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase(setGenre, (state, action) => {
      //   state.activeGenre = action.payload;
      // })
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});
