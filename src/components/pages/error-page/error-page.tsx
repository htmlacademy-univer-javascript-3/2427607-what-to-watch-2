import {Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks';
import {AppRoute} from '../../../consts';
import {clearRequestCount} from '../../../store/api-actions';

export const ErrorPage = ()=> {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleRedirect() {
    dispatch(clearRequestCount())
      .then(() => navigate(AppRoute.Main));
  }
  return (
    <Fragment>
      <h1>
      404.
        <br/>
        <small>Page not found</small>
      </h1>
      <button className="redirect-button" onClick={handleRedirect}>Go to main page</button>
    </Fragment>
  );
};
