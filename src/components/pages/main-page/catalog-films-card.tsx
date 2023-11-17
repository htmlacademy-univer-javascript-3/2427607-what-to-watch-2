import {CatalogFilmCardProps} from '../../../mocks/types';
import {Link} from 'react-router-dom';
import {VideoPreview} from '../../video-preview';

type SmallFilmProps = CatalogFilmCardProps & {
  onMouseOver: (film: CatalogFilmCardProps) => void;
  onMouseOut: (film: CatalogFilmCardProps) => void;
  isActive: boolean;
}
export const CatalogFilmsCard = (props: SmallFilmProps)=> (
  <article
    className="small-film-card catalog__films-card"
    onMouseOver={() => props.onMouseOver(props)}
    onMouseOut={() => props.onMouseOut(props)}
  >
    <div className="small-film-card__image">
      <VideoPreview
        src="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
        poster={props.image}
        isActive={props.isActive}
        name={props.title}
      />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.title}</Link>
    </h3>
  </article>
);
