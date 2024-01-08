import {AuthorizationStatus, NameSpace} from '../../consts';
import {State} from '../../types/state';

export const getAuthStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const isUserAuth = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const getUserAvatar = (state: Pick<State, NameSpace.User>): string => state[NameSpace.User].avatarUrl;
