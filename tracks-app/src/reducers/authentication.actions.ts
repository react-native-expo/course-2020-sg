import { Dispatch } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthencationActionType, AuthenticationActions } from "./authentication.model";
import { navigate } from "../RootNavigation";

// CONFIG KEYS [Storage Keys]===================================
const TOKEN_KEY: string = 'token';

export const tryLocalSignin = (dispatch: Dispatch<AuthenticationActions>) => async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('trylocallogin', token);
    if (token) {
        dispatch({ type: AuthencationActionType.signin, payload: { token: token } });
        navigate('mainFlow', { screen: 'TrackList' });
    } else {
        navigate('loginFlow', { screen: 'Signup' });
    }
};

export const clearErrorMessage = (dispatch: Dispatch<AuthenticationActions>) => () => {
    dispatch({ type: AuthencationActionType.clear_error_message });
};

export const signup = (dispatch: Dispatch<AuthenticationActions>) => async ({ email, password }: { email: string; password: string }) => {
    try {
        //   const response = await trackerApi.post('/signup', { email, password });
        //   await AsyncStorage.setItem('token', response.data.token);

        await AsyncStorage.setItem(TOKEN_KEY, 'dummy-user-token');

        dispatch({ type: AuthencationActionType.signin, payload: { token: 'dummy-user-token' } });

        navigate('mainFlow', { screen: 'TrackList' });
    } catch (err) {
        dispatch({
            type: AuthencationActionType.add_error,
            payload: { errorMessage: 'Something went wrong with sign up' }
        });
    }
};

export const signin = (dispatch: Dispatch<AuthenticationActions>) => async ({ email, password }: { email: string; password: string }) => {
    try {
        // const response = await trackerApi.post('/signin', { email, password });
        // await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem(TOKEN_KEY, 'dummy-user-token');

        dispatch({ type: AuthencationActionType.signin, payload: { token: 'dummy-user-token' } });

        navigate('mainFlow', { screen: 'TrackList' });
    } catch (err) {
        dispatch({
            type: AuthencationActionType.add_error,
            payload: { errorMessage: 'Something went wrong with sign up' }
        });
    }
};

export const signout = (dispatch: Dispatch<AuthenticationActions>) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: AuthencationActionType.signout });
    navigate('loginFlow');
};