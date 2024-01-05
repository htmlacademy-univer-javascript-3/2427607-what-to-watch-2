import {useEffect, useState} from 'react';
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
import {getFilmsByGenre} from '../../../../store/all-films-data/selectors';
import {getFilm} from '../../../../store/film-data/selectors';
import {RequestPending} from '../../../pending-request/pending-request';
import {PortionSizes} from '../../../../types/film';

export const MainPage = ()=> {
  const { favoriteFilms } = useFavoriteFilms();
  const filmData = useAppSelector(getFilm);
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);
  const [clickCount, setCount] = useState(1);

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

            <FilmList films={filmsByGenre}/>

            <div className={filmsByGenre?.length < clickCount * PortionSizes.FilmList ? 'non_visible' : ''}>
              <ShowMoreButton setCount={() => setCount(clickCount + 1)}/>
            </div>
          </section>

          <Footer/>
        </div>
      </>
    </RequestPending>
  );
};
