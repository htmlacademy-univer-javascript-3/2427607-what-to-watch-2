import {Navigate} from 'react-router-dom';
import {JSX} from 'react';
import {AppRoute, AuthorizationStatus} from '../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};
