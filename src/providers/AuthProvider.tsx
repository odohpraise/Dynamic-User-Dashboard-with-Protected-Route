import React, { createContext, useContext, useState, type ReactNode } from 'react'

export type Role = 'admin' | 'editor' | 'viewer';

interface IUser {
    username: string,
    role: Role
}


export interface IUserContextType {
    user: IUser | null;
    login: (username: string, role: Role) => void;
    logout: () => void
}

const AuthContext = createContext<IUserContextType | undefined>(undefined)


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null)

    const login = (username: string, role: Role) => {
        setUser({ username, role })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be Used within an AuthProvider")
    }
    return context;
}
