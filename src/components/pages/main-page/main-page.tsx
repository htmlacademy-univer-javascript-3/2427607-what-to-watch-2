import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmCard} from './film-card';
import {ShowMoreButton} from '../../buttons/show-more-button';
import {CatalogGenresList} from './catalog-genres-list';
import {CatalogFilmsList} from './catalog-films-list';
import {CatalogFilmCardProps, FilmCardProps} from '../../../mocks/types';

type MainPageProps = {
  filmCardData: FilmCardProps;
  catalogFilmCards: CatalogFilmCardProps[];
};

export const MainPage = (props: MainPageProps)=>(
  <div>
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.filmCardData.bgImage} alt={props.filmCardData.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header classname="film-card__head"/>
      <FilmCard {...props.filmCardData}/>
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
