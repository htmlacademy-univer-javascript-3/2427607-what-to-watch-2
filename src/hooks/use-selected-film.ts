import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './index.ts';
import {RequestError} from '../types/api';
import {PortionSizes} from '../types/film';
import {NOT_FOUND_MESSAGE, NOT_FOUND_URL} from '../consts';
import {getComments, getFilm, getSimilarFilms} from '../store/film-data/selectors';
import {fetchCommentsById, fetchFilm, fetchSimilarFilms} from '../store/api-actions';

type UseSelectedFilmParams = {
  shouldLoadSuggestions?: boolean;
  shouldLoadReviews?: boolean;
}

export function useSelectedFilm({ shouldLoadSuggestions = false, shouldLoadReviews = false }: UseSelectedFilmParams) {
  const { id = '' } = useParams();
  const filmData = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const comments = useAppSelector(getComments);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilm(id))
      .unwrap()
      .catch((error: RequestError) => {
        if (error?.message === NOT_FOUND_MESSAGE) {
          navigate(NOT_FOUND_URL);
        }
      });
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (shouldLoadSuggestions) {
      dispatch(fetchSimilarFilms(id));
    }
  }, [dispatch, id, shouldLoadSuggestions]);

  useEffect(() => {
    if (shouldLoadReviews) {
      dispatch(fetchCommentsById(id));
    }
  }, [dispatch, id, shouldLoadReviews]);

  return { filmData, moreFilms: similarFilms?.slice(0, PortionSizes.Favorites), comments };
}
