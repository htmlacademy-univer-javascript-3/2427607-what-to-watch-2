import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmCardWrap} from './film-card-wrap';
import {ShowMoreButton} from '../../buttons/show-more-button';
import {GenresList} from './genres-list';
import {FilmList} from './film-list';
import {FilmCards} from '../../../types/film';
import {useEffect, useState} from 'react';
import {catalogFilmCards, getFilmsByGenre} from '../../../mocks/films';

export const MainPage = (props: FilmCards)=> {
  const [activeGenre, setActiveGenre] = useState({category: 'All genres', genre: 'All genres'});
  const [filmListByGenre, setFilmListByGenre] = useState(catalogFilmCards);
  useEffect(()=> {
    setFilmListByGenre(getFilmsByGenre(activeGenre.genre));
  }, [activeGenre]);

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.bgImage} alt={props.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header classname="film-card__head"/>
        <FilmCardWrap {...props}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList activeGenre={activeGenre.category} setActiveGenre={setActiveGenre}/>

          <FilmList films={filmListByGenre}/>

          <ShowMoreButton/>
        </section>

        <Footer/>
      </div>
    </div>
  );
};
