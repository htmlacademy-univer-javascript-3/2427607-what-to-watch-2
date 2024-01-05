import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../consts';
import {FilmCards, PortionSizes} from '../../types/film';
import {fetchFavoriteFilms, fetchFilms} from '../api-actions';

type initialState = {
  activeGenre: string;
  genres: string[];
  films: FilmCards[];
  filmsByGenre: FilmCards[];
  favoriteFilms: FilmCards[];
  hasError: boolean;
};

const initialState: initialState = {
  activeGenre: ALL_GENRES,
  genres: [ALL_GENRES],
  films: [],
  filmsByGenre: [],
  favoriteFilms: [],
  hasError: false,
};
export const allFilmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      const filmsByGenre =
        action.payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === action.payload);

      return (
        {
          ...state,
          activeGenre: action.payload,
          filmsByGenre,
        }
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsByGenre = action.payload;
        state.activeGenre = ALL_GENRES;
        state.genres = [ALL_GENRES, ...new Set(action.payload.map(({ genre }) => genre))].slice(0, PortionSizes.Genres);
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
export const { setSelectedGenre } = allFilmsData.actions;
