import { createContext, use, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ hideSlogan, setHideSlogan ] = useState(false);
    const [ hideBgImg, setHideBgImg ] = useState(false);

    const getRoute = useLocation();
    const currentPage = (getRoute.pathname).replace('/', '');

    const value = {
        menuOpen, setMenuOpen,
        currentPage,
        hideSlogan, setHideSlogan
    };

    // hide slogan when not on homepage
    useEffect(() => {
        if (currentPage !== '') {
            setHideSlogan(true);
            setHideBgImg(true);
        }
        else {
            setHideSlogan(false);
            setHideBgImg(false);
        }
    }, [getRoute]);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;