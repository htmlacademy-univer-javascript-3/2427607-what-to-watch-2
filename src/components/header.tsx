import {Logo} from './logo';
import {SignOutButton} from './buttons/sign-out-button';
import {PropsWithChildren} from 'react';

type HeaderProps = PropsWithChildren<{
  classname?: string;
}>
export const Header = (props: HeaderProps)=> (
  <header className = {`page-header ${ props.classname || ''}`} >
    <Logo />
    {props.children}
    <SignOutButton/>
  </header>
);
