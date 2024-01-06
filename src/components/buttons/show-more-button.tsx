import {useAppDispatch, useAppSelector} from '../../hooks';
import {showMoreFilms} from '../../store/all-films-data/all-films-data';
import {getFilmsByGenre, getLength} from '../../store/all-films-data/selectors';

export const ShowMoreButton = () => {
  const currentLength = useAppSelector(getLength);
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const dispatch = useAppDispatch();

  if (currentLength >= filmsByGenre.length) {
    return null;
  }
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(showMoreFilms())}
      >
          Show more
      </button>
    </div>
  );
};
