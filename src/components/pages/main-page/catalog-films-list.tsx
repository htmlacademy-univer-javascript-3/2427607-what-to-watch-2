import {CatalogFilmsCard} from './catalog-films-card';
import {CatalogFilmCardProps} from '../../../mocks/types';
import {useState} from 'react';

export const CatalogFilmsList = (props: {films: CatalogFilmCardProps[]}) => {
  const [activeFilm, setActiveCard] = useState<CatalogFilmCardProps | null>(null);
  return (
    <div className="catalog__films-list">
      {props.films.map((film) =>
        (
          <CatalogFilmsCard
            isActive={activeFilm?.id === film.id}
            key={film.id} image={film.image}
            title={film.title} id={film.id}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
          />
        )
      )}
    </div>
  );
};

