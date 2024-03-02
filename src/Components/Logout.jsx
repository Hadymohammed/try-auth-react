import React from 'react';
import { useAuth } from '../Contexts/AuthContext';

export default function Logout() {
    const {setAuth} = useAuth();

    const handleClick = () => {
        localStorage.removeItem('token');
        setAuth({
            IsAuthenticated: false,
            permissions: [],
        });

    }
    return (
        <button onClick={()=> handleClick()}>
            Logout
        </button>
    );
}