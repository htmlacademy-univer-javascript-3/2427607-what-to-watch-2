import {PlayButton} from '../../buttons/play-button';
import {useCallback, useRef, useState} from 'react';
import {useSelectedFilm} from '../../../hooks/use-selected-film';
import {PauseButton} from '../../buttons/pause-button';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../consts';
import {TimeControls} from './time-controls';
import {RequestPending} from '../../pending-request/pending-request';

interface CrossBrowserDocument {
  exitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
  fullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  webkitFullscreenElement?: Element | null;
  msFullscreenElement?: Element | null;
}

interface CrossBrowserElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullscreen?: () => Promise<void>;
}
export const Player = () => {
  const containerRef = useRef<CrossBrowserElement>(null);
  const playerRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const { filmData } = useSelectedFilm({});
  const navigate = useNavigate();
  function handlePlay() {
    playerRef.current?.play();
    setIsPlaying(true);
  }

  function handlePause() {
    playerRef.current?.pause();
    setIsPlaying(false);
  }

  const handleTimeUpdate = useCallback(() => {
    setTime(Number(playerRef.current?.currentTime));
  }, []);

  const isFullscreen = (): Element | null | undefined => {
    const crossBrowserDocument = document as unknown as CrossBrowserDocument;
    return crossBrowserDocument.fullscreenElement ||
      crossBrowserDocument.mozFullScreenElement ||
      crossBrowserDocument.webkitFullscreenElement ||
      crossBrowserDocument.msFullscreenElement;
  };
  const exitFullScreen = (): void => {
    const crossBrowserDocument = document as unknown as CrossBrowserDocument;
    if (crossBrowserDocument.exitFullscreen) {
      crossBrowserDocument.exitFullscreen();
    } else if (crossBrowserDocument.mozCancelFullScreen) {
      crossBrowserDocument.mozCancelFullScreen();
    } else if (crossBrowserDocument.webkitExitFullscreen) {
      crossBrowserDocument.webkitExitFullscreen();
    } else if (crossBrowserDocument.msExitFullscreen) {
      crossBrowserDocument.msExitFullscreen();
    }
  };
  const enterFullScreen = (): void => {
    containerRef.current?.requestFullscreen?.();
    containerRef.current?.mozRequestFullscreen?.();
    containerRef.current?.webkitRequestFullscreen?.();
    containerRef.current?.msRequestFullscreen?.();
  };

  const handleFullScreenToggle = () => {
    if (isFullscreen()) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  return (
    <RequestPending>
      <div className="player" ref={containerRef}>
        {filmData && (
          <>
            <video
              src={filmData.videoLink}
              className="player__video"
              poster={filmData.posterImage}
              ref={playerRef}
              onTimeUpdate={handleTimeUpdate}
            >
            </video>

            <button
              type="button"
              className="player__exit"
              onClick={() => navigate(AppRoute.Film.replace(':id', filmData.id))}
            >
            Exit
            </button>

            <div className="player__controls">
              {playerRef.current && <TimeControls time={time} duration={Number(playerRef.current.duration)}/>}

              <div className="player__controls-row">
                {isPlaying ?
                  <PauseButton handleClick={handlePause}/>
                  : <PlayButton className="player__play" handleClick={handlePlay}/>}
                <div className="player__name">{filmData.name}</div>

                <button type="button" className="player__full-screen" onClick={handleFullScreenToggle}>
                  <svg viewBox="0 0 27 27" width="27" height="27">
                    <use xlinkHref="#full-screen"></use>
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </RequestPending>
  );
};
