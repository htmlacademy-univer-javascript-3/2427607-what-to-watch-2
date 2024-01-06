import { useNavigate } from 'react-router-dom';
import { VideoPreview } from '../../video-preview';
import { FilmCards } from '../../../types/film';
import { AppRoute } from '../../../consts';

type SmallFilmProps = {
  filmData: FilmCards;
  onMouseOver: (film: FilmCards) => void;
  onMouseOut: (film: FilmCards) => void;
  isActive: boolean;
}
export const FilmCard = (props: SmallFilmProps)=> {
  const navigate = useNavigate();
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => props.onMouseOver(props.filmData)}
      onMouseOut={() => props.onMouseOut(props.filmData)}
      onClick={() => navigate(AppRoute.Film.replace(':id', props.filmData.id))}
    >
      <div className="small-film-card__image">
        <VideoPreview
          src={props.filmData.previewVideoLink}
          poster={props.filmData.previewImage}
          isActive={props.isActive}
          name={props.filmData.name}
        />
      </div>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">{props.filmData.name}</span>
      </h3>
    </article>
  );
};
