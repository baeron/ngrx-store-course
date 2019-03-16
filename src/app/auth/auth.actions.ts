import { Action } from "@ngrx/store";

export enum AuthActionTypes {
  LoginAction = "[Login] Action",
  LogautAction = "[Logout] Action"
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
}

export type AuthActions = Login;
