import {Header} from '../Header';
import {Footer} from '../Footer';
import {FilmCard} from './FilmCard';
import {ShowMoreButton} from '../buttons/ShowMoreButton';
import {CatalogGenresList} from './CatalogGenresList';
import {CatalogFilmsList} from './CatalogFilmsList';
import {CommonProps} from '../data/types';

export const MainPage = (props: CommonProps)=>(
  <div>
    <section className="film-card">
      <Header src={props.filmCardData.bgImage} alt={props.filmCardData.title}/>
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
