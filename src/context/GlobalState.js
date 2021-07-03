// This is the global context store
// Note: if we had a larger application we would
// have a context for each big section 

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transactions: [
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// provider component

export const GlobalProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);
    // actions

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    // Provider provides state to the components it's wrapped around.
    return (<GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>);
}