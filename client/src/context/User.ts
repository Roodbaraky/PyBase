import { createContext } from "react";

export interface UserContextType {
    user_id: number,
    username: string,
    avatar_url: string,

}
export interface TokenContextType {
    access_token: string,
    token_type: string,
}

export const UserContext = createContext<UserContextType | null>(null);

export const TokenContext = createContext<TokenContextType | null>(null);