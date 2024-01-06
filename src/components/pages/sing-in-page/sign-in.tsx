import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {Footer} from '../../footer';
import {Logo} from '../../logo';
import {SignInForm} from './sing-in-form';
import {isUserAuth} from '../../../store/user-process/selectors';
import {AppRoute} from '../../../consts';
import {useAppSelector} from '../../../hooks';

export const SignIn = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(isUserAuth);

  useEffect(() => {
    if (isAuth) {
      navigate(AppRoute.Main);
    }
  }, [isAuth, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>

      <Footer/>
    </div>
  );
};
