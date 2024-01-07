import {Link, useNavigate} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {AppRoute} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUserAvatar} from '../../store/user-process/selectors';

export const SignOutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = useAppSelector(getUserAvatar);
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={() => navigate(AppRoute.MyList)}>
          <img src={url} alt="User avatar" width="63" height="63"/>
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
