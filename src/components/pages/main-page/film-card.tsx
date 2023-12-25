import {Link} from 'react-router-dom';
import {VideoPreview} from '../../video-preview';
import {FilmCards} from '../../../types/film';

type SmallFilmProps = {
  filmData: FilmCards;
  onMouseOver: (film: FilmCards) => void;
  onMouseOut: (film: FilmCards) => void;
  isActive: boolean;
}
export const FilmCard = (props: SmallFilmProps)=> (
  <article
    className="small-film-card catalog__films-card"
    onMouseOver={() => props.onMouseOver(props.filmData)}
    onMouseOut={() => props.onMouseOut(props.filmData)}
  >
    <div className="small-film-card__image">
      <VideoPreview
        src={props.filmData.previewVideoLink}
        poster={props.filmData.previewImage}
        isActive={props.isActive}
        name={props.filmData.title}
      />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.filmData.id}`}>{props.filmData.title}</Link>
    </h3>
  </article>
);
