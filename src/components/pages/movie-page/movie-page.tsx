import {Footer} from '../../footer';
import {PlayButton} from '../../buttons/play-button';
import {AddToListButton} from '../../buttons/add-to-list-button';
import {Header} from '../../header';
import {Tabs} from '../../tabs';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Details} from './tabs/details';
import {Overview} from './tabs/overview';
import {Reviews} from './tabs/reviews';
import {getFilmsByGenre} from '../../../mocks/films';
import {FilmList} from '../main-page/film-list';
import {FilmCards} from '../../../types/film';
import {TabProps} from '../../../types/tabs';

export const MoviePage = (props: FilmCards & {tabData: TabProps}) => {
  const [activeTab, setActiveTab] = useState(0);
  const moreFilms = getFilmsByGenre(props.genre).slice(0,4);

  const getContentByType = () => {
    switch (activeTab) {
      case 1: return <Details {...props.tabData.details}/>;
      case 2: return <Reviews reviews={props.tabData.reviews}/>;
      default: return <Overview {...props.tabData.overview}/>;
    }
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={props.bgImage} alt={props.title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header classname="film-card__head"/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title"> {props.title} </h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton className="btn btn--play film-card__button"/>
                <AddToListButton/>
                <Link to='review' className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={props.previewImage} alt={`${props.title} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
              { getContentByType() }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmList films={moreFilms} onlyImage/>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
};
