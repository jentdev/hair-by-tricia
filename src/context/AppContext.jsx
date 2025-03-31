import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const value = {
        menuOpen, setMenuOpen,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;