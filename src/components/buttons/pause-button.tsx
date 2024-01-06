export const PauseButton = (props: {handleClick?: () => void}) => (
  <button type="button" className="player__play" onClick={props.handleClick}>
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause"></use>
    </svg>
    <span>Pause</span>
  </button>
);
