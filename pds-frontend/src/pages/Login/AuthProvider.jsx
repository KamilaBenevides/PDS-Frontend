import * as React from 'react';
import { useState } from 'react'
import { TOKEN_KEY } from '../../api/apollo';
import { useNavigate } from 'react-router-dom';

let AuthContext = React.createContext();

export const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
    let navigate = useNavigate();

    const signIn = (token) => {
        setToken(token);
    }

    const signOut = () => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        navigate("/");
    }

    const value = { token, signIn, signOut };


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;