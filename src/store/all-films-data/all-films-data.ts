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
  filmListLength: number;
  filmListPortion: FilmCards[];
};

const initialState: initialState = {
  activeGenre: ALL_GENRES,
  genres: [ALL_GENRES],
  films: [],
  filmsByGenre: [],
  favoriteFilms: [],
  hasError: false,
  filmListLength: PortionSizes.FilmList,
  filmListPortion: []
};
export const allFilmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    resetLength: (state) => {
      state.filmListLength = PortionSizes.FilmList;
      state.filmListPortion = state.filmsByGenre.slice(0, PortionSizes.FilmList);
    },
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
          filmListLength: PortionSizes.FilmList,
          filmListPortion: filmsByGenre.slice(0, PortionSizes.FilmList)
        }
      );
    },
    showMoreFilms: (state) => {
      const newLength = state.filmListLength + PortionSizes.FilmList;

      return (
        {
          ...state,
          filmListLength: newLength,
          filmListPortion: state.filmsByGenre.slice(0, newLength)
        }
      );
    }
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
        state.filmListPortion = action.payload.slice(0, PortionSizes.FilmList);
        state.filmListLength = PortionSizes.FilmList;
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
export const { setSelectedGenre, showMoreFilms, resetLength } = allFilmsData.actions;
