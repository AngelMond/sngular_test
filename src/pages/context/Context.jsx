
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hola desde contexto")
        console.log(inputValue)

        setLoading(true);
        setTimeout(function () {
            const resultado = Serie.calcularTermino(inputValue)
            console.log(`El término ${inputValue} de la serie es: ${resultado}`);

            setResult(resultado)
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

/* 
*  Desde aqui importamos los metodos de nuestro contexto, donde se puede desestructurar desde el componente 
*  donde se vayan a utilizar 
 */
export const useUserContext = () => {
    return useContext(Context);
}