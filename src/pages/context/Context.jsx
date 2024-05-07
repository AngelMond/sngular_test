
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e, inputValue) => {
        e.preventDefault()
        console.log("hola desde contexto")
        console.log(inputValue)

        setLoading(true);
        setTimeout(function () {
            setResult(inputValue)
            setLoading(false);
            setInputValue('');
        }, 1000);
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
    return useContext(Context);
}