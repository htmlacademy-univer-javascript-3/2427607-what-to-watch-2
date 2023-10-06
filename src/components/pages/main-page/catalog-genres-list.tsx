export const CatalogGenresList = ()=> {
  const allGenres: string[] = [
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers',
  ];
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="src/components/index#" className="catalog__genres-link">All genres</a>
      </li>
      {allGenres.map((genre) => (
        <li key={genre} className="catalog__genres-item">
          <a href="src/components/index#" className="catalog__genres-link">{genre}</a>
        </li>))}
    </ul>
  );
};
