import {combineReducers} from '@reduxjs/toolkit';
import {getFilmsByGenre} from './reducer';

export const rootReducer = combineReducers({updateStore: getFilmsByGenre});
