import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {FilmCards} from '../../types/film';

export const getFilmsByGenre = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].filmsByGenre;
export const getFilmListPortion = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].filmListPortion;
export const getFavoriteFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].favoriteFilms;
export const getActiveGenre = (state: Pick<State, NameSpace.Films>): string => state[NameSpace.Films].activeGenre;
export const getGenres = (state: Pick<State, NameSpace.Films>): string[] => state[NameSpace.Films].genres;
export const getLength = (state: Pick<State, NameSpace.Films>): number => state[NameSpace.Films].filmListLength;
