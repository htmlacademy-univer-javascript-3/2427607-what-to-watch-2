import {useEffect, useState} from 'react';
import {Header} from '../../../header';
import {Footer} from '../../../footer';
import {FilmCardWrap} from '../film-card-wrap';
import {ShowMoreButton} from '../../../buttons/show-more-button';
import {GenresList} from '../genres-list';
import {FilmList} from '../film-list';
import './main-page.css';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {fetchFilm} from '../../../../store/api-actions';
import {Spinner} from '../../../spinner';
import {getFilmsByGenre} from '../../../../mocks/films';

const FILM_ON_ONE_PAGE = 8;
export const MainPage = ()=> {
  const allFilms = useAppSelector((state) => state.updateStore.films);
  const filmData = useAppSelector((state) => state.updateStore.fullFilms[allFilms[0].id]);
  const dispatch = useAppDispatch();
  if (!filmData) {
    dispatch(fetchFilm(allFilms[0].id));
  }
  const [activeGenre, setActiveGenre] = useState({category: 'All genres', genre: 'All genres'});
  const [filmListByGenre, setFilmListByGenre] = useState(allFilms ?? []);
  const [clickCount, setCount] = useState(1);
  useEffect(()=> {
    setFilmListByGenre(getFilmsByGenre(activeGenre.genre, allFilms).slice(0, FILM_ON_ONE_PAGE * clickCount));
  }, [activeGenre.genre, clickCount]);

  if (!filmData){
    return (
      <Spinner />
    );
  }
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header classname="film-card__head"/>
        <FilmCardWrap {...filmData}/>
      </section>

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
    </div>
  );
};
