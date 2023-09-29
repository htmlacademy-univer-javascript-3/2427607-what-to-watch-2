import { AddToListButton} from '../buttons/AddToList';
import {PlayButton} from '../buttons/Play';
import {FilmCardProps} from '../data/types';

export const FilmCard = (data: {props: FilmCardProps})=> {
  const dataProps = data.props;
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={dataProps.posterImage.src} alt={dataProps.posterImage.alt} width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{dataProps.title}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{dataProps.genre}</span>
            <span className="film-card__year">{dataProps.year}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton/>
            <AddToListButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
