import { AddToListButton} from '../../buttons/add-to-list-button';
import {PlayButton} from '../../buttons/play-button';
import {Film} from '../../../types/film';

export const FilmCardWrap = (props: Film & {favLength?: number})=> (
  <div className="film-card__wrap">
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={props.posterImage} alt={`${props.name}_poster`} width="218"
          height="327"
        />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{props.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{props.genre}</span>
          <span className="film-card__year">{props.released}</span>
        </p>

        <div className="film-card__buttons">
          <PlayButton className="btn btn--play film-card__button" id={props.id}/>
          <AddToListButton favLength={props.favLength}/>
        </div>
      </div>
    </div>
  </div>
);
