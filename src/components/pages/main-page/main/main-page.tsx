import {useEffect, useState} from 'react';
import {Header} from '../../../header';
import {Footer} from '../../../footer';
import {FilmCardWrap} from '../film-card-wrap';
import {ShowMoreButton} from '../../../buttons/show-more-button';
import {GenresList} from '../genres-list';
import {FilmList} from '../film-list';
import './main-page.css';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {fetchPromoFilm} from '../../../../store/api-actions';
import {getFilmsByGenre} from '../../../../mocks/films';
import {getFilms} from '../../../../store/all-films-data/selectors';
import {getFilm} from '../../../../store/film-data/selectors';
import {useFavoriteFilms} from '../../../../hooks/use-favorite-films';
import {RequestPending} from '../../../pending-request/pending-request';

const FILM_ON_ONE_PAGE = 8;
export const MainPage = ()=> {
  const { favoriteFilms } = useFavoriteFilms();
  const allFilms = useAppSelector(getFilms);
  const filmData = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);
  const [activeGenre, setActiveGenre] = useState({category: 'All genres', genre: 'All genres'});
  const [filmListByGenre, setFilmListByGenre] = useState(allFilms ?? []);
  const [clickCount, setCount] = useState(1);
  useEffect(()=> {
    setFilmListByGenre(getFilmsByGenre(activeGenre.genre, allFilms).slice(0, FILM_ON_ONE_PAGE * clickCount));
  }, [activeGenre.genre, clickCount]);

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

            <GenresList activeGenre={activeGenre.category} setActiveGenre={setActiveGenre}/>

            <FilmList films={filmListByGenre}/>

            <div className={filmListByGenre?.length < clickCount * FILM_ON_ONE_PAGE ? 'non_visible' : ''}>
              <ShowMoreButton setCount={() => setCount(clickCount + 1)}/>
            </div>
          </section>

          <Footer/>
        </div>
      </>
    </RequestPending>
  );
};
