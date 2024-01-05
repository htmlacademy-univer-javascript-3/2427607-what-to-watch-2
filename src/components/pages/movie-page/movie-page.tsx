import {Footer} from '../../footer';
import {PlayButton} from '../../buttons/play-button';
import {AddToListButton} from '../../buttons/add-to-list-button';
import {Header} from '../../header';
import {Tabs} from '../../tabs';
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {MemoizedDetails} from './tabs/details';
import {MemoizedOverview} from './tabs/overview';
import {MemoizedReviews} from './tabs/reviews';
import {FilmList} from '../main-page/film-list';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchFilm, fetchSimilarFilms} from '../../../store/api-actions';
import {Film} from '../../../types/film';
import {Spinner} from '../../spinner';
import {getFilm, getSimilarFilms} from '../../../store/film-data/selectors';
import {isUserAuth} from '../../../store/user-process/selectors';
import {ErrorPage} from '../error-page';

export const MoviePage = () => {
  const {id} = useParams();
  const isAuth = useAppSelector(isUserAuth);
  const filmData: Film | null = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchFilm(id));
    dispatch(fetchSimilarFilms(id));
  }, [id]);
  const moreFilms = (similarFilms ?? []).slice(0,4);

  if (!id) {
    return (
      <ErrorPage/>
    );
  }

  if (!filmData) {
    return (
      <Spinner />
    );
  }

  const getContentByType = () => {
    switch (activeTab) {
      case 1: return (
        <MemoizedDetails
          director={filmData.director}
          runTime={filmData.runTime}
          genre={filmData.genre}
          released={filmData.released}
          starring={filmData.starring}
        />
      );
      case 2: return (
        <MemoizedReviews id={id} />
      );
      default: return (
        <MemoizedOverview
          description={filmData.description}
          director={filmData.director}
          starring={filmData.starring}
          rating={filmData.rating}
          scoresCount={filmData.scoresCount}
          ratingDescription='Good'
        />
      );
    }
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData.backgroundImage} alt={filmData.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header classname="film-card__head"/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title"> {filmData.name} </h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton className="btn btn--play film-card__button"/>
                <AddToListButton/>
                {isAuth && <Link to='review' className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData.posterImage} alt={filmData.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
              { getContentByType() }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmList films={moreFilms} onlyImage/>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
};
