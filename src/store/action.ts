import {createAction} from '@reduxjs/toolkit';
import {Film, FilmCards, Comment} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../consts';

export const setGenre = createAction<string>('data/setGenre');

export const loadFilms = createAction<FilmCards[]>('data/loadFilms');
export const loadSimilarFilms = createAction<{films: FilmCards[]; id: string}>('data/loadSimilarFilms');

export const loadFilmById = createAction<Film>('data/loadFilmById');

export const loadCommentsById = createAction<{comments: Comment[]; id: string}>('data/loadComments');
export const addCommentById = createAction<{comment: Comment; id: string}>('data/addComment');

export const requireAuth = createAction<AuthorizationStatus>('user/checkAuth');

export const setLoadingStatus = createAction<boolean>('data/loading');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
