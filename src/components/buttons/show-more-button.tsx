export const ShowMoreButton = (props: {setCount: () => void}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={props.setCount}
    >
      Show more
    </button>
  </div>
);
