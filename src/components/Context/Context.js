import React, { createContext } from "react";
// const context = React.createContext;

export const context = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});