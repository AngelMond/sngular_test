import React from 'react'

// Contexto
import { useUserContext } from './context/Context';


// Componente que muestra el resultado
export const ShowResult = () => {

    const { result } = useUserContext();

    return (
        <>
            {result &&

                <div className="row justify-content-center mt-5">
                    <div className='col-5'>
                        Resultado:
                        <span className='ms-2'>{result}</span>
                    </div>
                </div>
            }
        </>
    )
}
