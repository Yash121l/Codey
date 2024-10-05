import React, { createContext, useState, useContext } from 'react';

// Create User Context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook for consuming user context
export const useUser = () => useContext(UserContext);
