export const PlayButton = (props: {className: string})=> (
  <button className={props.className} type="button">
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </button>);
