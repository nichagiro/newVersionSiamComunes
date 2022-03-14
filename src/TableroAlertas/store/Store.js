import React, { createContext, useState } from 'react';

export default ({ children }) => {

    const [state, setState] = useState({
        alertas: {
            alertsSelecteds : []
        },
        permisos: {},
        loading : false,
        modal : false
    });

    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    );
}

export const StoreContext = createContext();

