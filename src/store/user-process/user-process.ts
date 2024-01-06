import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {AuthorizationStatus, NameSpace} from '../../consts';
import {UserData} from '../../types/user-data';

const initialState: UserProcess = {
  name: '',
  avatarUrl: '',
  email: '',
  token: '',
  authorizationStatus: AuthorizationStatus.Unknown,
};

function authorize(state: UserProcess, action: PayloadAction<UserData>) {
  return {
    ...state,
    ...action.payload,
    authorizationStatus: AuthorizationStatus.Auth,
  };
}

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(checkAuthAction.fulfilled, authorize)
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, authorize)
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
