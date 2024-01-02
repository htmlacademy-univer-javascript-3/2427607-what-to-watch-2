import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

export const SignInButton = () => (
  <ul className="user-block">
    <li className="user-block__item">
      <Link
        className="user-block__link"
        to={AppRoute.Login}
      >
          Sign in
      </Link>
    </li>
  </ul>
);
