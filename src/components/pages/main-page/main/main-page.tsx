import {useEffect} from 'react';
import './main-page.css';
import {Header} from '../../../header';
import {Footer} from '../../../footer';
import {FilmCardWrap} from '../film-card-wrap';
import {ShowMoreButton} from '../../../buttons/show-more-button';
import {GenresList} from '../genres-list';
import {FilmList} from '../film-list';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {useFavoriteFilms} from '../../../../hooks/use-favorite-films';
import {fetchPromoFilm} from '../../../../store/api-actions';
import {getFilmListPortion, getFilmsByGenre} from '../../../../store/all-films-data/selectors';
import {getFilm} from '../../../../store/film-data/selectors';
import {RequestPending} from '../../../pending-request/pending-request';
import {resetLength} from '../../../../store/all-films-data/all-films-data';

export const MainPage = ()=> {
  const { favoriteFilms } = useFavoriteFilms();
  const filmData = useAppSelector(getFilm);
  const filmListPortion = useAppSelector(getFilmListPortion);
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);
  useEffect(() => {
    dispatch(resetLength());
  }, [dispatch, filmsByGenre]);

  return (
    <RequestPending>
      <>
        {filmData && (
          <section className="film-card">
            <div className="film-card__bg">
              <img src={filmData.backgroundImage} alt={filmData.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>
            <Header classname="film-card__head"/>
            <FilmCardWrap {...filmData} favLength={favoriteFilms?.length}/>
          </section>
        )}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList/>

            <FilmList films={filmListPortion}/>

            <ShowMoreButton />
          </section>

          <Footer/>
        </div>
      </>
    </RequestPending>
  );
};
