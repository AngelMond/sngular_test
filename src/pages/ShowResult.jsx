import React from 'react'

// Contexto
import { usePageContext } from '../context/PageContext';

import { Box, Button } from '@mui/material';


// Componente que muestra el resultado
export const ShowResult = () => {

    const { result, resultHistory, setResultHistory, setResult } = usePageContext();


    const handleCleanHistory = () => {
        setResultHistory([]);
        setResult(null);
    }

    return (
        <>
            <div className="d-flex">
                <div className='m-2'>
                    <h3 className=''>Resultados</h3>
                </div>
                <div className="m-2">
                    <Box sx={{ position: 'relative' }}>
                        <Button
                            className=""
                            variant="contained"
                            type="button"
                            onClick={handleCleanHistory}
                        >
                            Limpiar
                        </Button>
                    </Box>
                </div>
            </div>

            {resultHistory && (
                <>
                    <Box sx={{ position: 'relative', height: 500, overflowY: 'auto', overflowX: 'hidden' }}>
                        <div className="row justify-content-center">
                            {resultHistory.map((el, ix) => {
                                return (
                                    <div key={ix} className=''>
                                        <span className='ms-2 font-custom text-secondary'>El término {el.input} de la serie es: {el.result}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </Box>
                </>
            )}

        </>
    )
}
