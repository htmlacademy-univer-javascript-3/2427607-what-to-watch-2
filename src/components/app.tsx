import {MainPage} from './pages/main-page/main/main-page';
import {BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import {SignIn} from './pages/sing-in-page/sign-in';
import {MyList} from './pages/my-list-page/my-list';
import {Player} from './player';
import {MoviePage} from './pages/movie-page/movie-page';
import {AddReview} from './pages/movie-page/add-review';
import {ErrorPage} from './pages/error-page';
import {PrivateRoute} from './private-route';
import {Spinner} from './spinner';
import {useAppSelector} from '../hooks';

export const App = ()=> {
  // const isAuthChecked = useAppSelector((state) => state.updateStore.authorizationStatus === AuthorizationStatus.Auth);
  const isFilmsDataLoading = useAppSelector((state) => !state.updateStore.isLoading);
  if (!isFilmsDataLoading) {
    return (
      <Spinner />
    );
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<MainPage />}/>
          <Route path='login' element={<SignIn/>}/>
          <Route path='mylist' element={
            <PrivateRoute>
              <MyList/>
            </PrivateRoute>
          }
          />
          <Route path='films/:id'>
            <Route index element={<MoviePage />}/>
            <Route path='review' element={<AddReview />}/>
          </Route>
          <Route path='player/:id' element={<Player />}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
