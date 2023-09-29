import {Header} from '../Header';
import {Footer} from '../Footer';
import {FilmCard} from './FilmCard';
import {ShowMoreButton} from '../buttons/ShowMoreButton';
import {CatalogGenresList} from './CatalogGenresList';
import {CatalogFilmsList} from './CatalogFilmsList';
import {CommonProps} from '../data/types';

export const MainPage = (data: {props: CommonProps})=>(
  <div>
    <section className="film-card">
      <Header props={data.props.filmCardData.bgImage}/>
      <FilmCard props={data.props.filmCardData}/>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenresList />

        <CatalogFilmsList films={data.props.catalogFilmCards}/>

        <ShowMoreButton/>
      </section>

      <Footer/>
    </div>
  </div>
);
