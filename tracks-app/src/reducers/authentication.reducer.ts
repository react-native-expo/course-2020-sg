import { AuthenticationState } from "../models/state";
import { AuthencationActionType, AuthenticationActions, initialState } from "./authentication.model";



export default function (
    state: AuthenticationState = initialState,
    action: AuthenticationActions
) {
    switch (action.type) {
        case AuthencationActionType.add_error:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            };
        case AuthencationActionType.signin:
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
            };
        case AuthencationActionType.clear_error_message:
            return {
                ...state,
                errorMessage: ''
            };
        case AuthencationActionType.signout:
            return {
                ...state,
                errorMessage: '',
                token: null
            };
        default:
            return state;
    }
}
