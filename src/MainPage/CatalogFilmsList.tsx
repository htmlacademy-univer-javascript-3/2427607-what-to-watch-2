import {CatalogFilmsCard} from './CatalogFilmsCard';
import {CatalogFilmCardProps} from '../data/types';

export const CatalogFilmsList = (data: {films: CatalogFilmCardProps[]}) => (
  <div className="catalog__films-list">
    {data.films.map((i) =>
      <CatalogFilmsCard key={i} image={i.image} title={i.title}/>)}
  </div>
);
