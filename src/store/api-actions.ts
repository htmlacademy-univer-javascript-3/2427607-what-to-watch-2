import {Film, FilmCards, Comment} from '../types/film';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts';
import {
  addCommentById,
  loadCommentsById,
  loadFilmById,
  loadFilms,
  loadSimilarFilms,
  redirectToRoute,
  requireAuth,
  setLoadingStatus
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<FilmCards[]>(APIRoute.Films);
    // return data;
    dispatch(loadFilms(data));
    dispatch(setLoadingStatus(false));
  },
);

export const fetchFilm = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilmById',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmCards[]>(`${APIRoute.Films}/${_arg}`);
      dispatch(loadFilmById(data));
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.Other));
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadSimilarFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmCards[]>(`${APIRoute.Films}/${_arg}${APIRoute.SimilarFilms}`);
    // return data;
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchCommentsById = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${_arg}`);
    // return data;
    dispatch(loadCommentsById({comments: data, id: _arg}));
  },
);

export const addComment = createAsyncThunk<void, {comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.post<FilmCards[]>(`${APIRoute.Comments}/6c84c13e-e4e0-4bcc-bdb0-bd25b1ab5d8d`);
    // return data;
    dispatch(addCommentById({comment: data, id: '6c84c13e-e4e0-4bcc-bdb0-bd25b1ab5d8d'}));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuth(AuthorizationStatus.Auth));
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
    dispatch(requireAuth(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Login));
  },
);
