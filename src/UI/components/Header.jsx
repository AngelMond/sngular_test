import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useUserContext } from '../../pages/context/Context';


export const Header = () => {

    const { result } = useUserContext();

    return (
        <>
            <header>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" className='bg-blue'>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                SNGULAR
                            </Typography>
                            {result &&  
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {result}
                                </Typography>
                            }
                            <Typography variant="h6" component="div" >
                                Test
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
        </>
    )
}
