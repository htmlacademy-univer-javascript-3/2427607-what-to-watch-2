import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmCardWrap} from './film-card-wrap';
import {ShowMoreButton} from '../../buttons/show-more-button';
import {GenresList} from './genres-list';
import {FilmList} from './film-list';
import {FilmCards} from '../../types/film';

type MainPageProps = {
  filmCardData: FilmCards;
  catalogFilmCards: FilmCards[];
};

export const MainPage = (props: MainPageProps)=>(
  <div>
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.filmCardData.bgImage} alt={props.filmCardData.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header classname="film-card__head"/>
      <FilmCardWrap {...props.filmCardData}/>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <FilmList films={props.catalogFilmCards} onlyImage={false}/>

        <ShowMoreButton/>
      </section>

      <Footer/>
    </div>
  </div>
);
