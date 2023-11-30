import {PlayerProps} from './player';
import {TabProps} from './tabProps';

export type CommonProps = {
  filmCardData: FilmCards;
  catalogFilmCards: FilmCards[];
  playerData: PlayerProps;
  tabData: TabProps;
}

export type FilmCards = {
  id: number;
  title: string;
  previewImage: string;
  previewVideoLink: string;
  genre?: string;
  year?: number;
  bgImage?: string;
};
