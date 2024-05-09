import React, { useState } from 'react';

// Components
import { InputTextFieldOutlined } from '../components/Inputs/InputTextFieldOutlined';
import { SendButton } from '../components/buttons/SendButton';

// Context
import { usePageContext } from '../context/PageContext';

// Formualrio para que usuario ingrese un numero
export const UserForm = () => {


    // Funcion de context para ejecutar logica usando el input del usuario y el metodo de la clase Serie
    const { handleSubmit, loading, inputValue, setInputValue } = usePageContext();


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
                            </div>
                        </div>
                    </form>
                </section>
            </main>

        </>
    )
}
