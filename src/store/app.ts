import {
  checkAuthAction, clearRequestCount, fetchCommentsById,
  fetchFavoriteFilms,
  fetchFilm, fetchFilms,
  fetchPromoFilm, fetchSimilarFilms,
  loginAction,
  logoutAction,
  setIsFavorite
} from './api-actions';
import {createSlice} from '@reduxjs/toolkit';

type AppSliceState = {
  pendingRequestsCount: number;
}

export const initialState: AppSliceState = {
  pendingRequestsCount: 0,
};

function increaseCount(state: AppSliceState) {
  state.pendingRequestsCount++;
}

function decreaseCount(state: AppSliceState) {
  state.pendingRequestsCount--;
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder.addCase(fetchFilm.pending, increaseCount);
      builder.addCase(fetchFilm.fulfilled, decreaseCount);
      builder.addCase(fetchPromoFilm.pending, increaseCount);
      builder.addCase(fetchPromoFilm.fulfilled, decreaseCount);
      builder.addCase(fetchFilms.pending, increaseCount);
      builder.addCase(fetchFilms.fulfilled, decreaseCount);
      builder.addCase(fetchSimilarFilms.pending, increaseCount);
      builder.addCase(fetchSimilarFilms.fulfilled, decreaseCount);
      builder.addCase(fetchCommentsById.pending, increaseCount);
      builder.addCase(fetchCommentsById.fulfilled, decreaseCount);
      builder.addCase(checkAuthAction.pending, increaseCount);
      builder.addCase(checkAuthAction.fulfilled, decreaseCount);
      builder.addCase(checkAuthAction.rejected, decreaseCount);
      builder.addCase(logoutAction.pending, increaseCount);
      builder.addCase(logoutAction.fulfilled, decreaseCount);
      builder.addCase(loginAction.pending, increaseCount);
      builder.addCase(loginAction.fulfilled, decreaseCount);
      builder.addCase(loginAction.rejected, decreaseCount);
      builder.addCase(setIsFavorite.pending, increaseCount);
      builder.addCase(setIsFavorite.fulfilled, decreaseCount);
      builder.addCase(setIsFavorite.rejected, decreaseCount);
      builder.addCase(fetchFavoriteFilms.pending, increaseCount);
      builder.addCase(fetchFavoriteFilms.fulfilled, decreaseCount);
      builder.addCase(clearRequestCount.fulfilled, (state) => {
        state.pendingRequestsCount = 0;
      });
    },
});
