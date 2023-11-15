import {CatalogFilmCardProps} from '../mocks/types';
import {Link} from 'react-router-dom';

export const SmallFilmCard = (props: CatalogFilmCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={props.image} alt={props.title} width="280" height="175"/>
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.title}</Link>
    </h3>
  </article>
);
