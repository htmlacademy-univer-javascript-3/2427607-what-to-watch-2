import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction('SET_GENRE', (genre: string) => ({
  payload: genre
}));
