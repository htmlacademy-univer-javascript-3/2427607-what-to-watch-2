import {Header} from '../../header';
import {Link} from 'react-router-dom';
import {ReviewForm} from './review-form';
import {useAppSelector} from '../../../hooks';

export const AddReview = ()=> {
  const filmData = useAppSelector((state) => state.updateStore.filmCardData);
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
          <img src={filmData.previewImage} alt={`${filmData.name}_poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
};
