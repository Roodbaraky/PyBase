import { Dispatch, SetStateAction, createContext } from "react";

interface User {
    id?: number;
    username?: string;

// this probably needs to include email, firstname, lastname, etc.
}

interface AuthContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    user: { username: '', id: 0 },
    setUser: () =>{},
});
