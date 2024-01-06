import {Film, FilmCards, Comment} from '../types/film';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../consts';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {ReviewValues} from "../types/review";

export const fetchFilms = createAsyncThunk<FilmCards[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmCards[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilmById',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${_arg}`);
    return data;
  },
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<FilmCards[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadSimilarFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmCards[]>(`${APIRoute.Films}/${_arg}${APIRoute.SimilarFilms}`);
    return data;
  },
);

export const fetchFavoriteFilms = createAsyncThunk<FilmCards[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmCards[]>(APIRoute.Favorite);
    return data;
  },
);

export const setIsFavorite = createAsyncThunk<Film, { filmId: string; status: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/setIsFavorite',
  async ({ filmId, status }: { filmId: string; status: number }, { extra: api }) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
    return data;
  }
);

export const fetchCommentsById = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${_arg}`);
    return data;
  },
);

// export const addComment = createAsyncThunk<Comment, {comment: string; rating: number; id: string}, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/addComment',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.post<Comment>(`${APIRoute.Comments}/${_arg.id}`, _arg);
//     return data;
//   },
// );

export const addComment = createAsyncThunk<void, ReviewValues & { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/addReview',
  async ({ id, ...requestData }: ReviewValues & { id: string }, { extra: api }) =>
    await api.post(`/comments/${id}`, requestData)
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Login));
  },
);

export const clearRequestCount = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'app/clearRequestCount',
  () => undefined,
);
