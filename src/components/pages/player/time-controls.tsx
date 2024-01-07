import {formatPlayerTime} from '../../../utils/format-time';

export interface TimeControlsProps {
  time: number;
  duration: number;
}

export const TimeControls = ({ time, duration }: TimeControlsProps) => (
  <div className="player__controls-row">
    <div className="player__time">
      <progress className="player__progress" value={time} max={duration?.toString()}></progress>
      <div className="player__toggler" style={{ left: `${time / duration * 100}%` }}>Toggler</div>
    </div>
    <div className="player__time-value">{formatPlayerTime(time, duration)}</div>
  </div>
);
