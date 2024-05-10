import React, { useState } from 'react';

// Components
import { InputTextFieldOutlined } from '../components/Inputs/InputTextFieldOutlined';
import { SendButton } from '../components/buttons/SendButton';

// Context
import { usePageContext } from '../context/PageContext';

// Formualrio para que usuario ingrese un numero
export const UserForm = () => {


    // Funcion de context para ejecutar logica usando el input del usuario y el metodo de la clase Serie
    const { handleSubmit, loading, inputValue, setInputValue, errorNumber, result } = usePageContext();


    return (
        <>
            <main className=''>
                <section>
                    <h1 className='text-center mb-5'>Calculadora de términos</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='row justify-content-center'>
                            <div className='col-10 col-sm-10 col-md-8 col-lg-8'>
                                <InputTextFieldOutlined setInputValue={setInputValue} inputValue={inputValue} isRequired={true} textLabel={"Introduce un número"} />
                                <SendButton
                                    loading={loading}
                                    buttonText={'Calcular término'}
                                />
                                {errorNumber &&
                                    <span className='mt-3 text-danger'>{errorNumber}</span>
                                }
                                {result &&

                                    <div className='mt-4 mb-3 p-1'>
                                        <h4>Resultado: <span className='text-success'>{result}</span></h4>
                                    </div>
                                }
                            </div>
                        </div>
                    </form>
                </section>
            </main>

        </>
    )
}
