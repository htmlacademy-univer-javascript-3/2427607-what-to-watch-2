import {CatalogFilmsCard} from './CatalogFilmsCard';
import {CatalogFilmCardProps} from '../data/types';

export const CatalogFilmsList = (props: {films: CatalogFilmCardProps[]}) => (
  <div className="catalog__films-list">
    {props.films.map((film) =>
      <CatalogFilmsCard key={film.id} image={film.image} title={film.title} id={film.id}/>)}
  </div>
);
