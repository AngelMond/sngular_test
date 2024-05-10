import React from 'react'

// Contexto
import { usePageContext } from '../context/PageContext';

// Componentes
import { Box, Button } from '@mui/material';


// Componente que muestra todos los resultados
export const ShowResult = () => {

    // Contexto
    const { resultHistory, setResultHistory, setResult, result } = usePageContext();

    const handleCleanHistory = () => {
        setResultHistory([]);
        setResult(null);
    }

    return (
        <>
            
            <div className="d-flex">
                <div className='m-2'>
                    <h3 className='text-muted'>Historial </h3>
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
                                        <span className='ms-2 font-custom text-secondary'>
                                            El término {el.input} de la serie es: {el.result}
                                        </span>
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
