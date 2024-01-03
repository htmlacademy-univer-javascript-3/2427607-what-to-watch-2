import {FilmCard} from './film-card';
import {useState} from 'react';
import {FilmCards} from '../../../types/film';

export const FilmList = (props: {films: FilmCards[]; onlyImage?: boolean }) => {
  const [activeFilmId, setActiveCardId] = useState<string | null>(null);
  return (
    <div className="catalog__films-list">
      {props.films.map((film) =>
        (
          <FilmCard
            isActive={!props.onlyImage && activeFilmId === film.id}
            key={film.id} filmData={film}
            onMouseOver={() => setActiveCardId(film.id)}
            onMouseOut={() => setActiveCardId(null)}
          />
        )
      )}
    </div>
  );
};

