import {MainPage} from './pages/main-page/main-page';
import {BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import {SignIn} from './pages/sing-in-page/sign-in';
import {MyList} from './pages/my-list-page/my-list';
import {Player} from './player';
import {MoviePage} from './pages/movie-page/movie-page';
import {AddReview} from './pages/movie-page/add-review';
import {ErrorPage} from './pages/error-page';
import {PrivateRoute} from './private-route';
import {CommonProps} from './types/common';

export const App = (props: CommonProps)=> (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Outlet/>} >
        <Route index element={<MainPage filmCardData={props.filmCardData} catalogFilmCards={props.catalogFilmCards}/>} />
        <Route path='login' element={<SignIn />}/>
        <Route path='mylist' element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path='films/:id'>
          <Route index element={<MoviePage {...props.filmCardData} tabData={props.tabData}/>} />
          <Route path='review' element={<AddReview {...props.filmCardData} />} />
        </Route>
        <Route path='player/:id' element={<Player {...props.playerData}/>} />
      </Route>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </BrowserRouter>
);
