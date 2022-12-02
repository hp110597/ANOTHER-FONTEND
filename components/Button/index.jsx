import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as MButton } from '@mui/material';

const StyledButton = styled(MButton)((props) => ({
    padding: "1% 5%",
    letterSpacing: '0.1em',
    textTransform: 'none',
    fontFamily: props.bold ? "AvertaBold" : "Averta",
    width: props.width,
    height: props.height,
    minWidth: 0,
    borderRadius: props.borderRadius,
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    '&:hover': {
        backgroundColor: props.hoverBackground,
        color: props.hoverTextColor,

    },
    fontSize: props.fontSize || '14px',
    border: props.border,
}));


const Button = (props) => {
    return <StyledButton
        type="submit"
        bold={props.bold}
        backgroundColor={props.backgroundColor || "#EDEDED"}
        hoverBackground={props.hoverBackground || '#FFFFFF'}
        fontSize={props.fontSize}
        width={props.width}
        height={props.height}
        onClick={props.onClick}
        disabled={props.disabled}
        borderRadius={props.borderRadius}
        border={props.border}
        textColor={props.textColor || '#7A7A7A'}
        hoverTextColor={props.hoverTextColor || "#000000"}
    >

        {props.title}
        {props.Icon}

    </StyledButton>
}

export default Button