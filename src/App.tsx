import {MainPage} from './MainPage/MainPage';
import {CommonProps} from './data/types';

export const App = (data: {props: CommonProps})=> (
  <div>
    <MainPage props={data.props}/>
  </div>
);
