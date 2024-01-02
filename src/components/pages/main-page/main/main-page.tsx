import {useEffect, useState} from 'react';
import {Header} from '../../../header';
import {Footer} from '../../../footer';
import {FilmCardWrap} from '../film-card-wrap';
import {ShowMoreButton} from '../../../buttons/show-more-button';
import {GenresList} from '../genres-list';
import {FilmList} from '../film-list';
import {getFilmsByGenre} from '../../../../mocks/films';
import './main-page.css';
import {useAppSelector} from '../../../../hooks';

const FILM_ON_ONE_PAGE = 8;
export const MainPage = ()=> {
  const filmData = useAppSelector((state) => state.updateStore.filmCardData);
  const [activeGenre, setActiveGenre] = useState({category: 'All genres', genre: 'All genres'});
  const [filmListByGenre, setFilmListByGenre] = useState([]);
  const [clickCount, setCount] = useState(1);
  useEffect(()=> {
    setFilmListByGenre(getFilmsByGenre(activeGenre.genre).slice(0, FILM_ON_ONE_PAGE * clickCount));
  }, [activeGenre, clickCount]);

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
