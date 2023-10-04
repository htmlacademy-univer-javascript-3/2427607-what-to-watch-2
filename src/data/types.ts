export type CommonProps = {
  filmCardData: FilmCardProps;
  catalogFilmCards: CatalogFilmCardProps[];
}

export type Image = {
  src: string;
  alt: string;
}

export type FilmCardProps = {
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
