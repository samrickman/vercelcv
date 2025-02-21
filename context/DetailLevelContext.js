"use client";

import { createContext, useState, useContext } from "react";

const DetailLevelContext = createContext();

export function DetailLevelProvider({ children }) {
    const [detailLevel, setDetailLevel] = useState(2); // Default is "Default" mode

    return (
        <DetailLevelContext.Provider value={{ detailLevel, setDetailLevel }}>
            {children}
        </DetailLevelContext.Provider>
    );
}

export function useDetailLevel() {
    return useContext(DetailLevelContext);
}
