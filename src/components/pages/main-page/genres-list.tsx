import {Link} from 'react-router-dom';
import {genresList} from '../../../types/genres-list';

type GenresListProps = {
  activeGenre: string;
  setActiveGenre: (item: {
    category: string;
    genre: string;
  }) => void;
}
export const GenresList = (props: GenresListProps)=> (
  <ul className="catalog__genres-list">
    {genresList.map((item) => (
      <li key={item.genre} className={`catalog__genres-item ${item.category === props.activeGenre ? 'catalog__genres-item--active' : ''}`}>
        <Link to="#" className="catalog__genres-link" onClick={() => props.setActiveGenre(item)}>{item.category}</Link>
      </li>))}
  </ul>
);
