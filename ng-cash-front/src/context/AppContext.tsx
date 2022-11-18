import React, { createContext } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }: any) => {

    const context = {

    };

return (
    <AppContext.Provider value={context}>
        { children }
    </AppContext.Provider>
)

};

export default AppProvider;
