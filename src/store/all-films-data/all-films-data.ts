import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {FilmCards} from '../../types/film';
import {fetchFilms} from '../api-actions';

type initialState = {
  activeGenre: string;
  films: FilmCards[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: initialState = {
  activeGenre: '',
  films: [],
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
      });
  }
});
