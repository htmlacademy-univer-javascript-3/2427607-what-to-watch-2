import {Header} from '../../header';
import {FilmCardProps} from '../../../mocks/types';
import {Link} from 'react-router-dom';
import {ReviewForm} from './review-form';

export const AddReview = (props: FilmCardProps)=> (
  <section className="film-card film-card--full">
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={props.bgImage} alt={props.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`/films/${props.id}/`} className="breadcrumbs__link"> {props.title} </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to="#" className="breadcrumbs__link">Add review</Link>
            </li>
          </ul>
        </nav>
      </Header>

      <div className="film-card__poster film-card__poster--small">
        <img src={props.posterImage} alt={`${props.title}_poster`} width="218" height="327"/>
      </div>
    </div>

    <ReviewForm/>

  </section>
);
