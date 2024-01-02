import {Logo} from './logo';
import {SignOutButton} from './buttons/sign-out-button';
import {PropsWithChildren} from 'react';
import {useAppSelector} from '../hooks';
import {AuthorizationStatus} from '../consts';
import {SignInButton} from './buttons/sign-in-button';

type HeaderProps = PropsWithChildren<{
  classname?: string;
}>
export const Header = (props: HeaderProps)=> {
  const authorizationStatus = useAppSelector((state) => state.updateStore.authorizationStatus);
  const isAuthChecked = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <header className={`page-header ${props.classname || ''}`}>
      <Logo/>
      {props.children}
      {isAuthChecked ? <SignOutButton/> : <SignInButton/>}
    </header>
  );
};
