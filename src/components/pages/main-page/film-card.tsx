import { AddToListButton} from '../../buttons/AddToList';
import {PlayButton} from '../../buttons/Play';
import {FilmCardProps} from '../../../data/types';

export const FilmCard = (props: FilmCardProps)=> (
  <div className="film-card__wrap">
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={props.posterImage} alt={`${props.title}_poster`} width="218"
          height="327"
        />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{props.title}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{props.genre}</span>
          <span className="film-card__year">{props.year}</span>
        </p>

        <div className="film-card__buttons">
          <PlayButton/>
          <AddToListButton/>
        </div>
      </div>
    </div>
  </div>
);
