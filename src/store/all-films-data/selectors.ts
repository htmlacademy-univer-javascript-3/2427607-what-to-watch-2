import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {Film, FilmCards} from '../../types/film';

export const getFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].films;
export const getFavoriteFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].favoriteFilms;
export const getPromoFilm = (state: Pick<State, NameSpace.Films>): Film | null => state[NameSpace.Films].promo;
export const getIsLoading = (state: Pick<State, NameSpace.Films>): boolean => state[NameSpace.Films].isLoading;
