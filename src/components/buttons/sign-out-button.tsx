import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {AppRoute} from '../../consts';
import {useAppDispatch} from '../../hooks';

export const SignOutButton = () => {
  const dispatch = useAppDispatch();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={AppRoute.Login}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
};
