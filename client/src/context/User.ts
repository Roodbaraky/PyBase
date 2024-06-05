import { createContext } from "react";

export interface UserContextType {
    user_id: number,
    username: string,
    avatar_url:string,

}

export const UserContext = createContext<UserContextType | null>(null);