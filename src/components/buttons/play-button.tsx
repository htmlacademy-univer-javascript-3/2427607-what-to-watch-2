import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

export const PlayButton = (props: {className: string; id?: string; handleClick?: () => void})=> (
  <>
    { props.handleClick &&
      <button
        className={props.className}
        type="button"
        onClick={props.handleClick}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button> }

    { props.id &&
      <Link
        className={props.className}
        type="button"
        to={AppRoute.Player.replace(':id', props.id)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>}
  </>);
