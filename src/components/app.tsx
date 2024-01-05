import {MainPage} from './pages/main-page/main/main-page';
import {Route, Routes, Outlet } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {SignIn} from './pages/sing-in-page/sign-in';
import {MyList} from './pages/my-list-page/my-list';
import {VideoPlayer} from './player';
import {MoviePage} from './pages/movie-page/movie-page';
import {AddReview} from './pages/movie-page/add-review';
import {ErrorPage} from './pages/error-page/error-page';
import {PrivateRoute} from './private-route';
import {useAppDispatch} from '../hooks';
import {AppRoute} from '../consts';
import {useEffect} from 'react';
import {checkAuthAction, fetchFilms} from '../store/api-actions';
import {getToken} from '../services/token';

const token = getToken();
export const App = ()=> {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
    if (token) {
      dispatch(checkAuthAction());
    }
  }, [dispatch]);
  return(
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Outlet/>}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoute.Login} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute>
              <MyList/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage />}/>
            <Route path={AppRoute.Review} element={<AddReview />}/>
          </Route>
          <Route path={AppRoute.Player} element={<VideoPlayer />}/>
        </Route>
        <Route path={AppRoute.Other} element={<ErrorPage/>}/>
      </Routes>
    </HelmetProvider>
  );
};
