import { Padding } from '@mui/icons-material';
import { Box, TextField } from '@mui/material'
import React, { useCallback } from 'react'
import styles from './style.module.css'

const InputText = (props) => {
    const {
        lableFor,
        lableName,
        placeHolder,
        height,
        smallHeight,
        value,
        onInputChange,
        errorMessage,
        id
    } = props;
    const handleOnChange = useCallback((e) => {
        onInputChange(e)
    }, [])
    return (
        <div className={styles.inputText}>
            <label htmlFor={lableFor}>{lableName}</label>
            <input
                style={{
                    '--height': `${height || '20px'}`,
                    '--smallHeight': `${smallHeight || '20px'}`
                }}
                type="text"
                id={lableFor}
                name={lableFor}
                placeholder={placeHolder}
                value={value}
                onChange={handleOnChange}
            />
            <p>{errorMessage[id]}</p>
        </div>
    )
}

export default InputText