import {Logo} from './logo';
import {SignOutButton} from './buttons/sign-out-button';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../hooks';
import {SignInButton} from './buttons/sign-in-button';
import {isUserAuth} from '../store/user-process/selectors';

type HeaderProps = PropsWithChildren<{
  classname?: string;
}>
export const Header = (props: HeaderProps)=> {
  const isAuth = useAppSelector(isUserAuth);
  return (
    <header className={`page-header ${props.classname || ''}`}>
      <Logo/>
      {props.children}
      {isAuth ? <SignOutButton/> : <SignInButton/>}
    </header>
  );
};
