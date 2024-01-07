import {store} from '../store';
import {AuthorizationStatus} from '../consts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string;
  name: string;
  email: string;
  token: string;
};
