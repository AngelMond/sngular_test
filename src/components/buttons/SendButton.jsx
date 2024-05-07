import React, { useRef, useState } from "react";

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export const SendButton = ({ buttonText, loading }) => {

    return (

        <>
            <Box sx={{ position: 'relative' }}>
                <Button
                    className={`col-12 fs-btn-loading my-1 m-0 ${loading ? '' : "bg-primary" }`}
                    variant="contained"
                    type="submit"
                    disabled={loading}
                >
                    {buttonText}
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: "inherit",
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
            </Box>
        </>
    )
}