import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {userProcess} from '../user-process/user-process';
import {filmData} from '../film-data/film-data';
import {allFilmsData} from '../all-films-data/all-films-data';
import {appSlice} from '../app';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: allFilmsData.reducer,
  [NameSpace.App]: appSlice.reducer
});
