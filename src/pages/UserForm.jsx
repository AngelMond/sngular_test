import React, { useState } from 'react';
import { InputTextFieldOutlined } from '../components/Inputs/InputTextFieldOutlined';
import { SendButton } from '../components/buttons/SendButton';
import { useUserContext } from './context/Context';

export const UserForm = () => {
    const [inputValue, setInputValue] = useState('');

    // const { handleSubmit, loading } = useUserContext();


    return (
        <>
            <main className=''>
                <section>
                    <h1 className='text-center mb-5'>Calculadora de términos</h1>

                    <form >
                        <div className='row justify-content-center'>
                            <div className='col-5'>
                                <InputTextFieldOutlined setInputValue={setInputValue} inputValue={inputValue} isRequired={true} textLabel={"Introduce un número"} />
                                <SendButton
                                    // loading={loading}
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
