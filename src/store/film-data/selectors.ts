import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {Film, FilmCards, Comment} from '../../types/film';

export const getFilm = (state: Pick<State, NameSpace.Film>): Film | null => state[NameSpace.Film].film;
export const getComments = (state: Pick<State, NameSpace.Film>): Comment[] => state[NameSpace.Film].comments;
export const getSimilarFilms = (state: Pick<State, NameSpace.Film>): FilmCards[] => state[NameSpace.Film].similarFilms;
