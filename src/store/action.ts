import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../consts';

// export const setGenre = createAction<string>('data/setGenre');
//
// export const loadFilms = createAction<FilmCards[]>('data/loadFilms');
// export const loadSimilarFilms = createAction<FilmCards>('data/loadSimilarFilms');
//
// export const loadFilmById = createAction<Film>('data/loadFilmById');
//
// export const loadCommentsById = createAction<Comment[]>('data/loadComments');
// export const addCommentById = createAction<Comment>('data/addComment');

// export const requireAuth = createAction<AuthorizationStatus>('user/checkAuth');

// export const setLoadingStatus = createAction<boolean>('data/loading');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
