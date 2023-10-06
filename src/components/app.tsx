import {MainPage} from './pages/main-page/main-page';
import {CommonProps} from '../data/types';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from './pages/sing-in-page/sign-in';
import {MyList} from './my-list';
import {Player} from './player';
import {MoviePage} from './pages/movie-page/movie-page';
import {AddReview} from './pages/movie-page/add-review';
import {ErrorPage} from './pages/error-page';
import {PrivateRoute} from './private-route';

export const App = (props: CommonProps)=> (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<MainPage filmCardData={props.filmCardData} catalogFilmCards={props.catalogFilmCards} />} />
        <Route path='login' element={<SignIn />}/>
        <Route path='mylist' element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path='films/:id' element={<MoviePage />} >
          <Route path='review' element={<AddReview />} />
        </Route>
        <Route path='player/:id' element={<Player />} />
      </Route>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </BrowserRouter>
);
