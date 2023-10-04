import {MainPage} from './MainPage/MainPage';
import {CommonProps} from './data/types';

export const App = (props: CommonProps)=> (
  <div>
    <MainPage filmCardData={props.filmCardData} catalogFilmCards={props.catalogFilmCards} />
  </div>
);
