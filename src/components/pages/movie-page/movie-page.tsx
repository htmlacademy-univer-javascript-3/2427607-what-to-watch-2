import {Footer} from '../../footer';
import {PlayButton} from '../../buttons/play-button';
import {AddToListButton} from '../../buttons/add-to-list-button';
import {Header} from '../../header';
import {Tabs} from '../../tabs';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {MemoizedDetails} from './tabs/details';
import {MemoizedOverview} from './tabs/overview';
import {Reviews} from './tabs/reviews';
import {FilmList} from '../main-page/film-list';
import {useAppSelector} from '../../../hooks';
import {isUserAuth} from '../../../store/user-process/selectors';
import {useFavoriteFilms} from '../../../hooks/use-favorite-films';
import {RequestPending} from '../../pending-request/pending-request';
import {useSelectedFilm} from '../../../hooks/use-selected-film';

export const MoviePage = () => {
  const { favoriteFilms } = useFavoriteFilms();
  const isAuth = useAppSelector(isUserAuth);
  const { filmData, moreFilms, comments } = useSelectedFilm({
    shouldLoadReviews: true,
    shouldLoadSuggestions: true
  });
  const [activeTab, setActiveTab] = useState(0);

  const getContentByType = () => {
    if (!filmData){
      return;
    }
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
        <Reviews comments={comments}/>
      );
      default: return (
        <MemoizedOverview
          description={filmData.description}
          director={filmData.director}
          starring={filmData.starring}
          rating={filmData.rating}
          scoresCount={filmData.scoresCount}
        />
      );
    }
  };

  return (
    <RequestPending>
      <>
        {filmData && (
          <section className="film-card film-card--full">
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={filmData.backgroundImage} alt={filmData.name}/>
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header classname="film-card__head"/>

              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{filmData.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{filmData.genre}</span>
                    <span className="film-card__year">{filmData.released}</span>
                  </p>

                  <div className="film-card__buttons">
                    <PlayButton className="btn btn--play film-card__button" id={filmData.id}/>
                    <AddToListButton favLength={favoriteFilms?.length}/>
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
                  <Tabs activeTab={activeTab} onSetActiveTab={setActiveTab}/>
                  { filmData && getContentByType() }
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <FilmList films={moreFilms} onlyImage/>
            </div>
          </section>

          <Footer/>
        </div>
      </>
    </RequestPending>
  );
};
