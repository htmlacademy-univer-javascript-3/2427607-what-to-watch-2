import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmList} from '../main-page/film-list';

const myFilms = [].slice(0, 9);
export const MyList = ()=> (
  <div className="user-page">
    <Header classname="user-page__head">
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        <FilmList films={myFilms} onlyImage/>
      </div>
    </section>

    <Footer/>
  </div>
);
