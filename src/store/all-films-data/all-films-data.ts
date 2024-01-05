import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../consts';
import {FilmCards, PortionSizes} from '../../types/film';
import {fetchFavoriteFilms, fetchFilms} from '../api-actions';

type initialState = {
  activeGenre: string;
  genres: string[];
  films: FilmCards[];
  filteredFilms: FilmCards[];
  favoriteFilms: FilmCards[];
  hasError: boolean;
};

const initialState: initialState = {
  activeGenre: ALL_GENRES,
  genres: [ALL_GENRES],
  films: [],
  filteredFilms: [],
  favoriteFilms: [],
  hasError: false,
};
export const allFilmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      const filteredFilms =
        action.payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === action.payload);

      return (
        {
          ...state,
          activeGenre: action.payload,
          filteredFilms,
          genres: [ALL_GENRES, ...new Set(action.payload.map(({ genre }) => genre))].slice(0, PortionSizes.Genres)
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
