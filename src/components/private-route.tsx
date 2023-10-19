import {Navigate} from 'react-router-dom';
import {JSX} from 'react';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={'/login'} />;
};