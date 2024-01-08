import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {AppRoute} from '../consts';
import {useAppSelector} from '../hooks';
import {isUserAuth} from '../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const isAuth = useAppSelector(isUserAuth);

  return (
    <>
      {isAuth && props.children}
      {!isAuth && <Navigate to={AppRoute.Login} />}
    </>
  );
};
