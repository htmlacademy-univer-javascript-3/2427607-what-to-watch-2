import {MainPage} from './pages/main-page/main/main-page';
import {Route, Routes, Outlet } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {SignIn} from './pages/sing-in-page/sign-in';
import {MyList} from './pages/my-list-page/my-list';
import {Player} from './player';
import {MoviePage} from './pages/movie-page/movie-page';
import {AddReview} from './pages/movie-page/add-review';
import {ErrorPage} from './pages/error-page';
import {PrivateRoute} from './private-route';
import {Spinner} from './spinner';
import {useAppSelector} from '../hooks';
import {AppRoute, AuthorizationStatus} from '../consts';

export const App = ()=> {
  const authorizationStatus = useAppSelector((state) => state.updateStore.authorizationStatus);
  const isAuthChecked = authorizationStatus !== AuthorizationStatus.Unknown;
  const isFilmsDataLoading = useAppSelector((state) => state.updateStore.isLoading);
  const allFilms = useAppSelector((state) => state.updateStore.films);
  if (isFilmsDataLoading || !isAuthChecked) {
    return (
      <Spinner />
    );
  }
  return(
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Outlet/>}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoute.Login} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage id={allFilms[0]?.id ?? ''}/>}/>
            <Route path={AppRoute.Review} element={<AddReview />}/>
          </Route>
          <Route path={AppRoute.Player} element={<Player />}/>
        </Route>
        <Route path={AppRoute.Other} element={<ErrorPage/>}/>
      </Routes>
    </HelmetProvider>
  );
};
