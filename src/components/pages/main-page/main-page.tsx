import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmCard} from './film-card';
import {ShowMoreButton} from '../../buttons/show-more-button';
import {CatalogGenresList} from './catalog-genres-list';
import {CatalogFilmsList} from './catalog-films-list';
import {CommonProps} from '../../../data/types';

export const MainPage = (props: CommonProps)=>(
  <div>
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.filmCardData.bgImage} alt={props.filmCardData.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header classname="film-card__head"/>
      <FilmCard
        title={props.filmCardData.title}
        bgImage={props.filmCardData.bgImage}
        genre={props.filmCardData.genre}
        year={props.filmCardData.year}
        posterImage={props.filmCardData.posterImage}
      />
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenresList />

        <CatalogFilmsList films={props.catalogFilmCards}/>

        <ShowMoreButton/>
      </section>

      <Footer/>
    </div>
  </div>
);
