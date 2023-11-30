import {FilmCard} from './film-card';
import {useState} from 'react';
import {FilmCards} from '../../../mocks/types';

export const FilmList = (props: {films: FilmCards[]; onlyImage: boolean }) => {
  const [activeFilm, setActiveCard] = useState<FilmCards | null>(null);
  return (
    <div className="catalog__films-list">
      {props.films.map((film) =>
        (
          <FilmCard
            isActive={!props.onlyImage && activeFilm?.id === film.id}
            key={film.id} {...film}
            onMouseOver={() => setActiveCard(film)}
            onMouseOut={() => setActiveCard(null)}
          />
        )
      )}
    </div>
  );
};

