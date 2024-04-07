import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'USER_SIGN_IN':
            return { ...state, userInfo: action.payload };
        case 'USER_LOGOUT':
            return { ...state, userInfo: null };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
