'use client';
import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const LayoutContext = createContext();

// 2. Create the provider
export const LayoutProvider = ({ children }) => {
    const [placeExpanded, setPlaceExpanded] = useState(false); // toggle variable

    const togglePlaceExpanded = () => {
        setPlaceExpanded((prev) => !prev);
    };

    return (
        <LayoutContext.Provider value={{ placeExpanded, togglePlaceExpanded }}>
            {children}
        </LayoutContext.Provider>
    );
};

// 3. Custom hook for easy access
export const useLayout = () => useContext(LayoutContext);
