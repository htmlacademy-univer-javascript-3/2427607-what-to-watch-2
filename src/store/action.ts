import {createAction} from '@reduxjs/toolkit';
import {FilmCards} from '../types/film';
import {AuthorizationStatus} from '../consts';

export const setGenre = createAction<string>('data/setGenre');

export const loadFilms = createAction<FilmCards[]>('data/loadFilms');

export const requireAuth = createAction<AuthorizationStatus>('user/checkAuth');

export const setLoadingStatus = createAction<boolean>('data/loading');
