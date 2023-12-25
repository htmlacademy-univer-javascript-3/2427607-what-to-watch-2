import {Header} from '../../header';
import {Link} from 'react-router-dom';
import {ReviewForm} from './review-form';
import {FilmCards} from '../../../types/film';

export const AddReview = (props: FilmCards)=> (
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
        <img src={props.previewImage} alt={`${props.title}_poster`} width="218" height="327"/>
      </div>
    </div>

    <ReviewForm/>

  </section>
);
