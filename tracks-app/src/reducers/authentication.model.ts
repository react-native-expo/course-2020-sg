import { ActionMap } from "./model";
import { AuthenticationState } from "../models/state";

export type SignInAction = (data: { email: string, password: string }) => Promise<void>;
export type SignOutAction = () => Promise<void>;
export type SignUpAction = (data: { email: string, password: string }, onSignUpSucceeded?: ()=>void) => Promise<void>;
export type TryLocalSigninAction = () => Promise<void>;
export type ClearErrorMessageAction = () => void;

export enum AuthencationActionType {
    add_error = 'add_error',
    signin = 'signin',
    clear_error_message = 'clear_error_message',
    signout = 'signout'
}

export const initialState: AuthenticationState = {
    token: '',
    errorMessage: '',
}

export type AuthenticationPayload = {
    [AuthencationActionType.add_error] : {
        errorMessage: string
    };
    [AuthencationActionType.signin] : {
        token: string | null,
    };
    [AuthencationActionType.clear_error_message] : undefined;
    [AuthencationActionType.signout] : undefined;
}


export type AuthenticationActions = ActionMap<AuthenticationPayload>[keyof ActionMap<AuthenticationPayload>];

export interface AuthenticationContextProps {
    state: AuthenticationState;
    signIn?: SignInAction;
    signOut?: SignOutAction;
    signUp?: SignUpAction;
    tryLocalSignin?: TryLocalSigninAction;
    clearErrorMessage?: ClearErrorMessageAction

}
