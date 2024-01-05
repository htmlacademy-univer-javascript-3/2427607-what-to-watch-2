import {FC} from 'react';
import {useVideoPreview} from '../hooks/use-video-preview';

type PreviewProps = {
  src: string;
  poster: string;
  name: string;
  isActive: boolean;
};
export const VideoPreview: FC<PreviewProps> = ({src, poster, isActive, name}) => {
  const timeout = 1000;
  const isPreviewPlays = useVideoPreview(isActive, timeout);
  return (!isPreviewPlays ? <img src={poster} alt={name} width="280" height="175"/> :
    <video src={src} className="player__video" poster={poster} autoPlay muted/>
  );
};
