
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

import Serie from '../../helpers/Classes/Serie';

export const ContextProvider = ({ children }) => {



    // Estado almacena el resultado de la logica
    const [result, setResult] = useState(null);

    // Estado para mostrar al usuario que se esta cargando o ejecutando la logica para devolver un resultado
    const [loading, setLoading] = useState(false);

    // Estado para obtener el valor que usuario ingresa por input
    const [inputValue, setInputValue] = useState('');

    const [arrayResults, setArrResults] = useState([]);

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

        setArrResults([...arrayResults, obj ])

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
                arrayResults,
                setArrResults
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
export const useUserContext = () => {
    return useContext(Context);
}