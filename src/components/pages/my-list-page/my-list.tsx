import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmList} from '../main-page/film-list';
import {useFavoriteFilms} from '../../../hooks/use-favorite-films';
import {RequestPending} from '../../pending-request/pending-request';

export const MyList = ()=> {
  const { favoriteFilms } = useFavoriteFilms();
  return (
    <RequestPending>
      <div className="user-page">
        <Header classname="user-page__head">
          <h1 className="page-title user-page__title">
            My list
            <span className="user-page__film-count">
              {favoriteFilms?.length}
            </span>
          </h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmList films={favoriteFilms} onlyImage/>
        </section>

        <Footer/>
      </div>
    </RequestPending>
  );
};
