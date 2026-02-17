'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        console.log('Fetching user...');
        try {
            const res = await fetch('/api/auth/me');
            if (res.ok) {
                const data = await res.json();
                console.log('User found:', data.user);
                setUser(data.user);
            } else {
                console.log('User fetch failed with status:', res.status);
                setUser(null);
            }
        } catch (err) {
            console.error('Auth check error:', err);
            setUser(null);
        } finally {
            console.log('Auth check complete, setting loading to false.');
            setLoading(false);
        }
    };

    const login = (userData) => {
        console.log('Logging in user:', userData);
        setUser(userData);
        setLoading(false);
    };

    const logout = async () => {
        console.log('Logging out...');
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            setUser(null);
            setLoading(false);
            router.push('/login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
