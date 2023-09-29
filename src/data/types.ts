export type CommonProps = {
  filmCardData: FilmCardProps;
  catalogFilmCards: CatalogFilmCardProps[];
}

export type Image = {
  src: string;
  alt: string;
}

export type FilmCardProps = {
  bgImage: Image;
  posterImage: Image;
  title: string;
  genre: string;
  year: number;
}

export type CatalogFilmCardProps = {
  image: Image;
  title: string;
};
