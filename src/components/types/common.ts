import {FilmCards} from './film';
import {PlayerProps} from './player';
import {TabProps} from './tabs';

export type CommonProps = {
  filmCardData: FilmCards;
  catalogFilmCards: FilmCards[];
  playerData: PlayerProps;
  tabData: TabProps;
}
