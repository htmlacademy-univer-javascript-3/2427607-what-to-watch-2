import {useAppDispatch, useAppSelector} from '../../hooks';
import {isUserAuth} from '../../store/user-process/selectors';
import {getFilm} from '../../store/film-data/selectors';
import {useNavigate} from 'react-router-dom';
import {fetchFavoriteFilms, setIsFavorite} from '../../store/api-actions';
import {AppRoute} from '../../consts';

export const AddToListButton = (props: {favLength?: number})=> {
  const isAuth = useAppSelector(isUserAuth);
  const filmData = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleStatusToggle() {
    dispatch(setIsFavorite({ filmId: String(filmData?.id), status: Number(!filmData?.isFavorite) }))
      .unwrap()
      .then(() => dispatch(fetchFavoriteFilms()));
  }

  function handleClick() {
    if (isAuth) {
      handleStatusToggle();
    } else {
      navigate(AppRoute.Login);
    }
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {filmData?.isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{Number(props.favLength)}</span>
    </button>);
};
