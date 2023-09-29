import {CatalogFilmCardProps} from '../data/types';

export const CatalogFilmsCard = (props: CatalogFilmCardProps)=> (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={props.image.src} alt={props.image.alt} width="280" height="175"/>

    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{props.title}</a>
    </h3>
  </article>
);
