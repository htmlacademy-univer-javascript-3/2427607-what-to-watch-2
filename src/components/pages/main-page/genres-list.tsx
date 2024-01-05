import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getActiveGenre, getGenres} from '../../../store/all-films-data/selectors';
import {setSelectedGenre} from '../../../store/all-films-data/all-films-data';

export const GenresList = ()=> {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);
  const genresList = useAppSelector(getGenres);
  const handleGenreChange = (value: string) => {
    if (value !== activeGenre) {
      dispatch(setSelectedGenre(value));
    }
  };
  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li key={genre}
          className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}
        >
          <Link to="#" className="catalog__genres-link"
            onClick={() => handleGenreChange(genre)}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
};
