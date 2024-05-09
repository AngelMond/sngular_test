
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

import Serie from '../helpers/Classes/Serie';

export const ContextProvider = ({ children }) => {

    // Estado para obtener el valor que usuario ingresa por input
    const [inputValue, setInputValue] = useState('');

    // Resultados
    const [result, setResult] = useState(null);
    const [resultHistory, setResultHistory] = useState([]);

    // Estado para mostrar al usuario que se esta cargando o ejecutando la logica para devolver un resultado
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("hola desde contexto")
        // console.log(inputValue)

        setLoading(true);

        
        // const serie = new Serie();
        const parsedInputValue = parseInt(inputValue); // Parse inputValue to integer
        const result = Serie.serie(parsedInputValue);
        console.log(`El término ${parsedInputValue} de la serie es: ${result}`);

        const obj = {
            input: inputValue,
            result: result
        }

        setResultHistory([...resultHistory, obj ])

        setResult(result)
        setLoading(false);
        setInputValue('');

    }


    return (
        <>
            <Context.Provider value={{
                handleSubmit,
                loading,
                setInputValue,
                inputValue,
                result,
                setResult,
                resultHistory,
                setResultHistory
            }}>
                {children}
            </Context.Provider>
        </>
    )
}

/* 
*  Desde aqui importamos los metodos de nuestro contexto, donde se puede desestructurar desde el componente 
*  donde se vayan a utilizar 
 */
export const usePageContext = () => {
    return useContext(Context);
}