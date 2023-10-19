import {PlayerProps} from './player';

export type CommonProps = {
  filmCardData: FilmCardProps;
  catalogFilmCards: CatalogFilmCardProps[];
  myListArray: CatalogFilmCardProps[];
  moreFilms: CatalogFilmCardProps[];
  playerData: PlayerProps;
}

export type FilmCardProps = {
  id: number;
  bgImage: string;
  posterImage: string;
  title: string;
  genre: string;
  year: number;
}

export type CatalogFilmCardProps = {
  id: number;
  image: string;
  title: string;
};
