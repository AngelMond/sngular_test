import React from 'react'

// Contexto
import { useUserContext } from './context/Context';
import { Box, Button } from '@mui/material';


// Componente que muestra el resultado
export const ShowResult = () => {

    const { result, arrayResults, setArrResults, setResult } = useUserContext();


    const handleCleanHistory = () => {
        setArrResults([]);
        setResult(null);
    }

    return (
        <>
            <div className="row">
                <h3 className='col-5'>Resultados</h3>
                <div className="col-6">
                    <Box sx={{ position: 'relative' }}>
                        <Button
                            className=""
                            variant="contained"
                            type="button"
                            onClick={handleCleanHistory}
                        // disabled={loading}
                        >
                            Limpiar
                        </Button>

                    </Box>
                </div>
            </div>

            {arrayResults &&
                <Box sx={{ position: 'relative', height: 500, overflowY: 'auto' }}>
                    {
                        arrayResults.map((el, ix) => {
                            return (
                                <>
                                    <div className="row justify-content-start ">
                                        <div className=''>
                                            <span className='ms-2'>El término {el.input} de la serie es: {el.result}</span>
                                        </div>
                                    </div >
                                </>
                            )
                        })
                    }
                </Box>
            }
        </>
    )
}
