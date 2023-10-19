import {PlayerProps} from '../mocks/player';
import {PlayButton} from './buttons/play-button';

export const Player = (props: PlayerProps)=> (
  <div className="player">
    <video src={props.src} className="player__video" poster={props.poster}></video>

    <button type="button" className="player__exit">Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100"></progress>
          <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
        </div>
        <div className="player__time-value">{props.time}</div>
      </div>

      <div className="player__controls-row">
        <PlayButton className="player__play"/>
        <div className="player__name">{props.name}</div>

        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>
);
