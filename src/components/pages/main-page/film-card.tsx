import {Link} from 'react-router-dom';
import {VideoPreview} from '../../video-preview';
import {FilmCards} from '../../../mocks/types';

type SmallFilmProps = FilmCards & {
  onMouseOver: (film: FilmCards) => void;
  onMouseOut: (film: FilmCards) => void;
  isActive: boolean;
}
export const FilmCard = (props: SmallFilmProps)=> (
  <article
    className="small-film-card catalog__films-card"
    onMouseOver={() => props.onMouseOver(props)}
    onMouseOut={() => props.onMouseOut(props)}
  >
    <div className="small-film-card__image">
      <VideoPreview
        src={props.previewVideoLink}
        poster={props.previewImage}
        isActive={props.isActive}
        name={props.title}
      />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.title}</Link>
    </h3>
  </article>
);
