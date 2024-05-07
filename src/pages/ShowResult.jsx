import React from 'react'
import { useUserContext } from './context/Context';

export const ShowResult = () => {

    const { result } = useUserContext();

    return (
        <>
            <div className="row justify-content-center mt-5">
                <div className='col-5'>
                    Resultado:
                    <span>{result}</span>
                </div>
            </div>
        </>
    )
}
