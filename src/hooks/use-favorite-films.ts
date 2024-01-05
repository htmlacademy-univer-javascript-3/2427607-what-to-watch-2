import { useAppDispatch, useAppSelector } from './index.ts';
import { useEffect } from 'react';
import {fetchFavoriteFilms} from '../store/api-actions';
import {getFavoriteFilms} from '../store/all-films-data/selectors';
import {isUserAuth} from '../store/user-process/selectors';

export function useFavoriteFilms() {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isAuth = useAppSelector(isUserAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [dispatch, isAuth]);

  return { favoriteFilms };
}
