import {Header} from '../../header';
import {SmallFilmCard} from '../../small-film-card';
import {CatalogFilmCardProps} from '../../../mocks/types';
import {Footer} from '../../footer';

export const MyList = (props: {myListArray: CatalogFilmCardProps[]})=> (
  <div className="user-page">
    <Header classname="user-page__head">
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        {props.myListArray.map((film) => <SmallFilmCard {...film} key={film.id}/>)}
      </div>
    </section>

    <Footer/>
  </div>
);
