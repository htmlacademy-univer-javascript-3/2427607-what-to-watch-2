import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {FilmCards} from '../../types/film';

export const getFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].films;
export const getFilmsByGenre = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].filmsByGenre;
export const getFavoriteFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].favoriteFilms;
export const getActiveGenre = (state: Pick<State, NameSpace.Films>): string => state[NameSpace.Films].activeGenre;
export const getGenres = (state: Pick<State, NameSpace.Films>): string[] => state[NameSpace.Films].genres;
