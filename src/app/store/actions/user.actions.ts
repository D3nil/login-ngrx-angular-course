import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SINGUP_SUCCESS = '[Auth] Signup Success',
    SINGUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout',
    GET_STATUS = '[Auth] GetStatus',
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) { }
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS
    constructor(public payload: any) { }
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE
    constructor(public payload: any) { }
}

export class SignUp implements Action {
    readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.SINGUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.SINGUP_FAILURE;
    constructor(public payload: any) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
    constructor(public payload: any) { }
}

export class GetStatus implements Action {
    readonly type = AuthActionTypes.GET_STATUS;
    constructor(public payload: any) { }
}

export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | LogOut
    | GetStatus