import {State} from '../../types/state';
import {NameSpace} from '../../consts';
import {FilmCards} from '../../types/film';

export const getFilms = (state: Pick<State, NameSpace.Films>): FilmCards[] => state[NameSpace.Films].films;
export const getIsLoading = (state: Pick<State, NameSpace.Films>): boolean => state[NameSpace.Films].isLoading;
