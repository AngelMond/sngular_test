
import React, { createContext, useContext, useState } from 'react';
import Decimal from 'decimal.js';
import Serie from '../helpers/Classes/Serie';

const Context = createContext();



export const CalcContextProvider = ({ children }) => {

    // Recibe la entrada del usuario
    const [inputValue, setInputValue] = useState('');
    const [errorNumber, setErrorNumber] = useState(null);
    

    // Resultados
    const [result, setResult] = useState(null);
    const [resultHistory, setResultHistory] = useState([]);

    // Muestra a usuario que se esta procesando la logica
    const [loading, setLoading] = useState(false);

    function calcularSerieConPromesa(n) {
        return new Promise((resolve, reject) => {
            try {
                const resultado = Serie.CalcularSerie(n);
                const resultadoNumerico = resultado.toNumber();
                resolve(resultadoNumerico);
            } catch (error) {
                reject(error);
            }
        });
    }


    // Controla el envio del formulario y ejecuta logica para devolver un resultado
    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            setErrorNumber(null);
            setLoading(true);

            // Si el valor es negativo muestra a usuario mensaje de error
            if (inputValue < 0) {
                setErrorNumber('Por favor ingresa un número positivo');
                setLoading(false);
            
            // Si el numero es muy grande muestra mensaje error al usuario
            } else if (inputValue > 10000) {
                
                setErrorNumber('El número es demasiado grande, por favor ingresa un número más pequeño');
                setLoading(false);
                
            } else if(inputValue <= 10000) {
                const decimalValue = new Decimal(inputValue);
                
                calcularSerieConPromesa(decimalValue)
                    .then(resultado => {
                        // Guarda todos los resultados
                        setResultHistory([...resultHistory, { input: inputValue, result: resultado }])

                        // Guarda el resultado actual
                        setResult(resultado)
                        setLoading(false);
                        setInputValue('');
                    })
                    .catch(error => {
                        console.error('Se produjo un error al calcular la serie:', error);
                        setLoading(false);
                    });
            }

        } catch (error) {
            console.error(error)
            setLoading(false);
        }
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
                setResultHistory,
                errorNumber
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
export const useCalcPageContext = () => {
    return useContext(Context);
}