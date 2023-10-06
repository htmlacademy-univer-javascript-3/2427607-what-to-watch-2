import {Image} from '../data/types';
import {Logo} from './logo';

export const Header = (props: Image)=> (
  <div>
    <div className="film-card__bg">
      <img src={props.src} alt={props.alt}/>
    </div>

    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header film-card__head">
      <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  </div>
);
