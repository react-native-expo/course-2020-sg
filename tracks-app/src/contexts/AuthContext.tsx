import React, { createContext, useReducer, useMemo, useContext } from 'react';
import { AuthenticationContextProps, initialState } from '../reducers/authentication.model';
import authenticationReducer from '../reducers/authentication.reducer';
import { signin, signout, signup, tryLocalSignin, clearErrorMessage } from '../reducers/authentication.actions';

const AuthContext = createContext<AuthenticationContextProps>({
    state: initialState,
});

const AuthProvider: React.FC = ({ children }) => {
    
    const [state, dispatch] = useReducer(authenticationReducer, initialState);

    const value: AuthenticationContextProps = useMemo(() => {
        return {
            state,
            signIn: signin(dispatch),
            signOut: signout(dispatch),
            signUp: signup(dispatch),
            tryLocalSignin: tryLocalSignin(dispatch),
            clearErrorMessage: clearErrorMessage(dispatch)
        };
    }, [state]);
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth };

export default AuthProvider;
