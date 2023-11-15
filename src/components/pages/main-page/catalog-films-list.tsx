import {CatalogFilmsCard} from './catalog-films-card';
import {CatalogFilmCardProps} from '../../../mocks/types';
// import {useState} from 'react';

export const CatalogFilmsList = (props: {films: CatalogFilmCardProps[]}) =>
  // const [activeCard, setActiveCard] = useState(props.films[0]);
  // onMouseOver={()=>setActiveCard(film)}
  (
    <div className="catalog__films-list">
      {props.films.map((film) =>
        <CatalogFilmsCard key={film.id} image={film.image} title={film.title} id={film.id}/>)}
    </div>
  );

