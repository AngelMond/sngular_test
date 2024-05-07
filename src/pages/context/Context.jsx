
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        console.log("hola desde contexto")
        // e.preventDefault();
        // setLoading(true);

        // console.log(inputValue)
        // setTimeout(function () {
        //     setLoading(false);
        //     setInputValue('');
        // }, 1000);
    }


    return (
        <>
            <Context.Provider value={{
                handleSubmit,
                loading,
                setInputValue,
                inputValue,
                result,
            }}>
                {children}
            </Context.Provider>
        </>
    )
}


export const useUserContext = () => {
    return useContext(ContextProvider);
}