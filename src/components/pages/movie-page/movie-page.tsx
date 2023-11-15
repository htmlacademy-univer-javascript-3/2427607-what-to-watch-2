import {Footer} from '../../footer';
import {PlayButton} from '../../buttons/play-button';
import {AddToListButton} from '../../buttons/add-to-list-button';
import {Header} from '../../header';
import {NavPanel} from '../../nav-panel';
import {CatalogFilmCardProps, FilmCardProps} from '../../../mocks/types';
import {SmallFilmCard} from '../../small-film-card';
import {Link} from 'react-router-dom';

type MoviePageType = FilmCardProps & {
  moreFilms: CatalogFilmCardProps[];
}
export const MoviePage = (props: MoviePageType) => (
  <div>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={props.bgImage} alt={props.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header classname="film-card__head"/>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title"> {props.title} </h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{props.genre}</span>
              <span className="film-card__year">{props.year}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton className="btn btn--play film-card__button"/>
              <AddToListButton />
              <Link to='review' className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={props.posterImage} alt={`${props.title} poster`} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <NavPanel />

            <div className="film-rating">
              <div className="film-rating__score">8,9</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">240 ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
              </p>

              <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the
                sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously,
                Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
              </p>

              <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

              <p className="film-card__starring">
                <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                and other
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          {props.moreFilms.map((film) => <SmallFilmCard {...film} key={film.id}/>)}
        </div>
      </section>

      <Footer />
    </div>
  </div>
);
