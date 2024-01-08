import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {AppRoute, AuthorizationStatus} from '../consts';
import {useAppSelector} from '../hooks';
import {getAuthStatus} from '../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <>
      {authStatus === AuthorizationStatus.Auth && props.children}
      {authStatus === AuthorizationStatus.NoAuth && <Navigate to={AppRoute.Login} />}
    </>
  );
};
