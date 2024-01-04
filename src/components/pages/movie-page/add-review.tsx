import {Header} from '../../header';
import {Link} from 'react-router-dom';
import {ReviewForm} from './review-form';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {Spinner} from '../../spinner';
import {fetchFilm} from '../../../store/api-actions';
import {getFilm} from '../../../store/film-data/selectors';

export const AddReview = ()=> {
  const filmData = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  if (!filmData){
    dispatch(fetchFilm('6c84c13e-e4e0-4bcc-bdb0-bd25b1ab5d8d'));
    return (
      <Spinner />
    );
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmData.id}/`} className="breadcrumbs__link"> {filmData.name} </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmData.posterImage} alt={filmData.name} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
};
