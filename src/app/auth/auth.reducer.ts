import { Action } from '@ngrx/store';
import { User } from './models/user.model';
import { AuthActionTypes } from './auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state: AuthState = initialAuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };
      case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      };
    default:
      return state;
  }
}
