import {Header} from '../../header';
import {Footer} from '../../footer';
import {FilmList} from '../main-page/film-list';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {getFavoriteFilms} from '../../../store/all-films-data/selectors';

export const MyList = ()=> {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();

  if (!favoriteFilms) {
    dispatch(fetchFavoriteFilms());
  }
  return (
    <div className="user-page">
      <Header classname="user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={favoriteFilms} onlyImage/>
        </div>
      </section>

      <Footer/>
    </div>
  );
};
