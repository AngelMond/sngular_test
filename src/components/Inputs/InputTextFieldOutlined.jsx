import React from "react";

import { TextField } from '@mui/material';

const maxLength = 100;

export const InputTextFieldOutlined = ({ setInputValue, inputValue, isRequired, textLabel }) => {


    const handleInputChange = (e) => {
        if (inputValue.length <= maxLength) {
            setInputValue(e.target.value);
        }
    };

    return (
        <>
            <div className="mb-3">
                <label htmlFor="inputTextFieldOutlined" className="my-1">{isRequired ? '*' : null} <span className="text-ine">{textLabel}</span></label>
                <TextField
                    id="inputTextFieldOutlined"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    size="small"
                    inputProps={{
                        required: isRequired,
                        maxLength: maxLength
                    }}
                />
            </div>

        </>
    )
}